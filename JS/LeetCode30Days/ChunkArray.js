/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const chunked = [];
    const length = arr.length;
    for(let i=0;i<length;){
      const subarray = [];
      let j = 0;
      for(j=0;j<size && j + i < length;j++){
        subarray.push(arr[j+i]);
      }
      i += j;
      chunked.push(subarray);
    }
    return chunked;

    // var chunked = [];
    // var i = 0;
    // while (i < arr.length) {
    //     chunked.push(arr.slice(i, i + size));
    //     i += size;
    // }
    // return chunked;
};