// import my from './mymodule';
// import './style.css';
// import Icon from './icon.png';
// import printMe from './print';
import _ from 'lodash';
// import {
//   cube
// } from './math'
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!aa');
// }

function component() {
  let element = document.createElement('div');
  let button=document.createElement('button');
  button.innerText="点我查看，console";
  // button.onclick=printMe;

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // element.innerHTML = "Hello webpack.";
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(button);
  // element.classList.add('hello');

  // var myIcon=new Image();
  // myIcon.src=Icon;
  // element.appendChild(myIcon);
  // button.onclick = e => import( /* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default;

  //   print();
  // });
  return element;
}

document.body.appendChild(component());

// if(module.hot){
//   module.hot.accept('./print.js',function(){
//     console.log('Accepting the update printMe Module!');
//     printMe();
//   })
// }