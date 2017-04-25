System.register([], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function validate() {
        var validators = [].concat(this._validators), errors = [];
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            var result = validator(this);
            if (!result.isValid) {
                errors.push(result);
            }
        }
        return errors;
    }
    exports_1("validate", validate);
    function validatable(target) {
        target.prototype.validate = validate;
    }
    exports_1("validatable", validatable);
    var ValidatableTodo;
    return {
        setters: [],
        execute: function () {
            ValidatableTodo = (function () {
                function ValidatableTodo() {
                }
                return ValidatableTodo;
            }());
            ValidatableTodo = __decorate([
                validatable
            ], ValidatableTodo);
            exports_1("ValidatableTodo", ValidatableTodo);
            //without decorator
            //ValidatableTodo.prototype.validate = validate; 
        }
    };
});
//# sourceMappingURL=Validators.js.map