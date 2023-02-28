
import express from "express";
import { ApolloServer, gql } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPlugin } from "@apollo/server";

import http from 'http';
import cors from 'cors';
import bodyParser from "body-parser";

interface MyContext {
    token?: String
}
const typeDefs = gql`

    type Book { 
        title: String,
        author: String
    }

    type Query {
        books: [Book]
    }

`

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
    typeDefs,

})