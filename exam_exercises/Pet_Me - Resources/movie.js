class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName
        this.ticketPrice = ticketPrice
        this.screenings = []
        this.totalProfit = 0
        this.totalSoldTickets = 0
    }
    newScreening(date, hall, description) {
        // check for alreay entered screening
        for (const screen of this.screenings) {
            if (screen.date == date && screen.hall == hall) {
                throw Error(`Sorry, ${hall} hall is not available on ${date}`)
            }
        }
        // add screeening and return msg
        this.screenings.push({ date, hall, description })
        return `New screening of ${this.movieName} is added.`
    }
    endScreening(date, hall, soldTickets) {
        // check for screening available on date and hall
        for (const screen of this.screenings) {
            if (screen.date == date && screen.hall == hall) {
                // calculate current screening profit
                let currentProfit
                currentProfit = this.ticketPrice * soldTickets
                this.totalProfit += currentProfit
                this.totalSoldTickets += soldTickets
                this.screenings.splice(this.screenings.indexOf(screen),1)
                return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
            }
        }
        throw Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
    }
    toString() {
        let result = `${this.movieName} full information:\nTotal profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.totalSoldTickets}\n`
        const screenInfo = []
        if (this.screenings.length) {
            this.screenings.sort((a, b) => {
                return (a.hall).localeCompare(b.hall)
            })
            for (const screen of this.screenings) {
                screenInfo.push(`${screen.hall} - ${screen.date} - ${screen.description}`)
            }
            result += "Remaining film screenings:\n" + screenInfo.join('\n')
        } else {
            result += "No more screenings!"
        }
        return result
    }
}



let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
