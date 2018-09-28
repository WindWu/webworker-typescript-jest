import * as _ from 'lodash';
import Calculator from './calculator';

const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage({ foo: _.join(['Hello', 'webpack']) });

// Respond to message from parent thread
ctx.addEventListener('message', (event) => {
    console.log(event);
    const calc = new Calculator();
    const result = calc.add(event.data.a, event.data.b);
    ctx.postMessage({ foo: _.join(['Result', result]) });
});
