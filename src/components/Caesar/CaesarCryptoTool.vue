<template>
  <div class="card row">
    <h1>Narzędzie wspierające kryptoanalizę Szyfru Cezara</h1>
    <div class="col-md-4 col-xs-12">
      <h3>Tekst zaszyfrowany</h3>
      <textarea v-model="cipherText" cols="30" rows="10"></textarea>
      <h3>Tekst odszyfrowany</h3>
      <textarea v-model="text" cols="30" rows="10"></textarea>
    </div>
    <div class="col-md-4 col-xs-12">
      <button class="decipher" v-on:click="decipher()">Odszyfruj</button>
    </div>
    <div class="col-md-4 col-xs-12">
      <h3>Propozycje odszyfrowania</h3>
      <h5>(Zaznacz prawidłowe odszyfrowanie)</h5>

      <div class="checkbox" v-for="item of decipheredList">
        <label><input type="radio" name="choice" v-on:click="select(item.text)">{{ item.text.length > 20 ? item.text.substring(0, 20) + '...' : item.text}}</label>
      </div>
    </div>
  </div>
</template>

<script>

import myMixin from '../../mixins.js'

export default {
  name: 'caesar-cryptotool',
  data () {
    return {
      msg: 'Narzędzie do kryptoanalizy Szyfru Cezara',
      text: '',
      cipherText: '',
      decipheredList: []
    }
  },
  mixins: [myMixin],
  methods: {
    decipher: function () {
      this.decipheredList = []
      for (var i = 1; i < 27; i++) {
        var current = this.languageFitness(this.rot(this.cipherText, i))
        this.decipheredList.push(current)
      }

      this.decipheredList = this.decipheredList.sort(function (a, b) { return a.val - b.val })
    },
    select: function (selectedText) {
      this.text = selectedText
    }
  }
}
</script>

<style>
.decipher{
  margin-top: 35px;
}
</style>
