// Importamos la libreria Axios
import axios from "axios";
// Importamos la libreria HTTPS para manejar las solicitudes HTTPS
import https from "https";

// Creamos una funcion asyncroa que se encarga de llamar a los persojanes
export const obtenerSuperheroes = async (req, res) => {
    try {
        // Creamos una constante que defini la URL de la api que nos da los datos de los superheroes
        const API_URL = 'https://akabab.github.io/superhero-api/api/all.json';

        // Cree un agente que se encarga de ignorar las peticiones 
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        // Creamos una constante que se encarga de llamar a la API externa
        const response = await axios.get(API_URL, { httpsAgent });

        // Creamos una verificacion para que el JSON se Valido
        if (!response.data || typeof response.data !== "object") {
            return res.status(500).json({
                success: false,
                message: "La API no devolvió un JSON válido",
            });
        }

        // Si los datos son validos crea un codigo 200 que la solicitud fue exitosa
        res.status(200).json({
            success: true,
            count: response.data.length,
            data: response.data,
        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Error al obtener los superhéroes",
            error: error.message,
        });
    }
};