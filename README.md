# ui-lib-2020
一个ui组件库


# ui-lib-2020
A packaged component for testing

## usAge
```js

    import MyLib from 'my-lib'
    Vue.use(MyLib)


    <my-button>按钮组件</my-button>
    <my-input v-model="value">按钮组件</my-input>
    <p>{{ value }}</p>


    data() {
      return {
        value: '',
      };
    },

```

#### or
```js

  import { Button , Input } from 'my-lib'
  Vue.use(Button)
  Vue.use(Input)

```
