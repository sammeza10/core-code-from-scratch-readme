# String: substr()

### JS Hero 🥋

Exercise
Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.

Example: firstWord('see and stop') should return 'see'.

    function firstWord(s) {
      let firstBlank = s.indexOf(' ');
      return s.substr(0, firstBlank);
    }
