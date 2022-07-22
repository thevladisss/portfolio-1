import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheContainer from '@/components/TheContainer'
import TheButton from '@/components/TheButton'
import TheModal from '@/components/TheModal'
const app = createApp(App)





app
.component('TheContainer',TheContainer)
.component('TheButton',TheButton)
.component('TheModal',TheModal)
.use(router)
.use(store)
.mount('#app')
