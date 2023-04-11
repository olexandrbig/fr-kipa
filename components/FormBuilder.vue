<template>
  <div v-if="fields && fields.length" class="form-builder">
    <div v-if="Object.keys(fieldsMapped()).length > 1" class="m-b-10">
      <button
        v-for="(item, key) in fieldsMapped()"
        :key="key"
        class="btn m-r-3"
        type="button"
        :class="getTabClasses(key)"
        @click="currentTab = key"
      >
        {{ key }}
      </button>
    </div>
    <div v-for="property in fieldsByGroup(currentTab)" :key="property.name" class="m-b-10">
      <input
        v-if="property.type === 'STRING'"
        v-model="formData[property.name]"
        class="form-control"
        :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
        :required="!property.isOptional"
        type="text"
        @change="updateStore({ entryId:entry, value:formData })"
      >
      <input
        v-if="property.type === 'NUMBER'"
        v-model="formData[property.name]"
        class="form-control"
        :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
        :required="!property.isOptional"
        type="number"
        @change="updateStore({ entryId:entry, value:formData })"
      >
      <client-only v-if="property.type === 'SCRIPT'">
        <codemirror
          v-model="formData[property.name]"
          :options="cmOptions"
          :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
          :required="!property.isOptional"
          @input="updateStore({ entryId:entry, value:formData })"
        />
      </client-only>
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
      <div v-if="property.type === 'LIST_STRING'">
        <div v-if="tags && tags.length">
          <div v-for="(item, index) in tags" :key="item" class="input-group m-b-10">
            <input
              v-model="tags[index]"
              class="form-control"
              :placeholder="`${property.description}${(!property.isOptional?' *':'')}`"
              :required="!property.isOptional"
              type="text"
              @change="updateTags(property.name)"
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
      <client-only v-if="property.type === 'PIPELINE_PATH_STRING'">
        <PipelineSelector
          :value.sync="formData[property.name]"
          :form-data="formData"
          :entry-id="entry"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Utils } from '@/services/Utils'
import PipelineSelector from '~/components/PipelineSelector.vue'

export default {
  name: 'FormBuilder',
  components: {
    PipelineSelector
  },
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
    currentTab: '',
    formData: {},
    tag: '',
    tags: [],
    cmOptions: {
      mode: 'text/x-groovy',
      tabSize: 4,
      styleActiveLine: true,
      autofocus: true,
      lineNumbers: true,
      line: true,
      matchBrackets: true
    }
  }),
  async fetch () {
    this.formData = {}
    this.formData = await Utils.getObjectCopy(this.model)
    this.fields.forEach((item) => {
      this.initDefault(item)
    })
    this.currentTab = ''
  },
  watch: {
    model: '$fetch'
  },
  methods: {
    ...mapActions({
      updateStore: 'updateStore'
    }),
    addItem () {
      this.tags.push('')
    },
    removeItem (index) {
      this.tags.splice(index, 1)
    },
    updateTags (name) {
      this.formData[name] = this.tags
      this.updateStore({ entryId: this.entry, value: this.formData })
    },
    initDefault (property) {
      if (property && this.formData && !this.formData[property.name]) {
        this.formData[property.name] = this.formData && this.formData[property.name] ? this.formData[property.name] : property.defaultValue
        if (property.type === 'LIST_STRING') {
          this.tags = Utils.getObjectCopy(this.formData[property.name])
        }
      }
    },
    fieldsMapped () {
      return Utils.groupBy(this.fields, 'group')
    },
    fieldsByGroup (currentTab) {
      const mapped = this.fieldsMapped()
      return currentTab ? mapped[currentTab] : mapped[Object.keys(mapped)[0]]
    },
    getTabClasses (key) {
      if (!this.currentTab) {
        const mapped = this.fieldsMapped()
        this.currentTab = Object.keys(mapped)[0]
      }
      return this.currentTab === key ? 'btn-default' : 'btn-primary'
    }
  }
}
</script>
<style>
.input-group {
  display: flex;
  align-content: stretch;
}

.input-group > input {
  flex: 1 0;
}
</style>
