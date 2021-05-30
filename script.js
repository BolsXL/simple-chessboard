// RUNNING CODE
chessboard(25);

// FUNCTIONS
function chessboard(n) {
    let text = ``;

    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            text += 'X';
        }
        else if (!i % 2 == 0) {
            text += 'O';
        }
    }

    let regText = text;
    let oppText = text.replaceAll("O", "M");
    oppText = oppText.replaceAll("X", "O");
    oppText = oppText.replaceAll("M", "X");

    let board = '';
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            board += text;
            continue;
        }
        if (i % 2 == 0) {
            board += '\n' + text;
        }
        else if (!i % 2 == 0) {
            board += '\n' + oppText;
        }
    }

    console.log(board);
}