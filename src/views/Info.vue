<template>
  <div id="info">
    <div id="info_basic">
      <div id="basic_name">{{ $t('info.my_name') }}</div>
      <div id="basic_position">{{ $t('info.position') }}</div>
    </div>
    <div id="info_contacts">
      <div class="contact" id="contact_phone">PHONE: 0932-527712</div>
      <div class="contact" id="contact_mail">MAIL: joanneccwang@gmail.com</div>
      <div class="contact" id="contact_base">BASE: Taiwan</div>
      <div class="contact" id="contact_linkedin">LINKEDIN: https://www.linkedin.com/in/joannewang7/</div>
      <div class="contact" id="contact_github">GITHUB: https://github.com/joanneccwang"</div>
      <div class="contact" id="contact_codepen">CODEPEN: https://codepen.io/joanneccwang</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
#info_basic {
  margin: 20px 0px;
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
  .contact {
    margin: 0px 20px;
  }
}
</style>
