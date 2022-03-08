<p align="center"><img src="src/assets/gitart-dialog-logo.svg" width="170" alt="Gitart Vue Dialog logo"></p>

<h1 align="center">Gitart Vue Dialog</h1>

<p align="center">Vue 3 Dialog/Modal Component + Plugin (optional)</p>

---

📘 [Documentation](https://gitart-vue-dialog.gitart.org/)

🤯 [Examples](https://examples.gitart-vue-dialog.gitart.org/)

🃏 [Plan for the Future](https://trello.com/b/CYcpbq4F/gitart-oss/)

Typescript support, customizable, beautifully animated, SSR

~13 KiB - index.cjs `gitart-vue-dialog` <br/> 
~1.8 KiB - style.css `gitart-vue-dialog/dist/style.css` <br/> 


## Installation

### Standalone Component

```js
// main.js or YourComponent.vue
import 'gitart-vue-dialog/dist/style.css'
```

```js
// YourComponent.vue
import { GDialog } from 'gitart-vue-dialog'

export default {
  components: {
    GDialog,
  },
}
```

### Plugin

Be sure to read the [documentation](http://gitart-vue-dialog.gitart.org/) for using the plugin

```js
import App from './App.vue'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'

createApp(App)
  .use(dialogPlugin)
  .mount('#app')
```



## Usage

Read [Documentation](http://gitart-vue-dialog.gitart.org/)

<img src="src/assets/example-video.gif" width="690" alt="Example Video">
