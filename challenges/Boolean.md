# Boolean

### JS Hero 🥋

Exercise
Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.

    function nand(a, b){
     let and = a && b;
     return !and;
    }
