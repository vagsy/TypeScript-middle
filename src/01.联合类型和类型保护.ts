interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

// 联合类型 Bird | Dog

// 类型保护-方式一
// ts类型断言  类型不确定需要 as 指定
// 语法 值 as 类型 或者 <类型>值
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing(); // 类型断言
  } else {
    (animal as Dog).bark();
  }
}

// 类型保护-方式二
// in 语法来做类型保护
function trainAnimalSecond(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// 类型保护-方式三
// typeof 语法来做类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

// 类型保护-方式四
// instanceof 语法来做类型保护
class NumberObj {
  count!: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
