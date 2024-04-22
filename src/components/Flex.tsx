// @prefix tst
// @description tsx template

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Flex',
  props: { id: { type: String } },
  emits: [],
  setup(props, { slots }) {
    return () => (
      <div style="display: flex" {...props}>
        {slots.default?.()}
      </div>
    )
  }
})
