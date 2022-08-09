
import app from "../app";
import request from 'supertest';
import connectDB from '../database/connection.js';
import mongoose from 'mongoose';

describe('TEST all methods from /api/cows (GET/POST/PUT)', () => {

    beforeAll((done) => {
        done();
    });

    afterAll((done) => {
        mongoose.connection.close();
        done();
    });

    describe('TEST /GET methods', () => {
        

        test("/api/cows should respond 200 status code",
            async () => {
                await connectDB();
                const response = await request(app).get('/api/cows').send();
                expect(response.status).toBe(200);
            })
        
        test('/api/cows/:id should response 200 and return cow data',
            async () => {
                await connectDB();
                let id = '62ee95ea8cd8347ff04e6c60';
                const response = await request(app).get(`/api/cows/${id}`).send();
                expect(response.body[0]._id).toEqual('62ee95ea8cd8347ff04e6c60');
            })
    })

    describe('TEST /POST method', () => {
        test("/api/cows POST should fail because of lack of idSenasa",
            async () => {
                let auxCow = {
                    "typeAnimal": "Vaquillona",
                    "weight": 26,
                    "paddockName": "Potrero3",
                    "typeDisp": "COLLAR",
                    "numDisp": "ABC12378"
                }
                await connectDB();
                const response = await request(app).post('/api/cows').send(auxCow);
                expect(response.status).toBe(400);
                expect(response.body.message).toBe('El ID Senasa debe contener 16 caracteres.');
            })
        
        test("/api/cows POST should pass (200)",
            async () => {
                let auxCow = {
                    "idSenasa": "unidcon16charsss",
                    "typeAnimal": "Vaquillona",
                    "weight": 100,
                    "paddockName": "Potrero 1",
                    "typeDisp": "COLLAR",
                    "numDisp": "ABC12378"
                }
                await connectDB();
                const response = await request(app).post('/api/cows').send(auxCow);
                expect(response.status).toBe(200);
                expect(response.body.message).toBe('Cow saved');
            })
    })
    
    describe('TEST /PUT method', () => {
        test("/api/cows/:id PUT should fail because id doesnt exist",
            async () => {
                let falseId = '123e95ea8cd8347ff04e6123';
                let auxCow = {
                    "idSenasa": "unidcon16charsss",
                    "typeAnimal": "Vaquillona",
                    "weight": 100,
                    "paddockName": "Potrero editado",
                    "typeDisp": "COLLAR",
                    "numDisp": "ABC12378"
                }
                await connectDB();
                const response = await request(app).put(`/api/cows/${falseId}`).send(auxCow);
                expect(response.status).toBe(400);
                expect(response.body.message).toBe('Cow doesnt exist.');
            })

        test("/api/cows/:id PUT pass and edit properly",
            async () => {
                let existentId = '62ee95ea8cd8347ff04e6c60';
                let auxCow = {
                    "idSenasa": "unidcon16charsss",
                    "typeAnimal": "Vaquillona",
                    "weight": 100,
                    "paddockName": "Potrero editado",
                    "typeDisp": "COLLAR",
                    "numDisp": "ABC12378"
                }
                await connectDB();
                const response = await request(app).put(`/api/cows/${existentId}`).send(auxCow);
                expect(response.status).toBe(200);
                expect(response.body.message).toBe('Cow Updated.');
            })
    })
    
    describe('TEST /delete method', () => {
        test("/api/cows/:id DELETE should fail",
            async () => {
                let falseId = '123e95ea8cd8347ff04e6123';
                await connectDB();
                const response = await request(app).delete(`/api/cows/${falseId}`).send();
                expect(response.status).toBe(400);
                expect(response.body.message).toBe('Cow doesnt exist.');
            })
    })
})