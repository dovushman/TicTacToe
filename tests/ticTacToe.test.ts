import {TicTacToe, Cell} from '../src/ticTacToe';

test('Vetical Win - X', () => {
    const board1: Cell[][] = [
        ['X', null, null, null],
        ['X', null, null, null],
        ['X', null, null, null],
        ['X', null, null, null]
    ]
    const game1 = new TicTacToe(board1);
    expect(game1.checkWinner()).toEqual(['X']);
    expect(game1.isGameOver()).toBe(true);
    expect(game1.anyMovesLeft()).toBe(true);
});

test('Vetical Win - O', () => {
    const board2: Cell[][] = [
        [null, null, null, 'O'],
        [null, null, null, 'O'],
        [null, null, null, 'O'],
        [null, null, null, 'O']
    ]
    const game2 = new TicTacToe(board2);
    expect(game2.checkWinner()).toEqual(['O']);
    expect(game2.isGameOver()).toBe(true);
    expect(game2.anyMovesLeft()).toBe(true);
});

test('X Vetical Win with incomplete O', () => {
    const board3: Cell[][] = [
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'X']
    ]
    const game3 = new TicTacToe(board3);
    expect(game3.checkWinner()).toEqual(['X']);
    expect(game3.isGameOver()).toBe(true);
    expect(game3.anyMovesLeft()).toBe(true);
});

test('Vertical Multiple Wins - X and O', () => {
    const board4: Cell[][] = [
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'O'],
        ['X', null, null, 'O']
    ]
    const game4 = new TicTacToe(board4);
    expect(game4.checkWinner()).toEqual(['X', "O"]);
    expect(game4.isGameOver()).toBe(true);
    expect(game4.anyMovesLeft()).toBe(true);
});

test('Horizontal Win - X', () => {
    const board5: Cell[][] = [
        ['X', 'X', 'X', 'X'],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ]
    const game5 = new TicTacToe(board5);
    expect(game5.checkWinner()).toEqual(['X']);
    expect(game5.isGameOver()).toBe(true);
    expect(game5.anyMovesLeft()).toBe(true);
});

test('Horizontal Win - O', () => {
    const board6: Cell[][] = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        ['O', 'O', 'O', 'O']
    ]
    const game6 = new TicTacToe(board6);
    expect(game6.checkWinner()).toEqual(['O']);
    expect(game6.isGameOver()).toBe(true);
    expect(game6.anyMovesLeft()).toBe(true);
});

test('X Horizontal Win with incomplete O', () => {
    const board7: Cell[][] = [
        ['O', 'O', 'O', null],
        [null, null, null, null],
        [null, null, null, null],
        ['X', 'X', 'X', 'X']
    ]
    const game7 = new TicTacToe(board7);
    expect(game7.checkWinner()).toEqual(['X']);
    expect(game7.isGameOver()).toBe(true);
    expect(game7.anyMovesLeft()).toBe(true);
});

test('Horizontal Multiple Wins - X and O', () => {
    const board8: Cell[][] = [
        ['X', 'X', 'X', 'X'],
        [null, null, null, null],
        [null, null, null, null],
        ['O', 'O', 'O', 'O']
    ]
    const game8 = new TicTacToe(board8);
    expect(game8.checkWinner()).toEqual(['X', 'O']);
    expect(game8.isGameOver()).toBe(true);
    expect(game8.anyMovesLeft()).toBe(true);
});

test('Top Left to Bottom Right Diagonal - X', () => {
    const board9: Cell[][] = [
        ['X', null, null, null],
        [null, 'X', null, null],
        [null, null, 'X', null],
        [null, null, null, 'X']
    ]
    const game9 = new TicTacToe(board9);
    expect(game9.checkWinner()).toEqual(['X']);
    expect(game9.isGameOver()).toBe(true);
    expect(game9.anyMovesLeft()).toBe(true);
});

test('Top Right to Bottom Left Diagonal - O', () => {
    const board10: Cell[][] = [
        [null, null, null, 'O'],
        [null, null, 'O', null],
        [null, 'O', null, null],
        ['O', null, null, null]
    ]
    const game10 = new TicTacToe(board10);
    expect(game10.checkWinner()).toEqual(['O']);
    expect(game10.isGameOver()).toBe(true);
    expect(game10.anyMovesLeft()).toBe(true);
});

