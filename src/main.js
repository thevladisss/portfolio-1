import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import TheContainer from '@/components/TheContainer'
import TheButton from '@/components/TheButton'
import TheModal from '@/components/TheModal'
import TheForm from '@/components/TheForm'
import TheLoader from '@/components/TheLoader'
const app = createApp(App)
const store = createPinia()




app
.component('TheContainer',TheContainer)
.component('TheButton',TheButton)
.component('TheModal',TheModal)
.component('TheForm',TheForm)
.component('TheLoader',TheLoader)
.use(router)
.use(store)
.mount('#app')
