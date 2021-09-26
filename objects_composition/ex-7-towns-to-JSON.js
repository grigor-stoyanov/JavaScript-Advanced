function townsToJSON(arr) {
    result = []

    for(i=1;i<arr.length;i++){
        let [currentTown,currentLat,currentLong]= arr[i].substring(2,arr[i].length-1).split(' | ')
        currentLong = Number(currentLong)
        currentLat = Number(currentLat)
        result.push(
            {
                'Town': currentTown,
                'Latitude': Math.round(currentLat*100)/100,
                'Longitude': Math.round(currentLong*100)/100
            }
        )
    }
    console.log(JSON.stringify(result))   
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)