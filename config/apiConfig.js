// Obtener la URL base de la API desde las variables de entorno
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:9090/api';

module.exports = {
    API_BASE_URL
};
