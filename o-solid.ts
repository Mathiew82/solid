const axios = require('axios');

class ClientWrapper {
    public makeGetRequest(url, callback) {
        return axios
            .get(url)
            .then(callback);
    }
}

class TodoService {
    client;

    constructor(client) {
        this.client = client;
    }

    public requestTodoItems(callback) {
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        this.client.makeGetRequest(url, callback);
    }
}

const start = () => {
    const client = new ClientWrapper();
    const todoService = new TodoService(client);

    todoService.requestTodoItems(response => console.log(response.data));
}

start();

