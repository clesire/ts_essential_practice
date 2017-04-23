"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo = {
    name: "Pick up laundry",
    state: TodoState.New
};
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
function delete1(todo1) {
    if (todo1.state != TodoState.Complete) {
        throw new Error("Can't delete incomplete task");
    }
}
