export default {
  props: {
    column: {
      type: Object
    },
    columnIndex: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    moveComponent(dataTransfer) {
      if (dataTransfer.type === 'column') {
        this.moveColumn(dataTransfer, this.columnIndex)
      } else if (dataTransfer.type === 'task') {
        this.moveTask(dataTransfer, this.columnIndex, this.taskIndex)
      }
    },
    moveColumn({ fromColumnIndex }, toColumnIndex) {
      this.$store.commit('MOVE_COLUMN', { fromColumnIndex, toColumnIndex })
    },
    moveTask({ fromColumnIndex, fromTaskIndex }, toColumnIndex, toTaskIndex) {
      if (toTaskIndex === undefined)
        toTaskIndex = this.$store.getters.getColumnLength(toColumnIndex)

      this.$store.commit('MOVE_TASK', {
        fromColumnIndex,
        fromTaskIndex,
        toColumnIndex,
        toTaskIndex
      })
    }
  }
}
