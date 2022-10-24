// 泛型 generic 泛指的类型
// 不确定的类型，用泛型的方式

// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }

function join<T>(first: T, second: T) {
  return `${first}${second}`;
}

join<string>('1', '1');
join<number>(1, 1);

// function map<ABC>(params: ABC[]) {
//   return params;
// }

function map<T>(params: Array<T>) {
  return params;
}

// 一般用 T 做泛型的名字，type 的简写

map<string>(['123']);

function join1<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join1<number, string>(1, '1');
join1('1', 1);

function anotherJoin<T>(first: T, second: T): T {
  return first;
}
