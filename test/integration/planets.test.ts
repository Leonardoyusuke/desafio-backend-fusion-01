import { connectDb,disconnectDB } from '../../src/database/database';

import request from 'supertest';
import app from '../../src/app';
import jwt from "jsonwebtoken";


let planetId: number;
let authToken: string;


beforeAll(async () => {
    authToken = jwt.sign(
        {
            id: 3,
            name: 'Luke Skywalker',
        },
        process.env.SECRET_JWT as string 
    );

});

describe('Planets Route', () => {
  it('should create a new planet', async () => {
    const response = await request(app)
      .post('/planets')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: 'Tatooine',
        climate: 'arid',
        terrain: 'desert',
        starSystemId: 1
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Tatooine');
    planetId = response.body.id;
  });

  it('should list all planets', async () => {
    const response = await request(app).get('/planets');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a planet by ID', async () => {
    const response = await request(app).get(`/planets/${planetId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', planetId);
    expect(response.body.name).toBe('Tatooine');
  });

  it('should update a planet', async () => {
    const response = await request(app)
      .put(`/planets/${planetId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({ name: 'Tatooine Updated', climate: 'arid', terrain: 'desert' });
    
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Tatooine Updated');
  });

  // Teste para o endpoint DELETE /planets/:id
  it('should delete a planet', async () => {
    const response = await request(app)
    .delete(`/planets/${planetId}`)
    .set('Authorization', `Bearer ${authToken}`);
    
    expect(response.status).toBe(204);
  });

  // Verifica se o planeta foi realmente deletado
  it('should return 404 for a deleted planet', async () => {
    const response = await request(app).get(`/planets/${planetId}`);
    expect(response.status).toBe(404); // Não encontrado
  });
});