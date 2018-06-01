import * as _ from 'lodash'

function component(message: string) {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Message from Worker: ', message], ' ');

  return element;
}


import Worker from "worker-loader!./worker/worker";

const worker = new Worker();

worker.postMessage({ a: 1, b: 2 });

worker.onmessage = (event) => {
  document.body.appendChild(component(event.data.foo));
};

worker.addEventListener("message", (event) => {
  document.body.appendChild(component(event.data.foo));
}
);