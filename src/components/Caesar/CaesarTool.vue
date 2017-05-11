<template>
  <div class="card">
    <h5>Narzędzie</h5>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'caesar-tool',
  data () {
    return {
      msg: 'Narzędzie do Szyfru Cezara'
    }
  }
}
</script>
