<template>
  <div id="info">
    <div id="info_basic">
      <div id="basic_name">{{ $t('info.my_name') }}</div>
      <div id="basic_position">{{ $t('info.position') }}</div>
    </div>
    <div id="info_contacts">
      <div class="info_contacts-block">
        <div class="contact" id="contact_phone">
          <font-awesome-icon class="fa-icon" icon="mobile-screen-button" />
          0932-527712
        </div>
        <div class="contact" id="contact_mail">
          <font-awesome-icon class="fa-icon" icon="envelope" />
          joanneccwang[at]gmail.com
        </div>
        <div class="contact" id="contact_base">
          <font-awesome-icon class="fa-icon" icon="location-dot" />
          Taiwan
        </div>
      </div>
      <div id="info_contacts_social" class="info_contacts-block">
        <a class="contact" id="contact_linkedin"
          href="https://www.linkedin.com/in/joannewang7/" target="_linkedin">
          <font-awesome-icon class="fa-icon" :class="{'fa-2xl': isMobile}" :icon="['fab', 'linkedin']" />
          <template v-if="!isMobile">linkedin.com/in/joannewang7</template>
        </a>
        <a class="contact" id="contact_github"
          href="https://github.com/joanneccwang" target="_github">
          <font-awesome-icon class="fa-icon" :class="{'fa-2xl': isMobile}" :icon="['fab', 'github']" />
          <template v-if="!isMobile">github.com/joanneccwang</template>
        </a>
        <a class="contact" id="contact_codepen"
          href="https://codepen.io/joanneccwang" target="_codepen">
          <font-awesome-icon class="fa-icon" :class="{'fa-2xl': isMobile}" :icon="['fab', 'codepen']" />
          <template v-if="!isMobile">codepen.io/joanneccwang</template>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import scssVars from '@/assets/scss/variable.scss';

export default {
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    checkIsMobile() {
      const phoneMaxWidth = parseInt(scssVars.phoneMaxWidth.slice(0, -2), 10);
      const windowWidth = document.body.clientWidth;
      this.isMobile = windowWidth <= phoneMaxWidth;
    },
  },

  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
};
</script>

<style lang="scss">
#info_basic {
  margin: 15px 0px;
  display: flex;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  .info_contacts-block {
    display: flex;
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
    .fa-icon{
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
