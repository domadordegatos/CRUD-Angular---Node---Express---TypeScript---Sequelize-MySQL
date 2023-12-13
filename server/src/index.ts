import Server from "./models/server";
import dotenv from 'dotenv';

//configuramos las variables del ambiente
dotenv.config();

const server = new Server();