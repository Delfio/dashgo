import { createServer, Model } from "miragejs";

type IUser = {
  name: string;
  email: string;
  created_at: Date;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<IUser>>({}),
    },
    routes() {
        this.namespace = 'api';
        this.timing = 2000;

        this.get('/users');
        this.post('/users');

        this.namespace = "";
        this.passthrough();
    },
  });

  return server;
};
