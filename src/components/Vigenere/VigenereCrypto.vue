<template>
  <div class="card">
    <h2>Kryptoanaliza</h2>
    <p>Kryptoanaliza szyfru Vigenere składa się z 2 głównych części: znalezienie długości klucza oraz właściwego klucza. Do znalezienia długości klucza wykorzystujemy test oparty na tz. indeksie zbieżności, a do znalezienia klucza właściwego testu zgodności chi-kwadrat.</p>
    <p>Indeks zbieżności jest techniką statystyczną dającą wskazówkę jak bardzo tekst jest “czytelny”. Indeks ten jest oparty na częstotliwości występowania liter, dlatego też nie zmienia się nawet po zaaplikowaniu szyfrów zamiennych. Wynik idealny indeksu: 0.06, wyniki skrajne: 0.03 - 0.04.</p>
    <p>Do zidentyfikowania długości klucza, zakładamy na początku, że wartość ta wynosi 2. Wyciągamy z tekstu zaszyfrowanego dwie sekwencje: 1, 3, 5, 7, … oraz 2, 4, 6, 8, …. Następnie sprawdzamy dla długości klucza 3, sprawdzając sekwencje 1, 4, 7, 10 ; 2, 5, 8, 11 oraz 3, 6, 9, 12. Ta procedura łamania szyfru i kalkulacja indeksy zbieżności dla każdej podsekwencji jest powtarzana dla wszystkich długości kluczy, które chcemy przetestować. Jesteśmy najbardziej zainteresowani średnią wartością indeksu.</p>
    <p>Po odnalezieniu długości klucza wiadomo już ile szyfrów Cezara mamy do złamania. Do tego zadania używamy techniki chi-kwadrat, która porówna frekwencje dystrybucji nasz podsekwencji do oczekiwanej czestotliwosci dystrybucji tekstu jawnego.</p>
  </div>
</template>

<script>
export default {
  name: 'vigenere-crypto',
  data () {
    return {
      msg: 'Kryptoanaliza Szyfru Vigenere'
    }
  }
}
</script>
