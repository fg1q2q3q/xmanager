<template>
  <form action="/">
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
          <van-button type="primary" @click="onClickButton">查询</van-button>
      </template>
    </van-search>
  </form>
</template>
 
<script>
import { ref } from 'vue';
import usePassword from '@/store/password';
import { encrypt } from '@/utils/jsencrypt'
import axios from 'axios'
import { showToast } from 'vant';
export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => queryPwd(val);
    const onClickButton = () => queryPwd(value.value);
    const usePasswordStore = usePassword();
    const queryPwd = (input) => {
      if (input == '') {
        showToast("请输入查询条件")
        return
      }
      usePasswordStore.setResult('')
      axios({
          url:'/'+usePasswordStore.host+'/action/user/user/findByKey/sso?appcode=maip&keytype='+usePasswordStore.key+'&keyword='+encrypt(input),
          method:'post',
        }).then(res=>{
          usePasswordStore.setResult(res.data)
          if(res.data.status == 200){
            
          }else{
            showToast(res.data.msg)
          }
        })  
    }
    return { value, onSearch, onClickButton,queryPwd };
  },
};

</script>
 
<style lang="scss" scoped></style>
