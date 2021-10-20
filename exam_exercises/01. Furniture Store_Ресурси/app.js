window.addEventListener('load', solve);

function solve() {
    // get input and output elements from html
    const formData = document.querySelectorAll('input, textArea')
    const tableBody = document.getElementById('furniture-list')
    const totalPrice = document.querySelector('.total-price')
    // add functionality adds row with info and buttons to table
    document.getElementById('add').addEventListener('click', onClick)
    function e(type, attr, ...content) {
        const element = document.createElement(type)
        for (let prop in attr) {
            element[prop] = attr[prop]
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item)
            }
            element.appendChild(item)
        }
        return element
    }
    function onClick(ev) {
        // prevent submiting form
        ev.preventDefault()
        // validate form data fields before adding
        const formValues = Array.from(formData).map((x) => x.value)
        let [model, year, description, price] = formValues
        if (formValues.every((x) => x != '') &&
            year >= 0 && price >= 0) {
            // create and append table row structure
            addInfoBtn = e('button', { class: 'moreBtn' }, 'More Info')
            buyBtn = e('button', { class: 'buyBtn' }, 'Buy it')
            tableBody.appendChild(
                e('tr', {},
                    e('td', {}, model),
                    e('td', {}, (Number(price)).toFixed(2)),
                    e('td', {},
                        addInfoBtn,
                        buyBtn
                    )
                )
            )
            tableBody.appendChild(
                e('tr', { class: 'hide', style: 'display: none;' },
                    e('td', {}, `Year: ${year}`),
                    e('td', { colspan: "3" }, `Description: ${description}`)
                )
            )
            // add moreInfoBtn functionality
            addInfoBtn.addEventListener('click', show)
            function show(ev) {
                hidden = ev.target.parentElement.parentElement.nextElementSibling
                if (hidden.style.display == 'none' || hidden.style.display == '') {
                    hidden.style.display = 'contents'
                    ev.target.textContent = 'Less Info'
                } else {
                    hidden.style.display = 'none'
                    ev.target.textContent = 'More Info'
                }
            }
            // add buyBtn functionality
            buyBtn.addEventListener('click', buy)
            function buy(ev) {
                // increase total price
                price = ev.target.parentElement.previousElementSibling.textContent
                total = Number(totalPrice.textContent)
                totalPrice.textContent = `${(total + Number(price)).toFixed(2)}`
                // remove element from row
                ev.target.parentElement.parentElement.nextElementSibling.remove()
                ev.target.parentElement.parentElement.remove()
            }
        }


    }
}
