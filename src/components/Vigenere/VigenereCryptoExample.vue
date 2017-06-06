<template>
  <div class="card">
    <h2>Przykład kryptoanalizy</h2>
    <p>Poniżej jest zaprezentowany widok aplikacji po wprowadzeniu zaszyfrowanego tekstu i przyciśnięciu przycisku “Odszyfruj”. Jak widać na obrazku poniżej, hasłem o najwyższym indeksie zbieżności jest prawidłowe hasło występujące dwukrotnie po sobie, co jest oczywiście dobrym wynikiem, bo właśnie w taki sposób działa ten szyfr. Drugim najlepszym hasłem jest już nasze pojedyncze hasło:</p>
    <img style="max-width: 100%;" src="../../assets/vigenere-decipher.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'vigenere-cryptoexample',
  data () {
    return {
      msg: 'Przykład kryptoanalizy Szyfru Vigenere'
    }
  }
}
</script>
