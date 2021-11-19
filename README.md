# 📒 Summary

Tutorial: https://www.youtube.com/watch?v=WPz014v_Qho  
Github: https://github.com/Chawn/mern-todos  
Published URL: https://chawput-mern-todos.netlify.app/  

<br/>

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
npm init -y
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
- package.json  

**Add this to package.json**  
```
"type" : "module",  
"scripts": {  
    "start": "node index.js",  
    ...  
}
```  

**Try run server**  
```
node index.js
- or - 
nodemon index
```  
Open: http://localhost:5000
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
Our API Server: https://chawput-mern-todos.herokuapp.com/todos

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
  
หรือ Deploy บนเว็บ netlify โดยเลือก repository จาก github ได้เลย  
Client Project Url: https://chawput-mern-todos.netlify.app/
