<template>
  <AppDrop @drop="moveComponent">
    <AppDrag
      :dataTransfer="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <v-card color="secondary" width="352px" elevation-2 class="mr-4">
        <v-card-title class="pl-5">
          <input
            type="text"
            :value="column.title"
            class="vuello-column-title-input"
            @blur="updateColumn($event, columnIndex)"
            @keydown.enter="updateColumn($event, columnIndex)"
            :class="!isDarkTheme ? 'font-secondary' : 'font-secondary--dark'"
          />

          <div class="vuello-column-actions">
            <v-btn
              fab
              x-small
              elevation="3"
              color="accent"
              @click="deleteColumn(columnIndex)"
              ><v-icon :color="!isDarkTheme ? 'grey darken-1' : ''"
                >mdi-delete</v-icon
              ></v-btn
            >
          </div>
        </v-card-title>
        <v-card-text>
          <v-container pa-0>
            <!-- Tasks List -->
            <v-row class="flex-column" no-gutters>
              <v-col v-for="(task, taskIndex) of column.tasks" :key="taskIndex">
                <ColumnTask
                  :column="column"
                  :columnIndex="columnIndex"
                  :task="task"
                  :taskIndex="taskIndex"
                />
              </v-col>

              <!-- Add New Task -->
              <div class="pr-4">
                <v-text-field
                  label="Add new task."
                  clearable
                  :color="!isDarkTheme ? 'indigo darken-4' : 'blue lighten-5'"
                  @keydown.enter="addTask($event, columnIndex)"
                >
                  <template v-slot:prepend>
                    <v-icon
                      :color="
                        !isDarkTheme ? 'indigo darken-4' : 'blue lighten-5'
                      "
                      >mdi-shape-square-plus</v-icon
                    >
                  </template>
                </v-text-field>
              </div>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </AppDrag>
  </AppDrop>
</template>

<script>
import columnAndTaskMixin from '@/mixins/columnAndTask'
import ColumnTask from '@/components/ColumnTask.vue'
export default {
  name: 'BoardColumn',
  mixins: [columnAndTaskMixin],
  components: {
    ColumnTask
  },
  methods: {
    showTask(id, columnIndex, taskIndex) {
      this.$router.push({
        name: 'task',
        params: { id, columnIndex, taskIndex }
      })
    },
    addTask(event, columnIndex) {
      this.$store.commit('ADD_TASK', {
        taskName: event.target.value,
        columnIndex
      })
    },
    updateColumn(event, columnIndex) {
      this.$store.commit('UPDATE_COLUMN', {
        columnIndex,
        newTitle: event.target.value
      })
    },
    deleteColumn(columnIndex) {
      this.$store.commit('DELETE_COLUMN', { columnIndex })
    }
  }
}
</script>

<style lang="scss" scoped>
.vuello-column-title-input {
  font-weight: 700;
  font-size: 1.5rem;
  min-width: 0;
}
.vuello-column-actions {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
</style>
