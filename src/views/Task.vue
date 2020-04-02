<template>
  <v-card width="700px" :class="!isDarkTheme ? 'task-bg' : 'task-bg--dark'">
    <v-card-title primary-title class="pb-0">
      <v-container pa-0>
        <v-row align="center">
          <v-col cols="10">
            <v-text-field
              :value="task.name"
              hide-details
              class="vuello-task-name"
              solo
              flat
              single-line
              background-color="transparent"
              @input="updateTaskName"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="text-right">
            <v-btn text small class="sq-btn" @click="closeTask"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="px-4 pt-4 pb-2">
      <v-textarea
        :value="task.description"
        min-height="20rem"
        hide-details
        solo
        background-color="secondary"
        @input="updateTaskDescription"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-spacer></v-spacer>
      <v-btn text color="red darken-2" small @click="deleteTask">Delete</v-btn>
      <v-btn
        :disabled="!taskEdited"
        color="green accent-3"
        small
        class="px-4"
        @click="updateTask"
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    taskInfo: {
      name: null,
      description: null
    }
  }),
  props: {
    id: {
      type: String,
      required: true
    },
    columnIndex: {
      type: [Number, String],
      required: true
    },
    taskIndex: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.id)
    },
    taskEdited() {
      return this.taskInfo.name || this.taskInfo.description !== null
    }
  },
  methods: {
    closeTask() {
      this.$router.push({ name: 'home' })
    },
    updateTaskName(newName) {
      this.taskInfo.name = newName
    },
    updateTaskDescription(newDesc) {
      this.taskInfo.description = newDesc
    },
    updateTask() {
      if (this.taskInfo.name || this.taskInfo.description !== null) {
        this.$store.commit('UPDATE_TASK', {
          columnIndex: this.columnIndex,
          taskIndex: this.taskIndex,
          task: this.taskInfo
        })
      }
      this.closeTask()
    },
    deleteTask() {
      this.$store.commit('DELETE_TASK', {
        columnIndex: this.columnIndex,
        taskIndex: this.taskIndex
      })
      this.closeTask()
    }
  }
}
</script>

<style lang="scss" scoped>
.sq-btn {
  min-width: 0 !important;
  padding: 0.5rem !important;
}
.vuello-task-name.v-input {
  line-height: 1.7;
  font-size: 1.75rem;
  font-weight: 600;
}
.task-bg {
  background: rgba(255, 255, 255, 0.92);
}
.task-bg--dark {
  background: rgba(36, 36, 36, 0.92);
}
</style>
