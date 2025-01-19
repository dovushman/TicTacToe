"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
class TicTacToe {
    constructor(board) {
        this.board = board;
    }
    //Function to go thorugh the different win conditions and check if there is a winner for the different win conditions
    checkWinner() {
        //Array to keep track of the symbol returned by each check if it meets the win condition
        const winners = [];
        //Check to see if the vertical win condition is met
        const checkVertical = () => {
            for (let col = 0; col < 4; col++) {
                //Compare is used as the first entry of a column that the other entries in the column will be compared with to see if the column contains all Xs or Os
                const compare = this.board[0][col];
                if (compare && compare === this.board[1][col] &&
                    compare === this.board[2][col] &&
                    compare === this.board[3][col]) {
                    winners.push(compare);
                }
            }
        };
        //Check to see if the horizontal win condition is met
        const checkHorizontal = () => {
            for (let row = 0; row < 4; row++) {
                //Compare is used as the first entry of a row that the other entries in the row will be compared with to see if the row contains all Xs or Os
                const compare = this.board[row][0];
                if (compare && compare === this.board[row][1] &&
                    compare === this.board[row][2] &&
                    compare === this.board[row][3]) {
                    winners.push(compare);
                }
            }
        };
        //Check to see if the Diagonal win condition is met
        const checkDiagonal = () => {
            //Checks the top left to bottom right diagnal
            //Compare is the top left spot that the other entries in the diagonal will be compared with to see if the diagonal contains all Xs or Os
            let compare = this.board[0][0];
            if (compare && compare === this.board[1][1] &&
                compare === this.board[2][2] &&
                compare === this.board[3][3]) {
                winners.push(compare);
            }
            //Checks the top right to bottom left diagnal
            //Compare is the top right spot that the other entries in the diagonal will be compared with to see if the diagonal contains all Xs or Os
            compare = this.board[0][3];
            if (compare && compare === this.board[1][2] &&
                compare === this.board[2][1] &&
                compare === this.board[3][0]) {
                winners.push(compare);
            }
        };
        //Check to see if the 4 corners win condition is met
        const checkCorners = () => {
            //Compare is the top left spot that the other corners of the board will be comapred withto see if the corners contains all Xs or Os
            const compare = this.board[0][0];
            if (compare && compare === this.board[0][3] &&
                compare === this.board[3][0] &&
                compare === this.board[3][3]) {
                winners.push(compare);
            }
        };
        //Check to see if the 2x2 box win condition is met
        const checkBox = () => {
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    //Compare is once again used to compare the different spots in the 2x2 box, since this box can be anywhere on the board, compare is set to the top left of the 2x2 box and the other sections of the 2x2 box are compared with it 
                    let compare = this.board[row][col];
                    if (compare && compare === this.board[row + 1][col] &&
                        compare === this.board[row][col + 1] &&
                        compare === this.board[row + 1][col + 1]) {
                        winners.push(compare);
                    }
                }
            }
        };
        //Runs through the different checks
        checkVertical();
        checkHorizontal();
        checkDiagonal();
        checkCorners();
        checkBox();
        //Returns the array of winners
        return winners;
    }
    //Function to check if there are any moves left on the board, if a spot is null then there is still a move
    anyMovesLeft() {
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (this.board[row][col] === null) {
                    return true;
                }
            }
        }
        return false;
    }
    //Function to check if the game is over, if the winner array contains anything or if there are not any moves left then the game is over
    isGameOver() {
        if (this.checkWinner().length > 0 || !this.anyMovesLeft()) {
            return true;
        }
        return false;
    }
}
exports.TicTacToe = TicTacToe;
