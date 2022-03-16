import { createApp } from 'vue'
import App from './App.vue'

import Maska from 'maska'
import moment from 'moment'

//createApp(App).mount('#app')

const app = createApp(App);

app.use(Maska); //plugin , lib feita pro Vue, por isso a declaração dessa forma.
app.config.globalProperties.$moment = moment; //não é um plugin pro Vue, então é declarada como uma propriedade global.

app.mount('#app');
