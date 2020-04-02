export const uuid = () =>
  Math.random()
    .toString(16)
    .slice(10)

export const saveStatePlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('vuello-board', JSON.stringify(state.board))
  })
}
