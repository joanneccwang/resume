<template>
  <div id="info">
    <div id="info_basic">
      <div id="basic_name">{{ $t('info.my_name') }}</div>
      <div id="basic_position">{{ $t('info.position') }}</div>
    </div>
    <div id="info_contacts">
      <div class="info_contacts-block">
        <div class="contact" id="contact_phone">
          <font-awesome-icon icon="mobile-screen-button" />
          0932-527712
        </div>
        <div class="contact" id="contact_mail">
          <font-awesome-icon icon="envelope" />
          joanneccwang[at]gmail.com
        </div>
        <div class="contact" id="contact_base">
          <font-awesome-icon icon="location-dot" />
          Taiwan
        </div>
      </div>
      <div class="info_contacts-block">
        <a class="contact" id="contact_linkedin"
          href="https://www.linkedin.com/in/joannewang7/" target="_linkedin">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          linkedin.com/in/joannewang7
        </a>
        <a class="contact" id="contact_github"
          href="https://github.com/joanneccwang" target="_github">
          <font-awesome-icon :icon="['fab', 'github']" />
          github.com/joanneccwang
        </a>
        <a class="contact" id="contact_codepen"
          href="https://codepen.io/joanneccwang" target="_codepen">
          <font-awesome-icon :icon="['fab', 'codepen']" />
          codepen.io/joanneccwang
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  }
  .contact {
    margin: 0px 20px;
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
