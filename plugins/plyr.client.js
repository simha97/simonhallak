// plugins/plyr.client.js
import Plyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

export default function ({ app }) {
  if (!app) {
    console.error('App instance is undefined');
    return;
  }

  app.use(Plyr);
}
