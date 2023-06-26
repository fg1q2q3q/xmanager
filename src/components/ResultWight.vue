<template>
  <div>
  <p v-show="value !== ''">{{ show }}</p>
  <van-config-provider :theme-vars="themeVars">
    <van-cell-group inset>
      <van-field v-model="value" placeholder="返回结果" type="textarea" autosize rows="10" />
    </van-cell-group>
  </van-config-provider>
</div>
</template>
 
<script>
import { ref, reactive, computed } from 'vue';
import usePassword from '@/store/password';
import { decrypt } from '@/utils/jsencrypt'
export default {
  setup() {
    const themeVars = reactive({
      fieldTextAreaMinHeight: '200px'
    });
    const usePasswordStore = usePassword();
    const value = ref(computed(() => JSON.stringify(JSON.parse(JSON.stringify(usePasswordStore.result)), null, '\t')));
    const show = ref(computed(() => {
      if (usePasswordStore.result == '') return ''
      const j = JSON.parse(JSON.stringify(usePasswordStore.result)).data;
      return '用户名：' + j.username + '\n手机号：' + j.preferredMobile + '\n密码：' + decrypt(j.reserve4)
    }));
    return { value, show };
  },
};

</script>
 
<style scoped>

p {
  margin: 0 10px;
  white-space: pre-wrap;
}
</style>