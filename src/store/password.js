import { defineStore } from "pinia";
const usePassword = defineStore("password", {
  state: () => ({
    host: "",
    key: "",
    result:""
  }),
  actions: {
    setHost(host) {
      this.host = host;
    },
    setKey(key) {
      this.key = key;
    },
    setResult(result) {
      this.result = result;
    }
  },
});
export default usePassword;