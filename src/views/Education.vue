<script setup lang="ts"></script>

<template>
  <Box id="education">
    <block-title>EDUCATION</block-title>
    <Box class="education_degree">
      <Box class="education_degree-block">
        <Box class="degree_school">{{ $t('education.NCKU.school') }}</Box>
        <Box class="degree_degree">{{ $t('education.NCKU.degree') }}</Box>
      </Box>
      <Box class="degree_year">2015 - 2017</Box>
    </Box>
    <Box class="education_degree">
      <Box class="education_degree-block">
        <Box class="degree_school">{{ $t('education.NTHU.school') }}</Box>
        <Box class="degree_degree">{{ $t('education.NTHU.degree') }}</Box>
      </Box>
      <Box class="degree_year">2011 - 2015</Box>
    </Box>
  </Box>
</template>

<style lang="scss" scoped>
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

[lang='en'] {
  .education_degree-block {
    .degree_school {
      flex: 0 0 300px;
    }
    @include mobile {
      flex-direction: column;
      margin-bottom: 5px;
      .degree_school {
        flex: 0 0 auto;
      }
    }
  }
}
[lang='zhtw'] {
  .degree_school {
    flex: 0 0 150px;
  }
}
</style>
