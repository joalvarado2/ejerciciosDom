function revertirArray(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}

console.log(revertirArray(["A", "B", "C"]));

function arrayALista(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
      list = {value: array[i], rest: list};
    return list;
}
console.log(arrayALista([10, 20, 30]));


function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
      array.push(node.value);
    return array;
  }
console.log(listToArray(arrayALista([10, 20, 30])))