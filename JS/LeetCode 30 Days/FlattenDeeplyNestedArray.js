/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    return n === 0 ? arr : arr.reduce(
            (acc, e) => typeof(e) === "number" ? 
              (acc.push(e), acc) : (acc.push(...flat(e, n-1)), acc),
           []);
};