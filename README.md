# 
401 class 03 lab
# LAB - 03
## basic-express-server
### Author: As-har Abuhelweh

* [deployment for main branch ](https://ashar-basic-express-server.herokuapp.com/) .
* [submission PR](https://github.com/asharabuhelweh/basic-express-server/pull/4) .
* [tests report](https://github.com/asharabuhelweh/basic-express-server/actions) .
 
### Setup

#### `.env` requirements

- `PORT` - 5000

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns message

    ```

    'welcome in server.js :)';

    ```
    - Endpoint: `/bad`
   Returns an Object
  
```js{
"status": 500,
"message": "something went wrong!",
"route": "/bad",
}
````

   
     - Endpoint: `/person`
  - Returns an Object

    ``` 
         { 
     "name": "ashar"
       }
       ```

      Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

    ```

    {
        "status": 404,
        "message": "page not fond :("
    }

    ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`



 8:50 PM | Today 
