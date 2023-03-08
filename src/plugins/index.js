import Button from "./Button";
import Input from "./Input";

const install = (Vue) => {
  Vue.use(Button);
  Vue.use(Input);
};

if (window && window.Vue) {
  Vue.use(install);
}

export default install;
