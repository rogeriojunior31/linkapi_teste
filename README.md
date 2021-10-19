# LinkApi Test 

## What does it do?
This service do an integration between two platforms:
* [Pipedrive](https://www.pipedrive.com/)
* [Bling](https://www.bling.com.br/)

## Responsibility
This service is responsible for filtering deals with status won and inserting into the bling platform and then saved it into a mongodb database. Providing a route with consolidated report every 24 hours by date.

## Development

#### Pre-requisites:
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Yarn](https://yarnpkg.com/)



# How to run
To run the application make sure you have both `NodeJS` and `Yarn` installed on your machine.

Run the yarn command on terminal for install all dependencies:
```bash
yarn
```


Then run the application:
```bash
yarn start
```

If everyt`ing's working you should see the following response
when the application running on http://localhost:3333/ or on the port defined in the .env file.