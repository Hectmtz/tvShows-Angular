const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.connection_string = process.env.CONNECTION_STRING;

        this.usersPath = "/api/users";
        this.tvshowsPath = "/api/tvshows";

        this.middlewares();
        this.routes();
        this.db();
    }

    routes(){
        this.app.use(this.usersPath, require("../routes/users"));

        this.app.use(this.tvshowsPath, require("../routes/tvshows"));
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

    db(){
        mongoose.connect(this.connection_string).then(
            ()=>{
                console.log("Conexion exitosa con la base de datos");
            }
        ).catch(
            (error)=>{
                console.log("Error al conectar copn la db");
            }
        )
    }
}

module.exports = Server;