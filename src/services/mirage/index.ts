import { createServer, Factory, Model } from "miragejs";
import faker from 'faker';
import IUser from "../../types/IUser";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<IUser>>({}),
    },

    factories: {
      user: Factory.extend({

        name() {
            return faker.name.firstName()
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
        server.createList('user', 10);
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
