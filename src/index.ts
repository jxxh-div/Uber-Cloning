import app from "./app";
import { Options } from "graphql-yoga";

const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const addOptions : Options = {
    port : PORT,
    playground : PLAYGROUND_ENDPOINT,
    endpoint : GRAPHQL_ENDPOINT
}

const handleAppStart  = () => console.log(`on port ${PORT}`)

app.start(addOptions, handleAppStart);