// define a mixin object
export default {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    },
    languageFitness: function (str, skipZeros) {
      var actualCount = []
      var modelCount = []
      // DATA FROM http://www.sttmedia.com/characterfrequency-polish
      modelCount['A'] = 0.0837
      modelCount['B'] = 0.0193
      modelCount['C'] = 0.0389
      modelCount['D'] = 0.0335
      modelCount['E'] = 0.0868
      modelCount['F'] = 0.026
      modelCount['G'] = 0.0146
      modelCount['H'] = 0.0125
      modelCount['I'] = 0.0883
      modelCount['J'] = 0.0228
      modelCount['K'] = 0.0301
      modelCount['L'] = 0.0224
      modelCount['M'] = 0.0281
      modelCount['N'] = 0.0569
      modelCount['O'] = 0.0753
      modelCount['P'] = 0.0287
      modelCount['Q'] = 0
      modelCount['R'] = 0.0415
      modelCount['S'] = 0.0413
      modelCount['T'] = 0.0385
      modelCount['U'] = 0.0206
      modelCount['W'] = 0.0411
      modelCount['V'] = 0
      modelCount['X'] = 0
      modelCount['Y'] = 0.0403
      modelCount['Z'] = 0.0533
      var charCount = 0
      str = str.toUpperCase()
      Array.from(str).forEach(function (element) {
        if (element.charCodeAt() >= 65 || element.charCodeAt() <= 90) {
          if (!actualCount[element]) {
            actualCount[element] = 1
            charCount++
          } else {
            actualCount[element]++
            charCount++
          }
        }
      }, this)

      var result = 0
      for (var i = 0; i < 26; i++) {
        var char = String.fromCharCode(65 + i)
        if (!actualCount[char]) {
          actualCount[char] = 0
          if (skipZeros) {
            continue
          }
        }
        if (modelCount[char] === 0) {
          result += 1000000
        } else {
          result += Math.pow(Math.floor(charCount * modelCount[char]) - actualCount[char], 2)
        }
      }
      return {val: result, text: str}
    },
    rot: function (text, move) {
      text = text.toUpperCase()
        // Split str into a character array
      return text.split('')
        // Iterate over each character in the array
          .map.call(text, function (char) {
            // Convert char to a character code
            var x = char.charCodeAt(0)
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
              return String.fromCharCode(x) // Return un-converted character
            } else if (x < (91 - move)) { // N = ASCII 78, if the character code is less than 78, shift forward 13 places
              return String.fromCharCode(parseInt(x) + parseInt(move))
            }
            // Otherwise shift the character 13 places backward
            return String.fromCharCode(parseInt(x) - (26 - parseInt(move)))
          }).join('')  // Rejoin the array into a string
    }
  }
}
