<template>
  <div class="card row">
    <h1>Narzędzie szyfrujące Szyfrem Vigenere</h1>
    <div class="col-md-4 col-xs-12">
      <h3>Tekst do zaszyfrowania</h3>
      <textarea v-model="text" cols="30" rows="10"></textarea>
    </div>
    <div class="col-md-4 col-xs-12">
      <h3>Hasło</h3>
      <input type="text" v-model="cipherPassword">
      <button v-on:click="cipher()">Szyfruj</button>
    </div>
    <div class="col-md-4 col-xs-12">
      <h3>Zaszyfrowany tekst</h3>
      <textarea v-model="cipherText" v-on:change="cipher()" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigenere-tool',
  data () {
    return {
      msg: 'Narzędzie do Szyfru Vigenere',
      text: '',
      cipherPassword: '',
      cipherText: ''
    }
  },
  methods: {
    cipher: function () {
      this.text = this.text.toUpperCase()
      this.cipherPassword = this.cipherPassword.toUpperCase()
      var vm = this
      var i = 0
        // Split str into a character array
      this.cipherText = this.text.split('')
        // Iterate over each character in the array
          .map.call(vm.text, function (char) {
            // Convert char to a character code
            var x = char.charCodeAt(0)
            console.log(vm.cipherPassword[i % vm.cipherPassword.length])
            var move = vm.cipherPassword[i % vm.cipherPassword.length].charCodeAt(0) - 65
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
    }
  }
}
</script>
