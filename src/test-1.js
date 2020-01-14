import 'promise-polyfill/src/polyfill';

const button = document.querySelector('#addConsoleScript');

button.addEventListener(
  'click',
  (event) => import(/* webpackChunkName: 'console' */ './console').then(module => {
    const print = module.default;
    print();
  }),
);
