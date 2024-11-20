# Challenge Bennu - Documentación

Este proyecto es parte del Challenge Bennu. Incluye una API REST desarrollada con Node.js y MongoDB, y un frontend simple en HTML, CSS y JavaScript que interactúa con la API.

Tecnologías Utilizadas
Backend: Node.js, Express, MongoDB Atlas.
Frontend: HTML, CSS, JavaScript.
Control de Versiones: Git/GitHub.
Variables de Entorno: dotenv para configuración segura.

Configuración del Proyecto:

### 1. Clonar el Repositorio
Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/QuimeyMoreno/Challenge-Bennu.git

2. Instalar Dependencias
cd Challenge-Bennu
npm install

### 3. Configurar Variables de Entorno

1. Copia el archivo `.env.example` y renómbralo como `.env`.
2. Completa las credenciales necesarias en el archivo `.env`:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.zzm2z.mongodb.net/bennuChallenge?retryWrites=true&w=majority

   Reemplaza <username> y <password> con tus credenciales de MongoDB.

## Inicialización del Proyecto

### Backend (API)

- **Inicia el servidor** con:
  ```bash
  npm start

  La API estará disponible en:
http://localhost:8080


Frontend:
Abrir el archivo main.html para interactuar con la api 


### Endpoints Disponibles

- **GET** `/api/users`  
  Obtiene todos los usuarios.

- **POST** `/api/users`  
  Agrega un nuevo usuario. El cuerpo de la solicitud debe tener esta estructura (ver Ejemplo de Uso).

- **GET** `/api/users/count`  
  Obtiene el número total de usuarios.

### **Ejemplo de Uso:**
#### POST `/api/users`

```bash
curl -X POST http://localhost:8080/api/users \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "address": {
        "street": "123 Main St",
        "suite": "Apt. 101",
        "city": "Metropolis",
        "zipcode": "54321",
        "geo": {
            "lat": "35.6895",
            "lng": "139.6917"
        }
    },
    "phone": "123-456-7890",
    "website": "johndoe.com",
    "company": {
        "name": "Doe Enterprises",
        "catchPhrase": "Innovating the future",
        "bs": "revolutionize end-to-end solutions"
    }
}'

