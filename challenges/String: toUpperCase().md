# String: toUpperCase()

### JS Hero 🥋

Exercise
Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.


    function toCase(text) {
      return text.toLowerCase() + '-' + text.toUpperCase();
    }
