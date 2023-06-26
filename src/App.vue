<template>
  <!-- 查询用户密码 -->
  <OptionWight/>
  <SearchWight/>
  <ResultWight/>
</template>

<script>
import OptionWight from './components/OptionWight.vue'
import SearchWight from './components/SearchWight.vue'
import ResultWight from './components/ResultWight.vue'

export default {
  name: 'App',
  components: {
    OptionWight,
    SearchWight,
    ResultWight
  }
}
</script>

<style>

</style>
