# Moving Zeros To The End

### Kata 🥋

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Answer

    const moveZeros = function (arr) {
      var filtedList = arr.filter(function (num){return num !== 0;});
      var zeroList = arr.filter(function (num){return num === 0;});
      return filtedList.concat(zeroList);
    }
