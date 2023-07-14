import express  from "express";
import * as dotenv from 'dotenv';
import router from "./route/user.route";
import { sqlize, dbconnection } from "./core/connection";
const app = express();
dotenv.config();

app.use(express.json());
const port = process.env.PORT;
dbconnection();
app.use('/', router);


app.listen(port, ()=> {
    console.log(`listning at http://locahost:${port}`);
})