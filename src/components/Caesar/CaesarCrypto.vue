<template>
  <div class="card">
    <h5>Kryptoanaliza</h5>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'caesar-crypto',
  data () {
    return {
      msg: 'Kryptoanaliza Szyfru Cezara'
    }
  }
}
</script>
