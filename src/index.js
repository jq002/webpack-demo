import my from './mymodule';
import './style.css';
// import Icon from './icon.png';
import printMe from './print';

function component() {
    let element = document.createElement('div');
    let button=document.createElement('button');
    button.innerText="点我查看，console";
    button.onclick=printMe;
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = "Hello webpack."+my();
    element.appendChild(button);
    element.classList.add('hello');

    // var myIcon=new Image();
    // myIcon.src=Icon;
    // element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());

  if(module.hot){
    module.hot.accept('./print.js',function(){
      console.log('Accepting the update printMe Module!');
      printMe();
    })
  }
