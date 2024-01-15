function totalVolume() {
    let total = 0;
    let tmp = 1;

    for (let al = 0; al < arguments.length; al++) {
        for (let all = 0; all < arguments.length; all++) {
            tmp = tmp * arguments[al][all];
        }  
        total += tmp;
        tmp = 1;
    }
    return total;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));