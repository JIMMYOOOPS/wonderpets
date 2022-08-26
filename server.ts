import axios from 'axios';

interface todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    const todo = response.data as todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
  });

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of ${title}
    The current status is ${completed}
  `);
  }