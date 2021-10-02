function lockedProfile() {
    // implement show hide onclick functionality
    document.querySelector('main').addEventListener('click', onClick)
    buttons = document.querySelectorAll('button')
    function onClick(event) {
        if (Array.from(buttons).includes(event.target)) {
            userInfo = event.target.parentElement.children[9]
            lockedState = userInfo.parentElement.children[2]
            if (!lockedState.checked) {
                if (userInfo.style.display == 'none' || userInfo.style.display == '') {
                    userInfo.style.display = 'block'
                    event.target.textContent = 'Hide it'
                }
                else {
                    if (userInfo.style.display == 'block') {
                        userInfo.style.display = 'none'
                        event.target.textContent = 'Show more'
                    }
                }
            }
        }
    }
    // allow trigger event only to work on unlock conditional
}