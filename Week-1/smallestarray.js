//smmallest in marks array
let d=[10,20,30];
let temp=d[1]
for( i=0;i<3;i++){
    if(d[i]==temp||d[i]<=temp)
        temp=d[i];
}
console.log("smallest :",temp);

