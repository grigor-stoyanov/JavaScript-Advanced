function daysInMonth(month, year) {
    var d = new Date(year, month, 0)
    console.log(d.getDate())
}
daysInMonth(2,2019)
daysInMonth(2,2020)