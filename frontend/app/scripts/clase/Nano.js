System.register(["../Character"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var Character_1, Nano;
    return {
        setters: [
            function (Character_1_1) {
                Character_1 = Character_1_1;
            }
        ],
        execute: function () {
            Nano = (function (_super) {
                __extends(Nano, _super);
                function Nano(uNombre) {
                    var _this = this;
                    /* Valores Iniciales */
                    var Vigor = 10;
                    var Velocidad = 10;
                    var Intelecto = 10;
                    _this = _super.call(this, uNombre, 1, Vigor, Velocidad, Intelecto) || this;
                    return _this;
                }
                return Nano;
            }(Character_1.Character));
            exports_1("Nano", Nano);
        }
    };
});
//# sourceMappingURL=Nano.js.map