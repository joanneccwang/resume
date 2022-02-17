<template>
  <div id="education">
    <block-title>EDUCATION</block-title>
    <div class="education_degree">
      <div>
        <div class="degree_school">National Cheng Kung University</div>
        <div class="degree_degree">Master's Degree, Computer Science</div>
      </div>
      <div class="degree_year">2015 - 2017</div>
    </div>
    <div class="education_degree">
      <div>
        <div class="degree_school">National Tsing Hua University</div>
        <div class="degree_degree">Bachelor's Degree, Computer Science</div>
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
      font-weight: bold;
      font-size: 18px;
    }
    .degree-year {
      color: #666;
    }
  }
</style>
