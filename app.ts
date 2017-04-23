function totalLen(x: (string|any[]), 
                  y: (string|any[])): number { 
    let total: number = x.length + y.length;

    x.slice(0);
    //type guard syntax
    if (x instanceof Array){
        x.push('abc');        
    }
    //possible because string is a primitive type
    //if(typeof x === 'string'){
    if (x instanceof String){
        x.substr(1);
    }
    return total;
}

