<template>
  <div class="card">
    <h2>Kryptoanaliza</h2>
    <p>Do znalezienia oryginalnego tekstu próbujemy deszyfracji z 25 wszystkimi możliwymi kluczami (wartości przesunięcia). Wynikami są wszystkie możliwe wariacje w zależności od klucza (1-25) i wylistowane po prawej stronie ekranu. Jak bardzo tekst jest “dopasowany” bądź “czytelny” sprawdzamy za pomocą obliczeń statystycznych odszyfrowanego tekstu, a następnie porównujemy je do wyników z tekstu standardowego. Funkcja “czytelności” wyda nam wartość, która im wyższa tym większe prawdopodobieństwo, że użyty klucz jest prawidłowy.</p>
    <p>Do naszego przykładu został użyta technika quadgram statisctics. Działa ona determinując na początku statystykę zwykłego “czytelnego” tekstu, a następnie prawdopodobieństwo, że tekst zaszyfrowany pochodzi z tej samej dystrybucji. Niepoprawnie rozszyfrowany tekst będzie zawierał sekwencje liter niespotykane w języku polskim np. “QKPC” oraz inne podobne. W ten sposób możemy wylistować listę wyników w zależności od użytych kluczy i następnie wybrać pozycję najbardziej czytelną, zawierającą najmniej rzadkich sekwencji.</p></p>
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
