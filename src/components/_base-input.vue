<template>
  <input
    :type="type"
    :value="value"
    :class="className"
    v-on="listeners"
  style="background-color: red;">
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
    className: {
      type: [String],
      default: 'base'
    }
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