test('Diagonal Multiple Wins - X and O', () => {
    const board11: Cell[][] = [
        ['X', null, null, 'O'],
        [null, 'X', 'O', null],
        [null, 'O', 'X', null],
        ['O', null, null, 'X']
    ]
    const game11 = new TicTacToe(board11);
    expect(game11.checkWinner()).toEqual(['X', 'O']);
    expect(game11.isGameOver()).toBe(true);
    expect(game11.anyMovesLeft()).toBe(true);
});

test('4 Corners - X', () => {
    const board12: Cell[][] = [
        ['X', null, null, 'X'],
        [null, null, null, null],
        [null, null, null, null],
        ['X', null, null, 'X']
    ]
    const game12 = new TicTacToe(board12);
    expect(game12.checkWinner()).toEqual(['X']);
    expect(game12.isGameOver()).toBe(true);
    expect(game12.anyMovesLeft()).toBe(true);
});

test('4 Corners - O', () => {
    const board13: Cell[][] = [
        ['O', null, null, 'O'],
        [null, null, null, null],
        [null, null, null, null],
        ['O', null, null, 'O']
    ]
    const game13 = new TicTacToe(board13);
    expect(game13.checkWinner()).toEqual(['O']);
    expect(game13.isGameOver()).toBe(true);
    expect(game13.anyMovesLeft()).toBe(true);
});

test('Multiple Winners - X Corners & O Horizontal', () => {
    const board14: Cell[][] = [
        ['X', null, null, 'X'],
        ['O', 'O', 'O', 'O'],
        [null, null, null, null],
        ['X', null, null, 'X']
    ]
    const game14 = new TicTacToe(board14);
    expect(game14.checkWinner()).toEqual(['O', 'X']);
    expect(game14.isGameOver()).toBe(true);
    expect(game14.anyMovesLeft()).toBe(true);
});

test('2x2 Box - X', () => {
    const board15: Cell[][] = [
        ['X', 'X', null, null],
        ['X', 'X', null, null],
        [null, null, null, null],
        [null, null, null, null]
    ]
    const game15 = new TicTacToe(board15);
    expect(game15.checkWinner()).toEqual(['X']);
    expect(game15.isGameOver()).toBe(true);
    expect(game15.anyMovesLeft()).toBe(true);
});

test('2x2 Box - O', () => {
    const board16: Cell[][] = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, 'O', 'O'],
        [null, null, 'O', 'O']
    ]
    const game16 = new TicTacToe(board16);
    expect(game16.checkWinner()).toEqual(['O']);
    expect(game16.isGameOver()).toBe(true);
    expect(game16.anyMovesLeft()).toBe(true);
});

test('2x2 Box Multiple Wins - X and O', () => {
    const board17: Cell[][] = [
        ['X', 'X', null, null],
        ['X', 'X', null, null],
        [null, null, 'O', 'O'],
        [null, null, 'O', 'O']
    ]
    const game17 = new TicTacToe(board17);
    expect(game17.checkWinner()).toEqual(['X', 'O']);
    expect(game17.isGameOver()).toBe(true);
    expect(game17.anyMovesLeft()).toBe(true);
});

test('No Winners & No Moves Left', () => {
    const board18: Cell[][] = [
        ['X', 'O', 'X', 'X'],
        ['X', 'X', 'O', 'O'],
        ['O', 'X', 'X', 'O'],
        ['X', 'X', 'O', 'O']
    ]
    const game18 = new TicTacToe(board18);
    expect(game18.checkWinner()).toEqual([]);
    expect(game18.isGameOver()).toBe(true);
    expect(game18.anyMovesLeft()).toBe(false);
});

test('Empty', () => {
    const board19: Cell[][] = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ]
    const game19 = new TicTacToe(board19);
    expect(game19.checkWinner()).toEqual([]);
    expect(game19.isGameOver()).toBe(false);
    expect(game19.anyMovesLeft()).toBe(true);
});



