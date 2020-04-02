<template>
  <AppDrop @drop="moveComponent">
    <AppDrag
      :dataTransfer="{
        type: 'task',
        fromTaskIndex: taskIndex,
        fromColumnIndex: columnIndex
      }"
    >
      <div
        class="task accent elevation-1"
        @click="showTask(task.id, columnIndex, taskIndex)"
      >
        <p class="font-weight-bold title">{{ task.name }}</p>
        <p v-if="task.description" class="pt-1 body-2 text-truncate">
          {{ task.description }}
        </p>
      </div>
    </AppDrag>
  </AppDrop>
</template>

<script>
import columnAndTaskMixin from '@/mixins/columnAndTask'

export default {
  name: 'ColumnTask',
  mixins: [columnAndTaskMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    showTask(id, columnIndex, taskIndex) {
      this.$router.push({
        name: 'task',
        params: { id, columnIndex, taskIndex }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }
}
</style>
