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