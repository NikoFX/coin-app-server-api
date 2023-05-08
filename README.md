# Overview
Coins App API is a RESTful web service that provides access to a collection of coins of different countries. The API allows developers to retrieve coin data using GET requests with various search queries.

## Tools
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

- npm
- node js
- express JS
- mysql
- nodemon
- cors
- dotenv
- body-parser




## Development setup
To use this API application, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can run the following commands to get started:

```
npm install
nodemon index
```

GET "/api/search"
The endpoint allows users to retrieve list of coins. To retrieve a collection, send a GET request to "collection/:id", where :id is the ID of the collection you want to retrieve.

Example request body:

```
{
 "title": "My collection",
 "movies": [
 "t3248924",
 "t4450678",
 "t7709609"
 ]
}
```

GET "/collection/:id"
This endpoint allows users to retrieve a specific collection by received ID. To retrieve a collection, send a GET request to "collection/:id", where :id is the ID of the collection you want to retrieve.

Example response:

```
{
    "id": 51,
    "title": "My collection",
    "movie": [
        "tt0068646",
        "tt0098019"
    ]
}
```

## Meta

 Nijat Gurbanov

- Github: [github.com/NikoFX](https://github.com/NikoFX)
- Twitter: [Nijat Gurbanov](https://twitter.com/)
- Linkedin: [linkedin.com/in/nijat-gurbanov-dev](https://www.linkedin.com/in/nijat-gurbanov-dev/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
