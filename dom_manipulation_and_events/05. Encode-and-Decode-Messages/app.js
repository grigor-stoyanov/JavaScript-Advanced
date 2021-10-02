function encodeAndDecodeMessages() {
    const [encoded,decoded] = document.querySelectorAll('textarea')
    const [encodeBtn,decodeBtn] = document.querySelectorAll('button')
    encodeBtn.addEventListener('click',onClickEncode)
    decodeBtn.addEventListener('click',onClickDecode)
    let result = ''
    function onClickEncode(){
        for (let i=0;i<encoded.value.length;i++){
            ch = encoded.value.charCodeAt(i)
            result += String.fromCharCode(ch+1)
        }
        decoded.value = result
        encoded.value = ''
        result = ''
    }
    function onClickDecode(){
        for (let i=0;i<decoded.value.length;i++){
            ch = decoded.value.charCodeAt(i)
            result += String.fromCharCode(ch-1)
        }
        decoded.value = result
    }
}