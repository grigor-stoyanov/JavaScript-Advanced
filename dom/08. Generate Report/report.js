function generateReport() {
    // get all table rows
    rows = document.querySelectorAll('tbody tr')
    // get all checked headers
    headers = document.querySelectorAll('thead th')
    headers = Array.from(headers).filter((v) => {
        if (v.lastElementChild.checked) { return v }
    })
    // go trough every row and save only ones with same index as checked
    data = []
    for (row of Array.from(rows)) {
        let obj = {}
        for (col of headers) {
            let i = col.cellIndex
            let info = row.children[i]
            obj[col.textContent] = info.textContent
        }
        data.push(obj)
    }
    // write JSON output to textarea
    document.getElementById('output').value = JSON.stringify(data)
}