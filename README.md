# Test_Redis

This project explores the use of Redis for user permission management. Below are the steps to start the test project.

## Setting Up Redis

Starting the Redis server:
- Open your first terminal window.
- Run the `redis-server` command. This action launches the Redis server on your machine.

## Launching the Application
Launching the Application

Starting the Application:
- Open a second terminal window.
- Run `npm i`
- Run the application with the command `npm start`. This script, defined in the package.json.

## Key Features
- Data Management with Redis (`services/redisService.ts`):
The `services/redisService.ts` file encapsulates the logic necessary for Redis server communication, including caching and retrieving data.
- Permission Verification (`middlewares/middlewarePermission.ts`):
The `middlewarePermission.ts`is used to check access permissions on different application routes. It allows you to check if the current user has the necessary authorizations.
