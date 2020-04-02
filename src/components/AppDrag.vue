<template>
  <div draggable @dragstart.self="onDrag" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDrag',
  props: {
    dataTransfer: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDrag(event) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.setData('payload', JSON.stringify(this.dataTransfer))
    }
  }
}
</script>
