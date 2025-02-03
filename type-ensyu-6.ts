const outPutSumNumberOrMassage = (value1 : number | string , value2 : number | string) : void => {

    if(typeof value1 === "number" && typeof value2 === "number"){
        console.log(value1 * value2);
    }

    if(typeof value1 === "string" && typeof value2 === "string"){
        console.log(value1 + value2);
    }

    if(typeof value1 === "number" && typeof value2 === "string"){
        console.log(value1 + value2);
    }

    if(typeof value1 === "string" && typeof value2 === "number"){
        console.log(value1 + value2);
    }

}

outPutSumNumberOrMassage(1,"：これはnumber + stringです。");
outPutSumNumberOrMassage("弐：これはstring + numberです。",2);
outPutSumNumberOrMassage("参：これはstring + ","stringです。");
outPutSumNumberOrMassage(1,4);