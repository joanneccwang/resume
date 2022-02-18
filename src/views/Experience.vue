<template>
  <div id="experience">
    <block-title>EXPERIENCE</block-title>
    <div class="experience_company">
      <div class="experience_company-name">{{ $t('experience.emotibot.company') }}</div>
      <div class="experience_time">Dec 2017 - Nov 2021</div>
    </div>
    <div class="experience_content">
      <ul>
        <li>{{ $t('experience.emotibot.summary1') }}</li>
        <li>{{ $t('experience.emotibot.summary2') }}</li>
        <li>{{ $t('experience.emotibot.summary3') }}</li>
      </ul>

      {{ $t('experience.emotibot.includes') }}
      <div class="product">
        <div class="product_info">
          <div class="product_name">{{ $t('experience.emotibot.AI_bot.product') }}</div>
          <div class="product_time">2020.11 - 2021.11</div>
        </div>
        <p>
          {{ $t('experience.emotibot.AI_bot.summary') }}
        </p>
        <ul>
          <li>{{ $t('experience.emotibot.AI_bot.bullet1') }}</li>
          <li>{{ $t('experience.emotibot.AI_bot.bullet2') }}</li>
          <li>{{ $t('experience.emotibot.AI_bot.bullet3') }}</li>
        </ul>
      </div>
      <div class="product">
        <div class="product_info">
          <div class="product_name">{{ $t('experience.emotibot.voice_platform.product') }}</div>
          <div class="product_time">2021.01 - 2021.11</div>
        </div>
        <p>
          {{ $t('experience.emotibot.voice_platform.summary') }}
        </p>
        <ul>
          <li>{{ $t('experience.emotibot.voice_platform.bullet1') }}</li>
          <li>{{ $t('experience.emotibot.voice_platform.bullet2') }}</li>
        </ul>
      </div>
      <div class="product">
        <div class="product_info">
          <div class="product_name">{{ $t('experience.emotibot.AICC.product') }}</div>
          <div class="product_time">2018.07 - 2020.11</div>
        </div>
        <p>
          {{ $t('experience.emotibot.AICC.summary') }}
        </p>
        <ul>
          <li>{{ $t('experience.emotibot.AICC.bullet1') }}</li>
          <li>{{ $t('experience.emotibot.AICC.bullet2') }}</li>
          <li>{{ $t('experience.emotibot.AICC.bullet3') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.experience_company {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .experience_company-name {
    @include title;
  }
}

.product {
  margin: 10px 0px;
  .product_info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .product_name {
      @include sub-title;
    }

  }
}
</style>
