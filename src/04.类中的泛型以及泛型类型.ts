class DataManager {
  constructor(private data: string[] | number[]) {} // 联合类型
  getItem(index: number): string | number {
    return this.data[index];
  }
}

const data = new DataManager(['1']);
data.getItem(0);

// 泛型解决灵活性问题
class DataManager1<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data1 = new DataManager1<string>(['1']);
const data2 = new DataManager1<number>([1]);
data1.getItem(0);

interface Item {
  name: string;
}
class DataManager2<T extends Item> {
  // 泛型 T 拥有 Item 里面所有的东西
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data3 = new DataManager2([
  {
    name: 'dell'
  }
]);

interface Test {
  name: string;
}
class DataManager3<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data4 = new DataManager3<Test>([]);

// 如何使用泛型作为一个具体的类型注解
const func: <T>(param: T) => T = <T>(param: T) => {
  return param;
};

function hello<T>(param: T) {
  return param;
}

const func1: <T>(param: T) => T = hello;
