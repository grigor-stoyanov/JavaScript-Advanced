function gcd(int1, int2) {
    while (int1 != int2){
        if (int1 > int2){
                int1 = int1 - int2
        } else {
            int2 = int2 - int1
            }
    }
    console.log(int1)
}
gcd(15,5)
gcd(2154, 458)