<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="host" :options="optionHost" />
    <van-dropdown-item v-model="key" :options="optionKey" />
  </van-dropdown-menu>
</template>
 
<script>
import { ref,computed } from 'vue';
import usePassword from '@/store/password';
export default {
  setup() {
    const host = ref('release');
    const key = ref('username');
    const optionHost = [
      { text: '正式环境', value: 'release' },
      { text: '测试环境', value: 'debug' }
    ];
    const optionKey = [
      { text: '按用户名', value: 'username' },
      { text: '按手机号', value: 'preferredMobile' }
    ];
    const usePasswordStore = usePassword();
    usePasswordStore.setHost(computed(()=>host.value));
    usePasswordStore.setKey(computed(()=>key.value));
    return {
      host,
      key,
      optionHost,
      optionKey,
      usePasswordStore
    };
  },
};

</script>
 
<style lang="scss" scoped></style>