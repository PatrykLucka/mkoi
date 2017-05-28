<template>
  <div class="card">
    <h2 class="text-left">Opis</h2>
    <p>Szyfr z rodzaju ograniczonych monoalfabetycznych szyfrów podstawieniowych. Zasada działania polega na podstawieniu zamiast jednej litery, litery leżącej po drugiej stronie alfabetu w takiej samej odległości od końca bądź początku. Wyjaśniając na przykładzie: za literę “a” powinno się podstawić literę “z”, a zamiast litery “c” powinno się podstawić 3 literę od końca, czyli “x”. Aby odszyfrować wiadomość należy ją ponownie zaszyfrować, uzyskując tym samym tekst jawny.</p>

    <br><br>

	  <p>Aby ułatwić sobie ręczne operacje na tym szyfrze wystarczy użyć tabeli.</p>
    <p>Tablica kodowa:</p>
    <p><b>A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z</b></p>
    <p><b>Z|Y|X|W|V|U|T|S|R|Q|P|O|N|M|L|K|J|I|H|G|F|E|D|C|B|A</b></p>

    <br><br>

    <p>Aby jeszcze bardziej ułatwić sobie pracę można zastosować inną, krótszą tabelę:</p>
    <p>Pierwsze 13 liter od początku: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>A|B|C|D|E|F|G|H|I|J|K|L|M</b></p>
    <p>Ostatnie 13 liter od końca: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Z|Y|X|W|V|U|T|S|R|Q|P|O|N</b></p>
  </div>
</template>

<script>
export default {
  name: 'atbash-description',
  data () {
    return {
      msg: 'Opis Szyfru AtBash'
    }
  }
}
</script>
