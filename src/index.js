import { Template } from '@templates';
import '@styles/main.css';
import '@styles/vars.styl';

(async () => {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
