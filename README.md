# CTK Security Workshop
CTK Workshop about DevOps and Security made by Sarosh and Sebastian

# Frontend


# Backend
1. Navigate into directory and `npm install`
2. `node app.js`
3. Server will be started on port 4000 (localhost)

## Endpoints
### `/api`
### GET
#### Response: `{'message' : 'ello dis is kek!'}`

### `/api/login`
#### POST - Requires JSON body format
```js
{
  //TODO
}
```
### `/api/create`
### POST
####  Requires: JSON body format
```js
{
  'username' : '...',
  'password' : '...'
}
```
#### Description:
Will create a new user account with the given username and password. A unique id will be generated as well as an empty todo array.
The unique id will be sent back as token. Disclosure: This is very unsafe and luckily won't be used in production, except only for this security workshop.
No usernames and passwords will be saved anywhere once the workshop is done.
