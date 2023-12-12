const request = require('supertest');
const app = require('./app'); 

describe('POST /register', () => {
  test('It should respond with 200 status for successful user register', async () => {
    const newUser = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };

    const response = await request(app).post('/register').send(newUser);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "User inserted successfully" });
  });

  test('It should handle errors and respond with 500 failed register', async () => {
    
    const incompleteUser = {
      username: 'try',
      email: 'try@example.com'
      
    };

    const response = await request(app).post('/register').send(incompleteUser);
    expect(response.statusCode).toBe(500);
  });
});
