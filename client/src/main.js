import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { SetupCalendar } from "v-calendar"
import titleMixin from '@/mixins/titleMixin'

createApp(App)
    .use(router)
    .use(SetupCalendar)
    .mixin(titleMixin)
    .mount('#app')
