
function component() {
  const button = document.createElement('button');
  button.innerHTML = 'Click me and look at the console!';
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.addEventListener(
    'click',
    e => import(/* webpackChunkName: 'print' */ './print').then(module => {
      const print = module.default;
      print();
    }),
  );

  return button;
}

document.body.appendChild(component());
