import express from 'express';
import dotenv from 'dotenv'

class App {
  public server;
  private port;

  constructor() {
    dotenv.config();
    this.port = process.env.PORT;

    console.log('initializing');

    this.server = express();

    this.middlewares();
    this.routes();

    this.server.listen(this.port, () => {
      console.log(`Server is running at https://localhost:${this.port}`);
    });
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    // TODO: agregar rutas
  }
}

export default new App();
