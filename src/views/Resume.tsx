// @prefix tst
// @description tsx template

import { defineComponent } from 'vue'
import Flex from '@/components/Flex'
import Info from './Info'

export default defineComponent({
  name: 'Resume',
  emits: [],
  setup(ctx) {
    return () => (
      <Flex>
        Resume
        <Info></Info>
      </Flex>
    )
  }
})
