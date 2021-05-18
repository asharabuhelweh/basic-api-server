# 
401 class 03 lab
# LAB - 03
## basic-api-server
### Author: As-har Abuhelweh

* [deployment for main branch ](https://ashar-basic-api-server.herokuapp.com/) .
* [submission PR](https://github.com/asharabuhelweh/basic-api-server/pull/1) .
* [tests report](https://github.com/asharabuhelweh/basic-api-server/actions) 
 
### Setup

#### `.env` requirements

- `PORT` - 4444

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns message

    ```

    'welcome in server.js :)';

     ```

   
    - Endpoint: `/api/v1/food`
  - get the food object

  ```

  
    {
        "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
        "data": {
            "name": "dress",
            "price": "88 JD"
        }
    }
  ```
- Endpoint: `/api/v1/food/3ec7d422-263b-4b21-bd17-f19fc7ca8700`
  - Get the food Objects based on id

  ```
   {
    "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
    "data": {
        "name": "dress",
        "price": "88 JD"
    }
  }

   ``` 
  

- Endpoint: `/api/v1/clothes/3ec7d422-263b-4b21-bd17-f19fc7ca8700`

  - Gets the updated clothes Object
  >  ``` 
         {  
        "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
        "data": {
        "name": "dress",
        "price": "150 JD"
              }
         }
          
       ```      
  
  


  - Endpoint: `/api/v1/clothes/food/3ec7d422-263b-4b21-bd17-f19fc7ca8700`
  - delete an specific abject based on id and return the other objects in db

  ```

    {
        "id": "d9178b6a-d879-4db8-b8b5-f980c725aa9a",
        "data": {
            "name": "jacket",
            "price": "50 JD"
        }
    }
Endpoint: anything else ..

Returns an error 404

Returns an Object

      
       ```
         {
           "status": 404,
        "message": "page not fond :("
         }

        ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`



 11 PM | Today 



