export type Cell = 'X' | 'O' | null;

export class TicTacToe {
    private board: Cell[][];

    constructor(board: Cell[][]){
        this.board = board;
    }

    //Function to go thorugh the different win conditions and check if there is a winner
    public checkWinner(): string[]{
    }

    //Function to check if there are any moves left on the board
    public anyMovesLeft(): boolean{
    }

    //Function to check if the game is over
    public isGameOver(): boolean{
    }

}