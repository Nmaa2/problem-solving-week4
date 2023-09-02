function pt(n){
    if(n <=0){
        return false;
    }
    while(n%2 == 0){
        n>>=1;
    }
    return n == 1;
}

const x=16;
const pta = pt(x);
console.log(pta);

const y=16;
const ptb = pt(y);
console.log(ptb);


