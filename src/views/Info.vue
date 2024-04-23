<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import scssVars from '@/assets/scss/exportVar.module.scss'

const isMobile = ref(false)

const checkIsMobile = () => {
  const phoneMaxWidth = parseInt((scssVars as any).phoneMaxWidth.slice(0, -2), 10)
  const windowWidth = document.body.clientWidth
  isMobile.value = windowWidth <= phoneMaxWidth
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<template>
  <Box id="info">
    <Flex id="info_basic">
      <Box id="basic_name">{{ $t('info.my_name') }}</Box>
      <Box id="basic_position">{{ $t('info.position') }}</Box>
    </Flex>
    <Flex id="info_contacts">
      <Flex class="info_contacts-block">
        <!-- <Box class="contact" id="contact_phone">
          <font-awesome-icon class="fa-icon" icon="mobile-screen-button" />
          0932-527712
        </Box> -->
        <Box class="contact" id="contact_mail">
          <font-awesome-icon class="fa-icon" icon="envelope" />
          joanneccwang[at]gmail.com
        </Box>
        <Box class="contact" id="contact_base">
          <font-awesome-icon class="fa-icon" icon="location-dot" />
          Taiwan
        </Box>
      </Flex>
      <Flex id="info_contacts_social" class="info_contacts-block">
        <a
          class="contact"
          id="contact_linkedin"
          href="https://www.linkedin.com/in/joannewang7/"
          target="_linkedin"
        >
          <font-awesome-icon
            class="fa-icon"
            :class="{ 'fa-2xl': isMobile }"
            :icon="['fab', 'linkedin']"
          />
          <template v-if="!isMobile">linkedin.com/in/joannewang7</template>
        </a>
        <a
          class="contact"
          id="contact_github"
          href="https://github.com/joanneccwang"
          target="_github"
        >
          <font-awesome-icon
            class="fa-icon"
            :class="{ 'fa-2xl': isMobile }"
            :icon="['fab', 'github']"
          />
          <template v-if="!isMobile">github.com/joanneccwang</template>
        </a>
        <a
          class="contact"
          id="contact_codepen"
          href="https://codepen.io/joanneccwang"
          target="_codepen"
        >
          <font-awesome-icon
            class="fa-icon"
            :class="{ 'fa-2xl': isMobile }"
            :icon="['fab', 'codepen']"
          />
          <template v-if="!isMobile">codepen.io/joanneccwang</template>
        </a>
      </Flex>
    </Flex>
  </Box>
</template>
<style lang="scss" scoped>
#info_basic {
  margin: 15px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #basic_name {
    font-size: 26px;
    font-weight: 800;
  }
  #basic_position {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }

  @include mobile {
    #basic_name {
      font-size: 22px;
    }
    #basic_position {
      font-size: 20px;
    }
  }
}
#info_contacts {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  .info_contacts-block {
    flex-direction: row;
    margin: 3px 0px;

    @include mobile {
      flex-direction: column;
      align-items: center;

      &#info_contacts_social {
        flex-direction: row;
      }
    }
  }
  .contact {
    margin: 0px 20px;
    .fa-icon {
      width: 20px;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
}
</style>
