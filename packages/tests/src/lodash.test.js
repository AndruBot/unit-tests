/* global test expect */
import ready from '@lskjs/utils/polyfill';
import _ from 'lodash';

ready();

test('lodash/get 1', async () => {
  const json = {
    value: {
      current: 1,
    },
  };

  expect(_.get(json, 'value.current')).toBe(1);
});
test('lodash/get 2', async () => {
  const json = {
    value: {
      current: 1,
    },
  };

  expect(_.get(json, 'current.value', null)).toBe(null);
});
test('lodash/set 1', async () => {
  const json = {};
  _.set(json, 'value.current', 10);

  expect(json).toEqual({ value: { current: 10 } });
});

// разделить массив на массивы по 5 элементов максимум каждый
// const json = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[25]]

// отформатировать массив по полю age, от минимального к максимальному
// const json = [{ age: 21, name: "A" }, { age: 16, name: "B" }, { age: 20, name: "C" }, { age: 25, name: "D" }]
// [{ age: 16, name: "B" }, { age: 20, name: "C" }, { age: 21, name: "A" }, { age: 25, name: "D" }]

// из массива arr создать json, где в качестве ключа будет выступать кол-во цифр в значении
// const arr = [{ value: 1 }, { value: 20 }, { value: 30 }, { value: 5 }, { value: 70 }, { value: 100 }, { value: 500 }, { value: 13 }]
// {"1":[{"value":1},{"value":5}],"2":[{"value":20},{"value":30},{"value":70},{"value":13}],"3":[{"value":100},{"value":500}]}
