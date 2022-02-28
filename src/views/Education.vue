<template>
  <div id="education">
    <block-title>EDUCATION</block-title>
    <div class="education_degree">
      <div class="education_degree-block">
        <div class="degree_school">{{ $t('education.NCKU.school') }}</div>
        <div class="degree_degree">{{ $t('education.NCKU.degree') }}</div>
      </div>
      <div class="degree_year">2015 - 2017</div>
    </div>
    <div class="education_degree">
      <div class="education_degree-block">
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

    @include mobile {
      flex-direction: column;
      justify-content: flex-start;
    }

    .education_degree-block {
      flex: 1 0 auto;
      display: flex;
      flex-direction: row;
    }

    .degree_school {
      @include title;
    }
    .degree_degree {
      margin-top: 5px;
      flex: 1 0 auto;
    }
    .degree-year {
      flex: 0 0 auto;
      color: #666;
    }
  }

  [lang=en] {
    .degree_school {
      flex: 0 0 300px;
    }
  }
  [lang=zhtw] {
    .degree_school {
      flex: 0 0 150px;
    }
  }
</style>
