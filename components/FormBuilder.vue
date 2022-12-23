<template>
  <div class="form-builder">
    <div v-for="property in fields" :key="property.name" v-init="formData[property.name] = formData[property.name] ? formData[property.name] : property.defaultValue" class="m-b-10">
      <input
        v-if="property.type === 'STRING'"
        v-model="formData[property.name]"
        class="form-control"
        :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
        :required="!property.isOptional"
        type="text"
        @change="updateStore({ entryId:entry, value:formData })"
      >
      <label v-if="property.type === 'BOOLEAN'" class="form-control">
        <input
          v-model="formData[property.name]"
          :required="!property.isOptional"
          class="ios-toggle"
          type="checkbox"
          @change="updateStore({ entryId:entry, value:formData })"
        >
        <span />
        <span class="m-lr-2">{{ `${property.description}${(!property.isOptional?' *':'')}` }}</span>
      </label>
      <select v-if="property.type === 'ENUM'" v-model="formData[property.name]" class="form-control form-control-native" @change="updateStore({ entryId:entry, value:formData })">
        <option
          v-for="enumValue in property.enums"
          :key="enumValue"
          :value="enumValue"
          :label="enumValue"
          :selected="(formData && formData[property.name] && formData[property.name] === enumValue)"
        >
          {{ enumValue }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Utils } from '@/services/Utils'
export default {
  name: 'FormBuilder',
  props: {
    fields: {
      type: Array,
      default: null
    },
    model: {
      type: Object,
      default: null
    },
    entry: {
      type: String,
      default: null
    }
  },
  data: () => ({
    formData: {}
  }),
  created () {
    this.formData = Utils.getObjectCopy(this.model)
  },
  methods: {
    ...mapActions({
      updateStore: 'updateStore'
    })
  }
}
</script>
