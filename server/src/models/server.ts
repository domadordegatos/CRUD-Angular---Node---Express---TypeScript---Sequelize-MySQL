import express, { Application, Request, Response } from 'express';
import routeProducto from "../routes/producto";
import db from '../db/connections';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;
    constructor() {
        /* console.log(process.env.PORT); */

        this.app = express();
        this.port = process.env.PORT || '3001'; //si no encuentra el archivo entonces le asigna el puerto 3001
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        })
    }
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API WORKING'
            })
        })
        this.app.use('/api/productos', routeProducto)
    }

    midlewares() {
        //parseamos el body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate()
            console.log('base de datos conectada');

        } catch (error) {
            console.log(error);
            console.log('error al conectarse a la base datos');
        }
    }
}

export default Server;