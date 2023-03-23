import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import { cors as connectCors } from "@bufbuild/connect";
import fastifyCors from "@fastify/cors";
import { readFileSync } from "fs";
import routes from "./connect";

const server = fastify({
  http2: true,
  https: {
    key: readFileSync("localhost+2-key.pem", "utf8"),
    cert: readFileSync("localhost+2.pem", "utf8"),
  }
});

await server.register(fastifyCors, {
  origin: true,
  methods: [...connectCors.allowedMethods],
  allowedHeaders: [...connectCors.allowedHeaders],
  exposedHeaders: [...connectCors.exposedHeaders],
});

await server.register(fastifyConnectPlugin, { routes });

await server.listen({ host: "localhost", port: 3000 });
console.log("The app is running on ", server.addresses());
