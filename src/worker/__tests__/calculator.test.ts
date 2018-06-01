import Calculator  from '../calculator';

const calc = new Calculator();

test('basic', () => {
  expect(calc.add(1,1)).toBe(2);
});

test('basic again', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('basic async',async () => {
    expect(calc.add(1, 1)).toBe(2);
});
  
test('basic async again', async () => {
expect(calc.add(1, 2)).toBe(3);
}, 1000 /* optional timeout */);