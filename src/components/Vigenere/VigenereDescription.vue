<template>
  <div class="card">
    <h2 class="text-left">Opis</h2>
    <p>Szyfr Vigenere’a jest szyfrem polialfabetycznym podstawieniowym. Słabość wspomnianych już wcześniej technik monoalfabetycznych była motywacją do ich udoskonalania i rozbudowywania. Naturalnym krokiem było korzystanie z kilku alfabetów zamiast jednego, co dało początek właśnie szyfrom polialfabetycznym. Opisywany w tym punkcie szyfr został stworzony w XVI wieku przez Blaise de Vigenere’a.</p>
    <p>Szyfrowanie szyfrem Vigenere’a odbywa się na podstawie hasła. Każdą literę tekstu jawnego szyfruje się korzystając z alfabetu zaczynającego się od odpowiedniej litery w haśle. Jeżeli hasło jest krótsze od szyfrowanego tekstu powtarzamy je wielokrotnie (Przykład poniżej).</p>
  </div>
</template>

<script>
export default {
  name: 'vigenere-description',
  data () {
    return {
      msg: 'Opis Szyfru Vigenere'
    }
  }
}
</script>
