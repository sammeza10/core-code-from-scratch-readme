# String: indexOf()

### JS Hero 🥋

Exercise

Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.
Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

    function indexOfIgnoreCase(t1, t2){
       let t1L = t1.toLowerCase();
       let t2L = t2.toLowerCase();
       return t1L.indexOf(t2L);
    }
