<template>
  <div class="hello">
    <div class="header">
      <h1>{{ msg }}</h1>
    </div>
    <div class="container">
      <ul class="nav nav-tabs nav-justified">
          <li role="presentation" v-bind:class="{ 'active': state === 'description' }">
            <a v-on:click="state = 'description'" href="#opis">Opis działania</a>
          </li>
          <li role="presentation" v-bind:class="{ 'active': state === 'example' }">
            <a v-on:click="state = 'example'" href="#przyklad-dzialania">Przykład</a>
          </li>
          <li role="presentation" v-bind:class="{ 'active': state === 'tool' }">
            <a v-on:click="state = 'tool'" href="#szyfrowanie">Narzędzie szyfrujące</a>
          </li>
          <li role="presentation" v-bind:class="{ 'active': state === 'crypto' }">
            <a v-on:click="state = 'crypto'" href="#kryptoanaliza">Kryptoanaliza</a>
          </li>
          <li role="presentation" v-bind:class="{ 'active': state === 'crypto-example' }">
            <a v-on:click="state = 'crypto-example'" href="#przyklad-krypto">Przykład kryptoanalizy</a>
          </li>
          <li role="presentation" v-bind:class="{ 'active': state === 'crypto-tool' }">
            <a v-on:click="state = 'crypto-tool'" href="#narzedzie-krypto">Narzędzie do kryptoanalizy</a>
          </li>
      </ul>
      <vigenere-description v-if="state === 'description'"></vigenere-description>
      <vigenere-example v-if="state === 'example'"></vigenere-example>
      <vigenere-tool v-if="state === 'tool'"></vigenere-tool>
      <vigenere-crypto v-if="state === 'crypto'"></vigenere-crypto>
      <vigenere-crypto-example v-if="state === 'crypto-example'"></vigenere-crypto-example>
      <vigenere-crypto-tool v-if="state === 'crypto-tool'"></vigenere-crypto-tool>
    </div>
  </div>
</template>

<script>
import VigenereDescription from './Vigenere/VigenereDescription'
import VigenereExample from './Vigenere/VigenereExample'
import VigenereTool from './Vigenere/VigenereTool'
import VigenereCrypto from './Vigenere/VigenereCrypto'
import VigenereCryptoExample from './Vigenere/VigenereCryptoExample'
import VigenereCryptoTool from './Vigenere/VigenereCryptoTool'

export default {
  name: 'Vigenere',
  data () {
    return {
      msg: 'Szyfr Vigenere',
      state: 'description'
    }
  },
  methods: {
  },
  components: { VigenereDescription, VigenereExample, VigenereTool, VigenereCrypto, VigenereCryptoExample, VigenereCryptoTool }
}
</script>
