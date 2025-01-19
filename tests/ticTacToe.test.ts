import {TicTacToe, Cell} from '../src/ticTacToe';

test('Vetical Win - X', () => {
    const board1: Cell[][] = [
        ['X', null, null, null],
        ['X', null, null, null],
        ['X', null, null, null],
        ['X', null, null, null],
    ]
    const game1 = new TicTacToe(board1);
    expect(game1.checkWinner()).toEqual(['X'])
    expect(game1.isGameOver()).toBe(true)
});

test('Vetical Win - O', () => {
    const board2: Cell[][] = [
        [null, null, null, 'O'],
        [null, null, null, 'O'],
        [null, null, null, 'O'],
        [null, null, null, 'O'],
    ]
    const game2 = new TicTacToe(board2);
    expect(game2.checkWinner()).toEqual(['O'])
    expect(game2.isGameOver()).toBe(true)
});

test('X Vetical Win with incomplete O', () => {
    const board3: Cell[][] = [
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'X'],
    ]
    const game3 = new TicTacToe(board3);
    expect(game3.checkWinner()).toEqual(['X'])
    expect(game3.isGameOver()).toBe(true)
});
