export default function CheckEndGame(board) {
    return board.every((square) => square !== null);
}