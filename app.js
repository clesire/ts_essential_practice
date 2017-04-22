var container = document.getElementById('container');
var todo = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
};
var displayName = "Todo #" + todo.id;
container.innerHTML = "\n<div todo='" + todo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (todo.completed ? "" : "hidden") + "\n              text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">" + todo.name + "</span>\n</div>\n";
