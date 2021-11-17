# 📒 Step by Step

Tutorial: https://www.youtube.com/watch?v=WPz014v_Qho

## Create Folder
- client
- server   

<br/>

## Setup Client 
```console
cd client
npx create-react-app
```
**Client folder structure**
- index.js
- App.js
- components
  - Preloader.js
- api
  - index.js
- functions
  - index.js
- .gitignore

<br/>

## Setup Server
```console
cd server
npm install cors express mongoose nodemon dotenv
```
**Server folder structure**
- index.js
- controller
  - todos.js
- models
  - todos.js
- routes
  - todos.js
- .env
- .gitignore
- Procfile

<br/>


# 🚀 Deploy
## Deploy Server (heroku)
- Create heroku app (name: chawput-mern-todos)

```
cd server
heroku git:remote -a chawput-mern-todos
git add .
git commit -am "make it better"
git push heroku master
```

<br/>

## Deploy Client (netlify)
- edit src/api/index.js
change this 
```
const url = "http://localhost:5000/todos";
```
to..
```
const url = "https://chawput-mern-todos.herokuapp.com/todos"
```

Install Netlify CLI
```
npm install netlify-cli -g
npm install netlify-cli --save-dev
netlify login
```


Deploy Client
```
cd client
npm run build
netlify deploy
```
Publish directory ./build