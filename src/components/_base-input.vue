<template>
  <input
    :type="type"
    :value="value"
    :class="$style.input"
    v-on="listeners"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      }
    },
  },
}
</script>