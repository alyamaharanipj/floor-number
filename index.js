const floorNumber = (locker) => {
    const remainder = locker % 18;
    let quotient = Math.floor(locker/18)
    if(remainder === 0) quotient--

    if(remainder >= 1 && remainder <= 5) return 1 + (3 * quotient)
        else if(remainder >= 6 && remainder <= 11) return 2 + (3 * quotient);
        else return 3 + (3 * quotient);
}

console.log(floorNumber(83))