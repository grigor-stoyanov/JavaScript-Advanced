function previousDay(year, month, day) {
    const d = new Date()
    d.setFullYear(year)
    d.setMonth(month-1)
    d.setDate(day - 1)
    console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)