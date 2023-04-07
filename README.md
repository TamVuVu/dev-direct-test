# dev-direct-test

Tech used:
FE: Redux, Redux-thunk, ...
BE: NestJs, Sequelize, MySQL, ...

Guideline steps:

1. npm install in both dev-direct-client and dev-direct-server
2. Install mysql
3. npm run dev to run both client and server, client run in port 3000 and server run in port 4000
4. Create schema dev_direct in mysql
5. Run api get localhost:4000/sync-db to init database
6. Done
