'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server', () => {
    it('should get 404 status', async () => {
      const response = await request.get('/loo');
      expect(response.status).toBe(404);
    });
  
    it('should get a welcome message', async () => {
      //arrange
      // let route = '/';
      //act
      const response = await request.get('/');
      //assert
      expect(response.status).toBe(200);
      expect(response.text).toBe('welcome in server.js :)');
    });

  
    it('wrong method', async () => {
      const response = await request.patch('/');
      expect(response.status).toEqual(404);
    });

    
});
        
  describe('api food test ', () => {
    let id;
    it('should create a new abject food on /food with method post', async () => {
        //arrange
        let food = {
            name: 'pizza',
          source:'italy'
        }
        //act
        const response = await request.post('/api/v1/food').send(food);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('pizza');
        expect(response.body.data.source).toEqual('italy');
        expect(response.body.id.length).toBeGreaterThan(0);

        id = response.body.id;
    });

    it('it should get data for food', async () => {
        const response = await request.get(`/api/v1/food`);
        expect(response.status).toEqual(200);
      });

      it('get a specific food on /api/v1/food/:id', async () => {
        const response = await request.get(`/api/v1/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('pizza');
        expect(response.body.data.source).toEqual('italy');

          
      });

    it('should update a food using put request', async () => {
        //arrange
        let updateFood = {
            name: 'burger',
            source: 'UK'
        };
        //act
        const response = await request.put(`/api/v1/food/${id}`)
            .send(updateFood);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('burger');
        expect(response.body.data.source).toEqual('UK');


    });

      it('it should to DELETE an specific food object on delete method', async () => {
        const response = await request.delete(`/api/v1/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(undefined);
      });

  });


  describe('api clothes test ', () => {
    let id;
    it('should create a new abject clothes on /clothes with method post', async () => {
        //arrange
        let clothes = {
            name: 'dress',
          price:'100JD'
        }
        //act
        const response = await request.post('/api/v1/clothes').send(clothes);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('dress');
        expect(response.body.data.price).toEqual('100JD');
        expect(response.body.id.length).toBeGreaterThan(0);

        id = response.body.id;
    });

    it('it should get data for clothes', async () => {
        const response = await request.get(`/api/v1/clothes`);
        expect(response.status).toEqual(200);
      });

      it('get a specific cloth on /api/v1/clothes/:id', async () => {
        const response = await request.get(`/api/v1/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('dress');
        expect(response.body.data.price).toEqual('100JD');

          
      });

    it('should update a clothes using put request', async () => {
        //arrange
        let updateClothes = {
            name: 'jacket',
            price: '50JD'
        };
        //act
        const response = await request.put(`/api/v1/clothes/${id}`)
            .send(updateClothes);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('jacket');
        expect(response.body.data.price).toEqual('50JD');


    });

    it('it should to DELETE an specific clothes object on delete method', async () => {
        const response = await request.delete(`/api/v1/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(undefined);
      });

  });
