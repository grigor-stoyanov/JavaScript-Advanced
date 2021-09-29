function colorize(){
    // const rows = document.querySelectorAll('table tr')
    // for(let i = 1;i < rows.length;i+=2){
    //     rows[i].style.backgroundColor = 'teal'
    // }
    const rows = document.querySelectorAll('table tr:nth-child(2n-1)')
    for (let i = 0;i<rows.length; i++){
        rows[i].style.backgroundCOlor = 'teal'
    }
}