import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

// import MyLib from 'my-lib'
// Vue.use(MyLib)

import { Button , Input } from 'my-lib'
Vue.use(Button)
Vue.use(Input)

// console.log('MyLib', MyLib);
// import 'my-lib/lib/lib-style/my-lib.css';
// my-lib/lib/lib/lib-style/index.css

// import MyButton from 'my-lib/lib/button'
// import 'my-lib/lib/lib-style/button.css';
// Vue.use(Button)
// Vue.use(Input)

// import Input from 'my-lib/lib/input'
// import 'my-lib/lib/lib-style/input.css';

new Vue({
  router,
  el: "#app",
  render: (h) => h(App),
});
