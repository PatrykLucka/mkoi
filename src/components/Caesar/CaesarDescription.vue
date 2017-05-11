<template>
  <div class="card">
    <h2 class="text-left">Opis</h2>
    <p>Szyfr cezara jest szyfrem monoalfabetycznym podstawieniowym, czyli jednym z najprostszych technik szyfrowania. Każda litera tekstu jawnego zastępowana jest inną, oddaloną od niej o stałą liczbę pozycji w alfabecie, literą. Kierunek zmiany musi być zachowany. W szyfrze nie odróżnia się liter małych i dużych.</p>
    <img src="http://www.thejavaprogrammer.com/wp-content/uploads/2016/11/Caesar-Cipher-in-Java-Encryption-and-Decryption.png" alt="">
    <p>Mimo że algorytm zastosowany w kodzie cezara nie jest skomplikowanym algorytmem, to bywa on używany jako fragmenty bardziej złożonych systemów szyfrowania</p>
  </div>
</template>

<script>
export default {
  name: 'caesar-description',
  data () {
    return {
      msg: 'Opis Szyfru Cezara'
    }
  }
}
</script>
