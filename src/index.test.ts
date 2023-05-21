import request from 'supertest';
import app from './index';

test('No permite crear un usuario con nombre de usuario "admin"', async () => {
    const response = await request(app)
      .post('/api/user/create')
      .send({ username: 'kevin', email: 'admin@example.com' });
  
    expect(response.status).toBe(200);
    expect(response.body.message).not.toBe('El nombre de usuario no puede ser admin');
});