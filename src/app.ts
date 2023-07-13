import express  from "express";
import * as dotenv from 'dotenv';
import { sqlize, dbconnection } from "./core/connection";
import { user } from "./modules/user.model";
import UserRouter from "./route/user.route";
const app = express();
dotenv.config();

const port = process.env.PORT;
dbconnection();
// app.use('/auth', UserRouter);

user.sync({ force: true}).then(() => {
    console.log("Created");
    return Promise.resolve();
}).catch((e) => {console.log(e);});

app.listen(port, ()=> {
    console.log(`listning at http://locahost:${port}`);
})