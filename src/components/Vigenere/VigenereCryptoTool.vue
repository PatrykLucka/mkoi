<template>
  <div class="card row vigenere-crypto-tool">
    <h1>Narzędzie wspierające kryptoanalizę Szyfru Vigenere</h1>
    <div class="col-md-4 col-xs-12">
      <h3>Tekst zaszyfrowany</h3>
      <textarea v-model="cipherText" cols="30" rows="10"></textarea>
      <h3>Tekst odszyfrowany</h3>
      <textarea v-model="text" cols="30" rows="10"></textarea>
    </div>
    <div class="col-md-4 col-xs-12">
      <button class="decipher" v-on:click="indexOfCoincidence()">Odszyfruj</button>
      <h3>Przewidywane hasło:</h3>
      <input readonly type="text" v-model="password">
    </div>
    <div class="col-md-4 col-xs-12">
      <h3>Indeks zbieżności</h3>
      <h5>(*dł. cyklu*: *indeks*)</h5>

      <div class="checkbox"v-for="item of indexesOfCoincidence">
        <label><input type="radio" name="index" v-on:click="select(item.index)">&nbsp; {{item.index}}: {{item.val}}</label>
      </div>
    </div>
  </div>
</template>

<script>

import myMixin from '../../mixins.js'

export default {
  name: 'vigenere-cryptotool',
  data () {
    return {
      msg: 'Narzędzie do kryptoanalizy Szyfru Vigenere',
      text: '',
      password: '',
      cipherText: '',
      decipheredList: [],
      indexesOfCoincidence: []
    }
  },
  mixins: [myMixin],
  methods: {
    decipher: function () {
      this.cipherText = this.cipherText.toUpperCase()
      this.password = this.password.toUpperCase()
      var vm = this
      var i = 0
        // Split str into a character array
      this.text = this.cipherText.split('')
        // Iterate over each character in the array
          .map.call(vm.cipherText, function (char) {
            // Convert char to a character code
            var x = char.charCodeAt(0)
            console.log(vm.password[i % vm.password.length])
            var move = 91 - vm.password[i % vm.password.length].charCodeAt(0)
            i++
            console.log(move)
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
              return String.fromCharCode(x) // Return un-converted character
            } else if (x < (91 - parseInt(move))) { // N = ASCII 78, if the character code is less than 78, shift forward
              return String.fromCharCode(parseInt(x) + parseInt(move))
            }
            // Otherwise shift backward
            return String.fromCharCode(parseInt(x) - (26 - parseInt(move)))
          }).join('')  // Rejoin the array into a string
    },
    select: function (passwordLength) {
      var password = []
      var arrayText = Array.from(this.cipherText)
      for (var i = 0; i < passwordLength; i++) {
        var subtext = []
        for (var j = i; j < arrayText.length; j = j + passwordLength) {
          subtext.push(arrayText[j])
        }
        var decipheredList = []
        for (var k = 1; k < 27; k++) {
          var current = this.languageFitness(this.rot(subtext.join(''), k), true)
          decipheredList.push({item: current, index: k})
        }
        decipheredList = decipheredList.sort(function (a, b) { return a.item.val - b.item.val })
        console.log('index:')
        console.log(decipheredList[0].index)
        console.log(String.fromCharCode(91 - decipheredList[0].index))
        password.push(String.fromCharCode(91 - decipheredList[0].index))
      }
      this.password = password.join('')
      this.decipher()
    },
    indexOfCoincidence: function () {
      var text = this.cipherText.toUpperCase()
      this.indexesOfCoincidence = []
      for (var i = 1; i < 21; i++) {
        var arrayText = Array.from(text)
        var avarages = []
        for (var j = 0; j < i; j++) {
          var charCount = 0
          var lettersCount = []
          for (var k = 0; k < 26; k++) {
            var char = String.fromCharCode(65 + k)
            lettersCount[char] = 0
          }
          for (var l = j; l < arrayText.length; l = l + i) {
            if (l < arrayText.length) {
              var element = arrayText[l]
              if (element.charCodeAt() >= 65 || element.charCodeAt() <= 90) {
                lettersCount[element]++
                charCount++
              }
            }
          }
          var sum = 0
          var allLettersPower = charCount * (charCount - 1)
          for (var m = 0; m < 26; m++) {
            var char2 = String.fromCharCode(65 + m)
            sum += (lettersCount[char2] * (lettersCount[char2] - 1)) / allLettersPower
          }
          avarages.push(sum)
        }

        var indexOfCoincidence = 0
        for (var n = 0; n < avarages.length; n++) {
          indexOfCoincidence += avarages[n]
        }
        indexOfCoincidence /= avarages.length
        this.indexesOfCoincidence.push({index: i, val: indexOfCoincidence})
      }
      this.indexesOfCoincidence.sort(function (a, b) { return b.val - a.val })
    }
  }
}
</script>

<style>
.decipher{
  margin-top: 35px;
}
.vigenere-crypto-tool p{
  text-align: center;
}
</style>
