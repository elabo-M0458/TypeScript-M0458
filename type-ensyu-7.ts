const calcTax = (lists) : string => {
    return lists.map((list) => (list * 1.08).toFixed());
}

const beforeSumTax = [300,100,120,1000,500];

const afterSumTax = calcTax(beforeSumTax);

console.log(afterSumTax);