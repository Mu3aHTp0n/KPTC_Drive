import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import File from './FileWindow.vue'
const file = createApp(File).mount('#MNG')
createApp(App).mount('#app')
