//require syntax
//import Model = require('./model');
//import Todo = Model.Todo;

//EMCAScript: a standard that will have native
//browser support
import { Todo, TodoState } from './model';
let todo: Todo;

//if have a script that modifies the environment
//depending on the module getting loaded
import './jQuery'