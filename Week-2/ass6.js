// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
    // 1. filter() all credit transactions
    let t1=transactions.filter((trans)=>trans.type=="credits")
    console.log("The credit type transaction: ",t1)

    // 2. map() to extract only transaction amounts
    let t2=transactions.map((trans)=>trans.amount)
    console.log("the tansaction amount is:",t2)
    // 3. reduce() to calculate final account balance
    let t3=transactions.reduce((acc,trans)=>acc+trans.amount,0)
    console.log("The final amount:",t3)
    // 4. find() the first debit transaction
    let t4=transactions.find((trans)=>trans.id==1)
    console.log("The 1st transcation:",t4)
    // 5. findIndex() of transaction with amount 10000
    let t5=transactions.findIndex((trans)=>trans.amount==10000)
    console.log("The index of amount 10000",t5)

