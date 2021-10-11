function notify(message) {
  const notif = document.getElementById('notification')
  notif.addEventListener('click', hide)
  notif.style.display = 'block'
  notif.textContent = message
  function hide() {
    notif.style.display = 'none'
  }
}