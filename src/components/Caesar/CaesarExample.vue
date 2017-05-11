<template>
  <div class="card">
    <h5>Przykład</h5>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'caesar-example',
  data () {
    return {
      msg: 'Przykład Szyfru Cezara'
    }
  }
}
</script>
