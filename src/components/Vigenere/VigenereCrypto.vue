<template>
  <div class="card">
    <h5>Kryptoanaliza</h5>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'vigenere-crypto',
  data () {
    return {
      msg: 'Kryptoanaliza Szyfru Vigenere'
    }
  }
}
</script>
