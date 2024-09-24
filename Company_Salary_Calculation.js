//Task 1: Create a Department Structure

const company = {
departments: [
    {
        departmentName: 'Sales', //sales department and employees
        employees: [
            {
                name: 'Tom',
                salary: 100000,
                subordinates: [
                    {
                        name: 'Alya',
                        salary: 50000,
                        subordinates: [
                            {
                                name: 'Mike',
                                salary: 34000,
                                subordinates: []
                            }
                        ]

                    }
                ]
            }
        ]
    },
    {
        departmentName: 'Development Operations', //DevOps department and employees
        employees: [
            {
                name: 'Ed',
                salary: 150000,
                subordinates: [
                    {
                        name: 'Marcus',
                        salary: 80000,
                        subordinates: []
                    },
                    {
                        name: 'Lauren',
                        salary: 80000,
                        subordinates: []
                    }
                ]
            }
        ]
    }





]


};
console.log(company); // prints company object


//Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    for (let employee of department.employees) { //loops every employee

        totalSalary += employee.salary;

        if (employee.subordinates.length > 0) { //calculates if an employee has subordinates or not
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates});
        }
    }

    return totalSalary;

}

//using the function
console.log(calculateDepartmentSalary(company.departments[0])); //Sales Department
console.log(calculateDepartmentSalary(company.departments[1])); //DevOps Department

//Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    for(let department of company.departments) {

        totalCompanySalary += calculateDepartmentSalary(department); //similar function but for the company
    }
    
    return totalCompanySalary;

}

console.log(calculateCompanySalary(company)); //Total Salary for the company
