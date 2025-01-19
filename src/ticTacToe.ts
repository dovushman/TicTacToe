export type Cell = 'X' | 'O' | null;

export class TicTacToe {
    private board: Cell[][];

    constructor(board: Cell[][]){
        this.board = board;
    }

    //Function to go thorugh the different win conditions and check if there is a winner
    public checkWinner(): string[]{

        const winners: string[] = [];

        const checkVertical = () => {
            for (let col = 0; col < 4; col++){
                const compare = this.board[0][col];
                if (compare && compare === this.board[1][col] && 
                    compare === this.board[2][col] && 
                    compare === this.board[3][col]){
                        winners.push(compare);
                }
            }
        }

        const checkHorizontal = () => {
            for (let row = 0; row< 4; row++){
                const compare = this.board[row][0];
                if (compare && compare === this.board[row][1] &&
                    compare === this.board[row][2] &&
                    compare === this.board[row][3]){
                        winners.push(compare);
                    }
            }
        }

        const checkDiagonal = () => {
        }

        const checkCorners = () => {
        }

        const checkBox = () => {
        }

        checkVertical();
        checkHorizontal();

        return winners
    }

    //Function to check if there are any moves left on the board
    public anyMovesLeft(): boolean{
        for (let row = 0; row < 4; row++){
            for (let col = 0; col < 4; col++){
                if (this.board[row][col] === null){
                    return true;
                }
            }
        }
        return false;
    }

    //Function to check if the game is over
    public isGameOver(): boolean{
        if (this.checkWinner().length > 0 || !this.anyMovesLeft()){
            return true;
        }
        return false;
    }

}