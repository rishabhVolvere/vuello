<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDrop',
  methods: {
    onDrop(event) {
      const dataTransfer = JSON.parse(event.dataTransfer.getData('payload'))
      this.$emit('drop', dataTransfer)
    }
  }
}
</script>
