<template>
  <div class="card">
    <h2>Przykład</h2>
    <p>Szyfr ten jest bardzo prostym szyfrem. Znając zasadę działania - mając dany tekst “oddanieprojektumkoi”, szyfrujemy go algorytmem aby otrzymać tekst ”lwwzmrvkilqvpgfnplr”. Można do tego posłużyć się poniższą tabelą:</p>
    <img style="max-width: 100%;" src="http://www.thedavincigame.com/sites/default/files/images/Atbash_cipher.JPG" alt="">
  </div>
</template>

<script>
export default {
  name: 'atbash-example',
  data () {
    return {
      msg: 'Przykład Szyfru AtBash'
    }
  }
}
</script>
