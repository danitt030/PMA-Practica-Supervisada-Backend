// importamos la funcion de config con dotenv
import { config } from "dotenv";
// ejecutamos la funcion de config que trae las variables de entorno
config()

// Importamos el servidor
import Server from "./configs/server.js";

//Crea la nueva instancia de la clase Server
const server = new Server()

// Se encarga de llamar al metodo listen que inicia el servidor Express
server.listen()