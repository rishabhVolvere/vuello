import Vue from 'vue'
import Vuex from 'vuex'

import { defaultBoard } from '@/config/board'
import { uuid, saveStatePlugin } from '@/utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('vuello-board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board,
    darkTheme: false
  },
  getters: {
    getTask: state => id => {
      for (let column of state.board.columns) {
        for (let task of column.tasks) {
          if (task.id == id) return task
        }
      }
    },
    getColumnLength: state => columnIndex => {
      return state.board.columns[columnIndex].tasks.length
    }
  },
  mutations: {
    TOGGLE_THEME(state) {
      state.darkTheme = !state.darkTheme
    },
    ADD_TASK(state, { columnIndex, taskName }) {
      state.board.columns[columnIndex].tasks.push({
        id: uuid(),
        name: taskName
      })
    },

    ADD_COLUMN(state, { columnTitle }) {
      state.board.columns.push({
        title: columnTitle,
        tasks: []
      })
    },

    UPDATE_TASK(state, { columnIndex, taskIndex, task }) {
      const tasks = state.board.columns[columnIndex].tasks
      if (task.name) tasks[taskIndex].name = task.name
      if (task.description !== null)
        tasks[taskIndex].description = task.description
    },

    UPDATE_COLUMN(state, { columnIndex, newTitle }) {
      state.board.columns[columnIndex].title = newTitle
    },

    DELETE_TASK(state, { columnIndex, taskIndex }) {
      state.board.columns[columnIndex].tasks.splice(taskIndex, 1)
    },

    DELETE_COLUMN(state, { columnIndex }) {
      state.board.columns.splice(columnIndex, 1)
    },

    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnToMove = state.board.columns.splice(fromColumnIndex, 1)[0]
      state.board.columns.splice(toColumnIndex, 0, columnToMove)
    },

    MOVE_TASK(
      state,
      { fromColumnIndex, fromTaskIndex, toColumnIndex, toTaskIndex }
    ) {
      const columns = state.board.columns
      const taskToMove = columns[fromColumnIndex].tasks.splice(
        fromTaskIndex,
        1
      )[0]
      columns[toColumnIndex].tasks.splice(toTaskIndex, 0, taskToMove)
    }
  }
})
