import { app } from "@interfaces/http/app";
import { env } from "src/env";

app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running on port ${env.PORT}!`);
  });
