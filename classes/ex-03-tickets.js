
function ticketSort(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    ticketObjects = []
    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|')
        price = Number(price)
        ticketObjects.push(new Ticket(destination, price, status))
    }
    if (criteria != 'price') {
        ticketObjects.sort((a, b) => a[criteria].localeCompare(b[criteria]))
    } else {
        ticketObjects.sort((a, b) => a[criteria] - b[criteria])

    }
    return ticketObjects
}

console.log(
    ticketSort(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'
        ],
        'price')
)