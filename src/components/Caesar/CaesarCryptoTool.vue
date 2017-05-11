<template>
  <div class="card">
    <h5>Kryptoanaliza</h5>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'caesar-cryptotool',
  data () {
    return {
      msg: 'Narzędzie do kryptoanalizy Szyfru Cezara'
    }
  }
}
</script>
