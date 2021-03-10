import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
//typeorm : 성정한 옵션들로 데이터베이스와 앱을 연결해준다.
import app from "./app";
import connectionOptions from "./ormConfig";


const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const addOptions : Options = {
    port : PORT,
    playground : PLAYGROUND_ENDPOINT,
    endpoint : GRAPHQL_ENDPOINT
}

const handleAppStart  = () => console.log(`on port ${PORT}`)

createConnection(connectionOptions).then(() =>  { //데이터 베이스를 먼저  연결한 후 앱을 실행한다.
    app.start(addOptions, handleAppStart);
})

