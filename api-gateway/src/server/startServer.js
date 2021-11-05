import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv("PORT", 7000);

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });
}
startServer();

const app = express();

app.use(cookieParser());

app.use(
    cors({

        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

app.listen(PORT, "0.0.0.0", () => {
    console.info(`API gateway listening on ${PORT}`);
});
