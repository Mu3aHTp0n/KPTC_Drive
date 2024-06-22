import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Auth from './Auth.vue'
import FileManage from './FileWindow.vue'

const app = createApp(App).mount('#app')
const auth = createApp(Auth).mount('#auth')
const fileManage = createApp(FileManage).mount('#MNG')

// app.use(router);
// app.mount('#app');