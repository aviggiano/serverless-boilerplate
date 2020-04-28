# serverless-boilerplate
Serverless Boilerplate based on AWS Lambda/API Gateway and Node.js

## Setup

Start a mongodb database, e.g.

```
docker run -–name mongo –p 27017:27017 –d –t mongo
```

Start the development server

```
yarn
yarn start
```

Access the backend endpoint

```
curl -XPOST --data '{"email":"user@example.com"}' http://localhost:3000/local/users/
# {"_id":"5ea866a50ef23c5e5b532f2f","deleted":false,"email":"user@example.com","createdAt":"2020-04-28T17:23:49.521Z","updatedAt":"2020-04-28T17:23:49.521Z","__v":0}

curl http://localhost:3000/local/users/
# [{"deleted":false,"_id":"5ea866a50ef23c5e5b532f2f","email":"user@example.com","createdAt":"2020-04-28T17:23:49.521Z","updatedAt":"2020-04-28T17:23:49.521Z","__v":0}]
```
