<template>
  <div ref="container" class="form-group" @click.prevent="showNav({type:'VIEW_DATA'})">
    <input :value="selectedPipelineData || internalValue" disabled placeholder="Select variable" class="form-control disabled">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PipelineSelector',
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    entryId: {
      type: String,
      required: true,
      default: ''
    },
    formData: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      internalValue: this.value
    }
  },
  computed: {
    ...mapGetters({
      selectedPipelineData: 'selectedPipelineData'
    })
  },
  watch: {
    value (newValue) {
      this.internalValue = newValue
    },
    selectedPipelineData (newInternalValue) {
      this.$emit('update:value', newInternalValue)
      this.updateStore({ entryId: this.entryId, value: this.formData })
    }
  },
  methods: {
    ...mapActions({
      showNav: 'showNav',
      updateStore: 'updateStore'
    })
  }
}
</script>
