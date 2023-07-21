import fastify from "fastify";
import { pokemonRoutes } from "./controllers/pokemon/routes";
import { ZodError } from "zod";

import cors from "@fastify/cors";
import { env } from "src/env";

export const app = fastify();

app.register(cors, { origin: true });

app.register(pokemonRoutes);

app.setErrorHandler((error, _, res) => {
  if (error instanceof ZodError) {
    return res
      .status(400)
      .send({ message: "Validation Error", issues: error.format() });
  }

  if (env.NODE_ENV !== "prod") {
    console.log(error);
  }

  return res.status(500).send({ message: "Internal server error." });
});
