function ticTacToe(moves) {
    board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]]
    turn_player = ['O', 'X']
    for (let move of moves) {
        if ([].concat(...board).every((v) => v != false)) {
            console.log("The game ended! Nobody wins :(")
            for (let row of board) {
                console.log(row.join('\t'))
            }
            return
        }

        [x, y] = move.split(' ')
        x = parseInt(x)
        y = parseInt(y)
        if (board[x][y] != false) {
            console.log("This place is already taken. Please choose another!")
            continue
        } else {
            board[x][y] = turn_player.pop()
            turn_player.unshift(board[x][y])
            for (let row of board) {
                if (row.every((v) => v == board[x][y])) {
                    console.log(`Player ${board[x][y]} wins!`)
                    for (let row of board) {
                        console.log(row.join('\t'))
                    }
                    return
                }
            }
            tposed_board = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
            for (let row of tposed_board) {
                if (row.every((v) => v == board[x][y])) {
                    console.log(`Player ${board[x][y]} wins!`)
                    for (let row of board) {
                        console.log(row.join('\t'))
                    }
                    return
                }
            }
            let isWinner = false
            for (let i = 0; i < board.length; i++){
                if (board[i][i] != board[x][y]) {
                    isWinner = false
                    break
                }
                isWinner = true
            }
            if (isWinner) {
                console.log(`Player ${board[x][y]} wins!`)
                    for (let row of board) {
                        console.log(row.join('\t'))
                    }
                    return
            }
            for (let i = 0; i < board.length; i++){
                if (board[i][board.length-i-1]!=board[x][y]) {
                    isWinner = false
                    break
                }
                isWinner = true
            }
            if (isWinner) {
                console.log(`Player ${board[x][y]} wins!`)
                    for (let row of board) {
                        console.log(row.join('\t'))
                    }
                    return
            }


        }


    }
}












ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]
)
ticTacToe(
    ["0 0",
        "0 0",
        "1 1",
        "0 1",
        "1 2",
        "0 2",
        "2 2",
        "1 2",
        "2 2",
        "2 1"]
)
ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]
)