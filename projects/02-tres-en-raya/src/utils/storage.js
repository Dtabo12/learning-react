export function SaveGame({ board, turn }) {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
}

export function ResetGame() {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}