// @prefix tst
// @description tsx template

import { defineComponent } from 'vue'
import Flex from '@/components/Flex'

export default defineComponent({
  name: 'Info',
  emits: [],
  setup(ctx) {
    return () => (
      <Flex>
        Hello?????
        <Flex>Joanne Wang</Flex>
        <Flex>前端工程師</Flex>
      </Flex>
    )
  }
})
