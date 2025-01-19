import {TicTacToe, Cell} from '../src/ticTacToe';

test('Vetical Win - X', () => {
    const board1: Cell[][] = [
        ['X', null, null, null],
        ['X', null, null, null],
        ['X', null, null, null],
        ['X', null, null, null]
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
        [null, null, null, 'O']
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
        ['X', null, null, 'X']
    ]
    const game3 = new TicTacToe(board3);
    expect(game3.checkWinner()).toEqual(['X'])
    expect(game3.isGameOver()).toBe(true)
});

test('Vertical Multiple Wins - X and O', () => {
    const board4: Cell[][] = [
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'O']
    ]
    const game4 = new TicTacToe(board4);
    expect(game4.checkWinner()).toEqual(['X', "O"])
    expect(game4.isGameOver()).toBe(true)
});

test('Horizontal Win - X', () => {
    const board5: Cell[][] = [
        ['X', 'X', 'X', 'X'],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ]
    const game5 = new TicTacToe(board5);
    expect(game5.checkWinner()).toEqual(['X'])
    expect(game5.isGameOver()).toBe(true)
});

test('Horizontal Win - O', () => {
    const board6: Cell[][] = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        ['O', 'O', 'O', 'O']
    ]
    const game6 = new TicTacToe(board6);
    expect(game6.checkWinner()).toEqual(['O'])
    expect(game6.isGameOver()).toBe(true)
});

test('X Horizontal Win with incomplete O', () => {
    const board7: Cell[][] = [
        ['O', 'O', 'O', null],
        [null, null, null, null],
        [null, null, null, null],
        ['X', 'X', 'X', 'X']
    ]
    const game7 = new TicTacToe(board7);
    expect(game7.checkWinner()).toEqual(['X'])
    expect(game7.isGameOver()).toBe(true)
});

test('Horizontal Multiple Wins - X and O', () => {
    const board8: Cell[][] = [
        ['X', 'X', 'X', 'X'],
        [null, null, null, null],
        [null, null, null, null],
        ['O', 'O', 'O', 'O']
    ]
    const game8 = new TicTacToe(board8);
    expect(game8.checkWinner()).toEqual(['X', 'O'])
    expect(game8.isGameOver()).toBe(true)
});