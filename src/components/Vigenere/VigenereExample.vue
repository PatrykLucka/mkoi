<template>
  <div class="card">
    <h5>Przykład</h5>
    {{ msg }}
    <table class="contenttable">
      <tbody><tr>
      <td>Tekst jawny:</td><td>a</td><td>l</td><td>g</td><td>o</td><td>r</td><td>y</td><td>t</td><td>m</td><td>y</td><td>i</td><td>s</td><td>t</td><td>r</td><td>u</td><td>k</td><td>t</td><td>u</td><td>r</td><td>y</td><td>d</td><td>a</td><td>n</td><td>y</td><td>c</td><td>h</td>
      </tr>
      <tr>
      <td>Hasło:</td><td>v</td><td>i</td><td>g</td><td>e</td><td>n</td><td>e</td><td>r</td><td>e</td><td>v</td><td>i</td><td>g</td><td>e</td><td>n</td><td>e</td><td>r</td><td>e</td><td>v</td><td>i</td><td>g</td><td>e</td><td>n</td><td>e</td><td>r</td><td>e</td><td>v</td>
      </tr>
      <tr>
      <td>Tekst zaszyfrowany</td><td>v</td><td>t</td><td>m</td><td>s</td><td>e</td><td>c</td><td>k</td><td>q</td><td>t</td><td>q</td><td>y</td><td>x</td><td>e</td><td>y</td><td>b</td><td>x</td><td>p</td><td>z</td><td>e</td><td>h</td><td>n</td><td>r</td><td>p</td><td>g</td><td>c</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'vigenere-example',
  data () {
    return {
      msg: 'Przykład Szyfru Vigenere'
    }
  }
}
</script>

<style>
.contenttable{
  border-width: 0 0 1px 1px;
    border-style: solid;
    border-color: black;
    border-spacing: 0;
    border-collapse: collapse;
    empty-cells: show;
    margin: 10px auto;
}
.contenttable td{
  border-width: 1px 1px 0 0;
    border-style: solid;
    padding: 4px;
    margin: 0;
    border-color: black;
}
</style>
