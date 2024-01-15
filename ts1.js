function numberSplit(num) {
    if (num === undefined) {}
    else {
        let a = Math.floor(num/2);
        let b = [ ];
        let c = (num - a);

        b.push(a,c);
        return b; 
    }
    //return [Math.floor(num/2), Math.ceil(num/2)];
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
console.log(numberSplit(-4));
