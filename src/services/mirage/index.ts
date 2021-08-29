import { createServer, Factory, Model } from "miragejs";
import faker from 'faker';

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

    factories: {
      user: Factory.extend({
        name() {
            return faker.name
        },
        email() {
            return faker.internet.email().toLowerCase()
        },
        created_at() {
            return faker.date.recent(10, new Date())
        },
      }),
    },

    seeds(server) {
        server.createList('user', 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
