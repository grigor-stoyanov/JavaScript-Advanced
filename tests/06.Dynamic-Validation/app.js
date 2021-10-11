function validate() {
    pattern = /^[a-z]+@[a-z]+\.[a-z]+$/
    const email = document.getElementById('email')
    email.addEventListener('change',validateEmail)
    function validateEmail(){
        if (!pattern.test(email.value)){
            email.className = 'error'
        }else{
            email.className = ''
        }
    }
}