import 'promise-polyfill/src/polyfill';

const header = document.querySelector('#myAwesomeHeader');

if (header) {
  import(/* webpackChunkName: 'modules/organisms/header/header' */ './modules/organisms/header/header').then(module => {
    const initHeader = module.default;
    initHeader();
  })
}
