///<reference path='./components.ts' />
var Home;
(function (Home) {
    // 命名空间避免变量过多暴露
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
