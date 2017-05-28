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
      </ul>
      <at-bash-description v-if="state === 'description'"></at-bash-description>
      <at-bash-example v-if="state === 'example'"></at-bash-example>
      <at-bash-tool v-if="state === 'tool'"></at-bash-tool>
    </div>
  </div>
</template>

<script>
import AtBashDescription from './AtBash/AtBashDescription'
import AtBashExample from './AtBash/AtBashExample'
import AtBashTool from './AtBash/AtBashTool'

export default {
  name: 'AtBash',
  data () {
    return {
      msg: 'Szyfr AtBash',
      state: 'description'
    }
  },
  methods: {
  },
  components: { AtBashDescription, AtBashExample, AtBashTool }
}
</script>
