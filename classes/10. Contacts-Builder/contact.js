class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this.online = false
    }
    render(id) {
        let article = document.createElement('article')
        article.innerHTML = `
        <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
            <div class="info">
                <span>&phone; ${this.phone}</span>
                <span>&#9993; ${this.email}</span>
            </div>`
        document.getElementById(id).appendChild(article)
        article.querySelector(".info").style.display = 'none'
        if (this.online) {
            article.querySelector(".title").className = "title online"
        } else {
            article.querySelector(".title").className = "title"
        }
        
        
        
        
        
        
        
        article.querySelector('.title').lastChild.addEventListener('click', onClick)
        function onClick(ev) {
            let info = article.querySelector(".info")
            if (info.style.display == 'none' || info.style.display == '') {
                info.style.display = 'block'
            } else {
                if (info.style.display == 'block') {
                    info.style.display = 'none'
                }
            }
        }
    }
    
}





let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));