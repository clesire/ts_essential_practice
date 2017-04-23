export {};
interface jQuery {
    (select: string): HTMLElement;
    version: number;
}
//casting overrides TypeScript's type-checking
var $ = <jQuery>function(selector) {
    //Find DOM element
}
$.version = 1.12;

var element = $('#container')



