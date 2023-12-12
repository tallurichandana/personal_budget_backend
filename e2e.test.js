const supertest = require('supertest');
const app = require('./app');



describe("POST /register", () => {
    describe("given all the details", () => {
        test("should respond with a 200 status", async () => {
            const response = await supertest(app).post('/register').send({
                 username: 'try',
                email: 'try@example.com', 
                password: 'try'
            })
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('User inserted successfully');
        })
    })
})

