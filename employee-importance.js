// https://leetcode.com/problems/employee-importance/
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    // first find the employee in employees
    // we need to add their value to output
    // repeat this process for each of their subordinates
    // queue of employees starting at id
    // each time there are subs, join subs with stack (concat?)
    // keep repeating while stack.length > 0
    if (!employees || !Array.isArray(employees) || !id) return;
    var employeeQueue = [id];
    var currentEmployee;
    var importance = 0;


    var findCurrentEmployee = function(employeeId) {
        var employeeInDirectory = employees.filter((emp) => {
            return emp.id === employeeId;
        });
        var employeeInDirectory;
        var emp;

        // for (var i = 0; i < employees.length; i++) {
        //     emp = employees[i];
        //     console.log(emp)
        //     if (emp.id === employeeId) {
        //         employeeInDirectory = emp;
        //     }
        // }

        return employeeInDirectory;
    }

    while (employeeQueue.length > 0) {
        // take first item out of array
        // find this employee in directory
         currentEmployee = findCurrentEmployee(employeeQueue.shift());

         if (currentEmployee.subordinates && currentEmployee.subordinates.length > 0) {
            employeeQueue = employeeQueue.concat(currentEmployee.subordinates);
         }

         importance = importance + currentEmployee.importance;

    }
    
    return importance;
};
// employeeQueue = [1]
// shift first out and find in directory employeeQueue.shift()
// employeeQueue = []
// take subordinates (if they exist) [2,3] and join with employeeQueue
// employeeQueue = [2,3]
// shift first out and find in directory employeeQueue.shift()
// employeeQueue = [3]




/**
 * employeeDB = 
 * [[1, 5, [2, 3]], 
 * [2, 3, []], 
 * [3, 3, []]],
 *  
 * employeeId = 1
 */

var employees = [
    {
        id: 1,
        importance: 2,
        subordinates: [2]
    },
    {
        id: 2,
        importance: 3,
        subordinates: []
    }
]


console.log(GetImportance(employees, 2))