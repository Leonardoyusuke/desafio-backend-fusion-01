Desafio BackEnd Fusion - Gerenciador da Galáxia Star Wars

Este é um projeto de API backend para criar e gerenciar uma galáxia inspirada no universo Star Wars, contendo entidades como planetas, sistemas estelares, personagens e naves espaciais. O projeto é desenvolvido utilizando Node.js, TypeScript, Express e JWT para autenticação.

Instalação

	1.	Clone o repositório:
```bash 
git clone https://github.com/Leonardoyusuke/desafio-backend-fusion-01.git cd desafio-backend-fusion-01
```
	2.	Instale as dependências:
```bash 
npm install
```
	3.	Execute o projeto:
```bash
npm run dev
```

Autenticação

Para acessar rotas protegidas, inclua o token JWT no cabeçalho da requisição:

Authorization: Bearer <seu_token>

Rotas da API

Planetas

	•	POST /planets: Criar um novo planeta.
	•	Body:
```json
{ "name": "Nome do planeta",
	  "climate": "Clima do planeta",
	  "terrain": "Terreno do planeta",
	  "starSystemId": 1 }
```
	•	GET /planets: Listar todos os planetas.
	•	GET /planets/:id: Obter detalhes de um planeta específico.
	•	PUT /planets/:id: Atualizar informações de um planeta.
	•	Body:
```json 
{ "name": "Novo nome do planeta",
 "climate": "Novo clima",
"terrain": "Novo terreno" }
 ```
	•	DELETE /planets/:id: Deletar um planeta.

Sistemas Estelares (Star Systems)

	•	POST /star-systems: Criar um novo sistema estelar.
	•	Body:
```json 
{ "name": "Nome do sistema estelar",
 "description": "Descrição do sistema estelar" }
 ```
	•	GET /star-systems: Listar todos os sistemas estelares.
	•	GET /star-systems/:id: Obter detalhes de um sistema estelar específico.
	•	PUT /star-systems/:id: Atualizar informações de um sistema estelar.
	•	Body:
```json
{"name": "Novo nome do sistema estelar",
 "description": "Nova descrição" }
 ```
	•	DELETE /star-systems/:id: Deletar um sistema estelar.

Personagens

	•	POST /characters: Criar um novo personagem.
	•	Body:
```json 
{ "name": "Nome do personagem",
 "species": "Espécie do personagem",
"affiliation": "Afiliação do personagem",
 "homePlanetId": 1 }
```
	•	GET /characters: Listar todos os personagens.
	•	GET /characters/:id: Obter detalhes de um personagem específico.
	•	PUT /characters/:id: Atualizar informações de um personagem.
	•	Body:
```json 
{ "name": "Novo nome",
"species": "Nova espécie",
 "affiliation": "Nova afiliação" }
 ```
	•	DELETE /characters/:id: Deletar um personagem.

Naves Espaciais (Spaceships)

	•	POST /spaceships: Criar uma nova nave espacial.
	•	Body:
```json 
{ 
"name": "Nome da nave",
 "model": "Modelo da nave",
 "manufacturer": "Fabricante da nave",
 "passengerCapacity": 5 }
```
	•	GET /spaceships: Listar todas as naves espaciais.
	•	GET /spaceships/:id: Obter detalhes de uma nave espacial específica.
	•	PUT /spaceships/:id: Atualizar informações de uma nave espacial.
	•	Body:
```json 
{ "name": "Novo nome da nave",
 "model": "Novo modelo", "manufacturer":
"Novo fabricante", "passengerCapacity": 6 }
 ```
	•	DELETE /spaceships/:id: Deletar uma nave espacial.

Essas são as principais rotas da API para gerenciar a galáxia inspirada em Star Wars. Cada entidade possui rotas para criação, leitura, atualização e deleção, com autenticação exigida para operações de escrita e deleção.
