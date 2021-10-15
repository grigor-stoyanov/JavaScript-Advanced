class Company {
    constructor() {
        this.departments = {}
    }
    addEmployee(name, salary, position, department) {
        for (let arg of arguments) {
            if (!arg || arg[1] < 0) {
                throw Error('Invalid input!')
            }
        }
        if (!this.departments[department]) {
            this.departments[department] = [{name,salary,position}]
        }
        else {
            this.departments[department].push({ name, salary, position })
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }
    bestDepartment() {

        let maxAvgSalary = Number.MIN_SAFE_INTEGER
        let bestDepartment, bestDepartmentName,result
        for (let [name, department] of Object.entries(this.departments)) {
            let avgSalary = 0
            for (let worker of department) {
                avgSalary += worker.salary / department.length
            }
            if (avgSalary > maxAvgSalary) {
                maxAvgSalary = avgSalary
                bestDepartment = department
                bestDepartmentName = name
                avgSalary = 0
            }

        }
        bestDepartment.sort((a, b) => {
            if (a.salary - b.salary == 0) {
                return a.name.localeCompare(b.name)
            } else {
                return b.salary - a.salary
            }
        })
        result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${maxAvgSalary.toFixed(2)}\n`
        const workers = []
        for (let worker of bestDepartment) {
            workers.push(`${worker.name} ${worker.salary} ${worker.position}`)
        }
        result += workers.join('\n')
        return result
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());