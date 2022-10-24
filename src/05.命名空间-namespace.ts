///<reference path='./components.ts' />

namespace Home {
  // 命名空间避免变量过多暴露

  export class Page {
    user: Components.User = {
      name: 'dell'
    };

    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
