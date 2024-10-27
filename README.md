# Desafio BackEnd Fusion - Gerenciador da Galáxia Star Wars

Este é um projeto de API backend para criar e gerenciar uma galáxia inspirada no universo Star Wars, contendo entidades como planetas, sistemas estelares, personagens e naves espaciais. O projeto é desenvolvido utilizando Node.js, TypeScript, Express e JWT para autenticação.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Leonardoyusuke/desafio-backend-fusion-01.git
   cd desafio-backend-fusion-01

2.	**Instale as dependências:**
  ```bash
  npm install

3. **Run**
  ```bash
  npm run dev


## Rotas da API

Authorization: Bearer <seu_token>


Planets

POST 📤 /planets: Criar um novo planeta.
 ```json
 {
  "name": "Nome do planeta",
  "climate": "Clima do planeta",
  "terrain": "Terreno do planeta",
  "starSystemId": 1
}
GET 📥 /planets: Listar todos os planetas.
GET 📥 /planets/:id: Obter detalhes de um planeta específico.
PUT 🔄 /planets/:id: Atualizar informações de um planeta.
DELETE 🗑 /planets/:id: Deletar um planeta.


Start Systems
POST 📤 /star-systems: Criar um novo sistema estelar.
GET 📥 /star-systems: Listar todos os sistemas estelares.
GET 📥 /star-systems/:id: Obter detalhes de um sistema estelar específico.
PUT 🔄 /star-systems/:id: Atualizar informações de um sistema estelar
DELETE 🗑 /star-systems/:id: Deletar um sistema estelar.
Characters

POST 📤 /characters: Criar um novo personagem.
GET 📥 /characters: Listar todos os personagens.
GET 📥 /characters/:id: Obter detalhes de um personagem específico.
PUT 🔄 /characters/:id: Atualizar informações de um personagem.
DELETE 🗑 /characters/:id: Deletar um personagem.

SpaceShips
POST 📤 /spaceships: Criar uma nova nave espacial.
GET 📥 /spaceships: Listar todas as naves espaciais.
GET 📥 /spaceships/:id: Obter detalhes de uma nave espacial específica.
PUT 🔄 /spaceships/:id: Atualizar informações de uma nave espacial.
DELETE 🗑 /spaceships/:id: Deletar uma nave espacial.

