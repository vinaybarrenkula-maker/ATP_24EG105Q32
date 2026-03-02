function SumArray(d){
    let sum = 0;

    for(let i = 0; i < d.length; i++){
        sum = sum + d[i];
    }

    return sum;
}

let d = [10,20,30];
let result = SumArray(d);
console.log("Sum:", result);
