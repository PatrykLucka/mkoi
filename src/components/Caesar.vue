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
      <caesar-description v-if="state === 'description'"></caesar-description>
      <caesar-example v-if="state === 'example'"></caesar-example>
      <caesar-tool v-if="state === 'tool'"></caesar-tool>
      <caesar-crypto v-if="state === 'crypto'"></caesar-crypto>
      <caesar-crypto-example v-if="state === 'crypto-example'"></caesar-crypto-example>
      <caesar-crypto-tool v-if="state === 'crypto-tool'"></caesar-crypto-tool>
    </div>
  </div>
</template>

<script>
import CaesarDescription from './Caesar/CaesarDescription'
import CaesarExample from './Caesar/CaesarExample'
import CaesarTool from './Caesar/CaesarTool'
import CaesarCrypto from './Caesar/CaesarCrypto'
import CaesarCryptoExample from './Caesar/CaesarCryptoExample'
import CaesarCryptoTool from './Caesar/CaesarCryptoTool'

export default {
  name: 'Caesar',
  data () {
    return {
      msg: 'Szyfr Cezara',
      state: 'description'
    }
  },
  methods: {
  },
  components: { CaesarDescription, CaesarExample, CaesarTool, CaesarCrypto, CaesarCryptoExample, CaesarCryptoTool }
}
</script>
