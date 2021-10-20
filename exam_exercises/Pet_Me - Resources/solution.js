function solve() {
    const addbtn = document.querySelector('button')
    addbtn.type = 'button'
    const adption = document.querySelector('#adoption ul')
    const adpted = document.querySelector('#adopted ul')
    addbtn.addEventListener('click', add)
    function add(ev) {
        inputs = document.querySelectorAll('input[type=text]')
        for (const ele of Array.from(inputs)) {
            if (!ele.value || isNaN(inputs[1].value)) {
                return
            }
        } fields = [
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].value
        ]

        let [name, age, kind, owner] = fields
        const li = document.createElement('li')
        li.innerHTML = `<p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p><span>Owner: ${owner}</span><button>Contact with owner</button>`
        adption.appendChild(li)
        for (let ele of inputs) {
            ele.value = ''
        }
        adoptBtn = li.querySelector('button')

        adoptBtn.addEventListener('click', adopt)
        function adopt(ev) {
            if (ev.target.innerText == 'Contact with owner') {
                const newDiv = document.createElement('div')
                const newInput = document.createElement('input')
                const currentLi = ev.target.parentElement
                newInput.type = 'text'
                newInput.placeholder = 'Enter your names'
                newDiv.appendChild(newInput)
                newDiv.appendChild(ev.target)
                currentLi.appendChild(newDiv)
                ev.target.innerText = 'Yes! I take it!'
            } else {
                if (ev.target.innerText == 'Yes! I take it!') {
                    newOwner = ev.target.parentElement.firstChild.value
                    if (newOwner) {
                        targetLi = ev.target.parentElement.parentElement
                        adpted.appendChild(targetLi)
                        ev.target.parentElement.firstChild.remove()
                        targetLi.appendChild(ev.target)
                        ev.target.innerText = 'Checked'
                        targetLi.querySelector('div').remove()
                        targetLi.querySelector('span').innerText = `New Owner: ${newOwner}`

                    }
                } else {
                    ev.target.parentElement.parentElement.remove()
                }
            }
        }
    }

}

