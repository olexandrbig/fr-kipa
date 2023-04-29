<template>
  <div ref="container" class="form-group">
    <div v-if="internalValue && internalValue.length">
      <div v-for="(item, index) in internalValue" :key="item" class="input-group m-b-10">
        <input
          v-model="internalValue[index]"
          class="form-control"
          :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
          :required="!property.isOptional"
          type="text"
        >
        <button class="btn btn-primary" type="button" @click="removeItem(index)">
          <fa :icon="['fas', 'xmark']" />
        </button>
      </div>
    </div>
    <div>
      <button class="btn btn-block btn-primary" type="button" @click="addItem()">
        <fa :icon="['fas', 'plus']" /> Add
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StringListSelector',
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
      required: false,
      default: () => {
        return {}
      }
    },
    property: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      internalValue: this.value
    }
  },
  watch: {
    value (newValue) {
      this.internalValue = newValue
    },
    internalValue (newInternalValue) {
      this.$emit('update:value', newInternalValue)
      this.updateStore({ entryId: this.entryId, value: this.formData })
    }
  },
  methods: {
    ...mapActions({
      showNav: 'showNav',
      updateStore: 'updateStore'
    }),
    addItem () {
      this.internalValue.push('')
    },
    removeItem (index) {
      this.internalValue.splice(index, 1)
    }
  }
}
</script>
