import { defineComponent } from 'vue'

import Resume from '@/views/Resume'
import Flex from '@/components/Flex'

export default defineComponent({
  name: 'App',
  emits: [],
  props: {},
  setup(props, ctx) {
    return () => (
      <Flex>
        <Resume></Resume>
      </Flex>
    )
  }
})
