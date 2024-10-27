import { connectDb,disconnectDB } from '../../src/database/database';

import request from 'supertest';
import app from '../../src/app';

let authToken: string;

beforeAll(async () => {
  connectDb()
});

afterAll(async () => {
  await disconnectDB();
});

describe('Characters Route', () => {
  
  let characterId: string;

  it('should create a new character', async () => {
    const response = await request(app)
      .post('/characters')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: 'Yoda',
        species: 'Human',
        affiliation: 'Rebel Alliance',
        homePlanet: 'Tatooine',
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');

    authToken = response.body.token
    characterId = response.body.id;
  });

  it('should list all characters', async () => {
    const response = await request(app)
      .get('/characters')
      .set('Authorization', `Bearer ${authToken}`);
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a character by ID', async () => {
    const response = await request(app)
      .get(`/characters/${characterId}`)
      .set('Authorization', `Bearer ${authToken}`);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', characterId);
    expect(response.body.name).toBe('Yoda');
  });

  it('should update a character', async () => {
    const response = await request(app)
      .put(`/characters/${characterId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({ name: 'Luke Skywalker Updated' });
    
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Luke Skywalker Updated');
  });

  // DELETE /characters/:id - Deletar um personagem
  it('should delete a character', async () => {
    const response = await request(app)
      .delete(`/characters/${characterId}`)
      .set('Authorization', `Bearer ${authToken}`);
    
    expect(response.status).toBe(204); // Sucesso, mas sem conteúdo
  });

  // Verifica se o personagem foi realmente deletado
  it('should return 404 for a deleted character', async () => {
    const response = await request(app)
      .get(`/characters/${characterId}`)
      .set('Authorization', `Bearer ${authToken}`);
    
    expect(response.status).toBe(404); // Personagem não encontrado
  });
});