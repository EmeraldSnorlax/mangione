function shuffle(arr: any[]) {
  let output = arr.slice();
  for (var i = output.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = output[i];
    output[i] = output[j];
    output[j] = temp;
  }
  return output;
}

export default shuffle;