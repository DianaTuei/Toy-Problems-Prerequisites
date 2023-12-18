function calcNetSalary(basicSalary, benefits){
//  making an array to calculate deduction tax rates
    const taxRates = [
        [0,24000,0.1],
        [24001,32333,0.25],
        [32334,500001,0.3],
        [500001,800000,0.325],
        [800001,Infinity,0.35]
    ];

// set tax to 0

    let tax = 0;
    for(const[lower,upper,rate] of taxRates ){
        if(basicSalary <= upper){
            tax = salary * rate;
        }
    }
    return tax;
}

// create a function to calculate NHIF based on salary
function calcNHIF(basicSalary){
    return salary * 0.05
}

// create function to calculate NSSF based on salary
function calcNSSF(basicSalary){
    return salary * 0.06;
}

function calcNetSalary(basicSalary, payeTax, nhif, nssf){
    // declare the variables salary,benefits,payeTax,nhif,nssf
    const salary = 20000;
    const benefits = 5000;
    const payeTax = calcPayeTax(basicSalary + benefits);
    const nhif = calcNHIF (basicSalary);
    const nssf = calcNSSF (basicSalary);

    // calculate Net Salary
    const netSalary = salary- payeTax - nhif - nssf;

    // print out the calculated deductions
    console.log("PAYE Tax:", payeTax);
    console.log("NHIF Amount:", nhif);
    console.log("NSSF Amount:",nssf);
    console.log("Net Salary:",netSalary);
    
}

calcNetSalary();

const basicSalary = prompt("Input your Basic Salary:");
const benefits = prompt("Input your Benefits:");
calcNetSalary(parseFloat(basicSalary), parseFloat(benefits));























