function attachGradientEvents() {
    // get element
    // attach event listener and get coordinates of mouse
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onMove);
    function onMove(ev) {
        const box = ev.target
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100)
        result = document.getElementById('result')
        result.textContent = `${offset}%` 
    }
}