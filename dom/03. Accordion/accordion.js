function toggle() {
    // get button element and text
    // change button text to Less or more
    // change display property of div with id extra to block or none
    button = document.getElementsByClassName("button")[0]
    text = document.getElementById("extra")
    button.textContent = button.textContent == 'More' ? "Less": "More"
    text.style.display = text.style.display == 'none' ? 'block': 'none'
}