/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


   // 1. filter() employees from IT department
let e1=employees.filter((employee)=>employee.department=="IT")
 console.log("the employees in It:",e1)

   // 2. map() to add:
    //        netSalary = salary + 10% bonus
let e2=employees.map((employee)=>{
    let netSalary=employee.salary+0.10*employee.salary
    return netSalary
}
)
console.log("the net salary the employee:",e2)


   // 3. reduce() to calculate total salary payout
let e3=employees.reduce(function(acc,employee){
  let totalpayout=acc+employee.salary
     return totalpayout},0
      
)
console.log("the total payouts:",e3)
   // 4. find() employee with salary 30000
let e4=employees.find((employee)=>employee.salary==30000)
  console.log("the employee with salary:",e4)
   // 5. findIndex() of employee "Neha"
let e5=employees.findIndex((employee)=>employee.name="Neha")
  console.log("The Employee with index :",e5)






