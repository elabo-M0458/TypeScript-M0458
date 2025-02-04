const calcTax = (lists) : string => {
    return lists.map((list) => (list * 1.08).toFixed());
}

const sumExcludingTax = [300,100,120,1000,500];

const sumIncludingTax = calcTax(sumExcludingTax);

console.log(sumIncludingTax);