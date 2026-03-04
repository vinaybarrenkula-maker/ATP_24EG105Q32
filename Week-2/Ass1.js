const temp=[32,35,28,40,38,30,42];
//fiter()  temp>35
const t1=temp.filter((element)=>element>35)
  console.log("temperatures above 35:",t1);
// map()   convert c to f
   let t2=temp.map((element)=>element*9/5+32)
   console.log("farhenhit coversions : ",t2)
// reduce average
const t3=temp.reduce((acc,element)=>(acc+element))
console.log("average temperatures:",t3/temp.length)
// find()
const t4=temp.find((element)=>element>40)
console.log("elements > 40:",t4)
// findindex()
const t5=temp.findIndex((element)=>element==28)
console.log(" index of elemengt 28:",t5)
//c*9/5+32
