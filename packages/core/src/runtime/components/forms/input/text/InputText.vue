<template>
  <InputGroup :required="required" :description="description" :label="label" :optional-label="optionalLabel">
    <InputBase v-bind="boundProps" @trailing-click="$emit('trailingClick')" @leading-click="$emit('leadingClick')">
      <template v-slot:leading>
        <slot name="leading" />
      </template>
      <template v-slot:heading>
        <slot name="heading" />
      </template>
    </InputBase>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject, useAttrs } from 'vue';

import InputBase from '../base/InputBase.vue'
import InputGroup from '../group/InputGroup.vue'
import { injectDefaultValues } from '@core/runtime/components/commons/props';
import { props as inputProps } from './InputText.props'
import { VunixConfigSymbol } from '@core/runtime/symbols';
import { useBindField, useField } from '@core/runtime/composables/forms/field';

export default defineComponent({
  components: {
    InputBase,
    InputGroup,
  },
  inheritAttrs: false,
  props: inputProps,
  emits: ['update:modelValue', 'focus', 'blur', 'trailingClick', 'leadingClick'],
  setup(props) {
    // Inject default values
    injectDefaultValues(getCurrentInstance()?.props, inputProps, inject(VunixConfigSymbol)?.InputText.defaults)

    const { field } = useField<string>(props.name as string, props.rules, {
      required: props.required
    })
    const boundProps = useBindField(field, props, useAttrs())

    return { boundProps }
  }
})
</script>
