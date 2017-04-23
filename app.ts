var array: number[] = [1,2,3];
var array2: Array<number> =[1,2,3];

class KeyValuePair<TKey, TValue>{
    constructor(
        public key: TKey,
        public value: TValue
    ){}
}
let pair1
    =new KeyValuePair<number,string>(1,'first');
let pair2
    =new KeyValuePair<string,Date>('second', new Date(Date.now()));
let pair3
    =new KeyValuePair<number,string>(3,'third');

class KeyValuePairPrinter<T,U> {
    constructor(private pairs: KeyValuePair<T,U>[]){}
    print() {
        for (let p of this.pairs) {
            console.log(`${p.key}:${p.value}`)
        }
    }
}
var printer=new KeyValuePairPrinter([pair1,pair3])
//pair2 does not share the same generic parameters 
//thus different type of object
//var printer=new KeyValuePairPrinter([pair1,pair2])
printer.print();