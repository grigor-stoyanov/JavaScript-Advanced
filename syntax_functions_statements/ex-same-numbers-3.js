function theSame(num) {
    strNum = String(num)
    let isEqual = true
    let totalSum = Number(strNum[0])
    for (let i = 1; i < strNum.length; i++){
        if (strNum[0] != strNum[i]) {
            isEqual = false
        }
        totalSum += Number(strNum[i])
    }
    console.log(isEqual)
    console.log(totalSum)
}

theSame(2222222)
theSame(1234)