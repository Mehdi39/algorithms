/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const memo = {};
    this.map(i => {
        const key = fn(i);
        if (!memo[key]) {
            memo[key] = [i];
        } else {
            memo[key].push(i);
        }
    });
    return memo;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */