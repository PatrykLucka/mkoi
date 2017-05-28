<template>
  <div class="card row">
    <h1>Narzędzie szyfrujące Szyfrem AtBash</h1>
    <div class="col-md-4 col-xs-12">
      <h3>Tekst do zaszyfrowania</h3>
      <textarea v-model="text" cols="30" rows="10"></textarea>
    </div>
    <div class="col-md-4 col-xs-12">
      <button class="decipher" v-on:click="cipher()">Szyfruj</button>
    </div>
    <div class="col-md-4 col-xs-12">
      <h3>Zaszyfrowany tekst</h3>
      <textarea v-model="cipherText" v-on:change="cipher()" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'atbash-tool',
  data () {
    return {
      msg: 'Narzędzie do Szyfru AtBash',
      text: '',
      cipherMove: 0,
      cipherText: ''
    }
  },
  methods: {
    cipher: function () {
      this.text = this.text.toUpperCase()
      var vm = this
        // Split str into a character array
      this.cipherText = this.text.split('')
        // Iterate over each character in the array
          .map.call(vm.text, function (char) {
            // Convert char to a character code
            var x = char.charCodeAt(0)
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
              return String.fromCharCode(x) // Return un-converted character
            }
            return String.fromCharCode(91 - parseInt(x) + 64)
          }).join('')  // Rejoin the array into a string
    }
  }
}
</script>
