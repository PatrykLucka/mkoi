<template>
  <div class="card">
    <h2>Przykład kryptoanalizy</h2>
    <p>Poniżej zaprezentowany przykład widoku aplikacji po wprowadzeniu zaszyfrowanego tekstu i przyciśnięciu przycisku “Odszyfruj”. Jak widać tekst prawidłowo odszyfrowany jest dla 3 pozycji na liście.</p>
    <img style="max-width: 100%;" src="../../assets/vigenere-decipher.jpg" alt="">
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
