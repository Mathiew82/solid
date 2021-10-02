// --- import axios from 'axios';
class Axios {
  public get(url: string) {
    return Promise.resolve({ data: `success ${url}` });
  }
}

const axios = new Axios();

class ClientWrapper {
  public async makeGetRequest(url: string) {
    return await axios
      .get(url)
      .then((response: any) => console.log(response.data));
  }
}

class TodoService {
  client: ClientWrapper;

  constructor(client: ClientWrapper) {
    this.client = client;
  }

  public requestTodoItems() {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    this.client.makeGetRequest(url);
  }
}

const start = () => {
  const client = new ClientWrapper();
  const todoService = new TodoService(client);

  todoService.requestTodoItems();
};

start();
