# String incrementer

### Kata 🥋

Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

Answer

    function incrementString(str) {
      let num = "";
      for (let i = str.length - 1; i >= 0; i--) {
        if (isNaN(parseInt(str[i]))) {
          break;
        }
        num = str[i] + num;
      }
      if (num === "") {
        return str + "1";
      }
      let newNum = (parseInt(num) + 1).toString();
      while (newNum.length < num.length) {
        newNum = "0" + newNum;
      }
      return str.slice(0, str.length - num.length) + newNum;
    }
