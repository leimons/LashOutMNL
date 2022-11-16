import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import titleMixin from '@/mixins/titleMixin'

createApp(App)
    .use(router)
    .mixin(titleMixin)
    .mount('#app')
