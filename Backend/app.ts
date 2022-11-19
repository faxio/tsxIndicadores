import express from 'express';
import dotenv from 'dotenv'
import EjesModule from './src/modules/ejes.module';
import indicadoresModule from './src/modules/indicadores.module';
import publicacionesModule from './src/modules/publicaciones.module';

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
    this.server.use(EjesModule.routes);
    this.server.use(indicadoresModule.routes);
    this.server.use(publicacionesModule.routes);
  }
}

export default new App();
