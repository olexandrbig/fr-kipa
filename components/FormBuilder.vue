<template>
  <div class="form-builder">
    <div v-for="property in fields" :key="property.name" class="m-b-10">
      <input
        v-if="property.type === 'STRING'"
        v-model="formData[property.name]"
        class="form-control"
        :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
        :required="!property.isOptional"
        type="text"
      >
      <label v-if="property.type === 'BOOLEAN'" class="form-control">
        <input v-model="formData[property.name]" :required="!property.isOptional" class="ios-toggle" type="checkbox">
        <span />
        <span class="m-lr-2">{{ `${property.description}${(!property.isOptional?' *':'')}` }}</span>
      </label>
      <select v-if="property.type === 'ENUM'" v-model="formData[property.name]" class="form-control form-control-native">
        <option
          v-for="enumValue in property.enums"
          :key="enumValue"
          :value="enumValue"
          :label="enumValue"
          :selected="(formData && formData[property.name] && formData[property.name] === enumValue) || (!formData[property.name] && property.defaultValue === enumValue)"
        >
          {{ enumValue }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data: () => ({
    formData: {}
  }),
  created () {
    this.formData = Utils.getObjectCopy(this.model)
  }
}
</script>
