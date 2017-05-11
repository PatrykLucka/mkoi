<template>
  <div class="card">
    <h5>Przykład kryptoanalizy</h5>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'caesar-cryptoexample',
  data () {
    return {
      msg: 'Przykład kryptoanalizy Szyfru Cezara'
    }
  }
}
</script>
