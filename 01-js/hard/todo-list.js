/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  // Defining constructor
  constructor(){
    this.todo = [];
  }

  //add function
  add(task){
    this.todo.push(task);
  }

  //remove 
  remove(indexOfTodo){
    try{
      this.todo.splice(indexOfTodo,1);
    }
    catch(e){
      // Error if the index doesn't exist
      throw new Error("Index doesn't exist in the todo list.")

    }
  }
  
  update(index,updatedTodo){
      if(index < this.todo.length){
    this.todo[index] = updatedTodo;
     }
}

getAll(){
  return this.todo;
}

get(indexOfTodo){
  if(indexOfTodo < this.todo.length){
    return this.todo[indexOfTodo];
  }
  else{
    return null;
  }
}

clear(){
  this.todo = [];
}

}

module.exports = Todo;
