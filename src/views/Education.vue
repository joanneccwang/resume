<template>
  <div id="education">
    <block-title>EDUCATION</block-title>
    <div class="education_degree">
      <div>
        <div class="degree_school">{{ $t('education.NCKU.school') }}</div>
        <div class="degree_degree">{{ $t('education.NCKU.degree') }}</div>
      </div>
      <div class="degree_year">2015 - 2017</div>
    </div>
    <div class="education_degree">
      <div>
        <div class="degree_school">{{ $t('education.NTHU.school') }}</div>
        <div class="degree_degree">{{ $t('education.NTHU.degree') }}</div>
      </div>
      <div class="degree_year">2011 - 2015</div>
    </div>
  </div>

</template>

<script>
export default {

};
</script>

<style lang="scss">
  .education_degree {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .degree_school {
      @include title;
    }
    .degree_degree {
      margin-top: 5px;
    }
    .degree-year {
      color: #666;
    }
  }
</style>
