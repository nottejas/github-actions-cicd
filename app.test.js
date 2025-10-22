const request = require('supertest');
const { app, server } = require('./app');

describe('API Tests', () => {
    afterAll((done) => {
        server.close(done);
    });

    test('GET / should return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Welcome to CI/CD Demo App!');
    });

    test('GET /health should return status UP', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('UP');
    });

    test('GET /api/greet/:name should return greeting', async () => {
        const response = await request(app).get('/api/greet/John');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Hello, John!');
    });
});