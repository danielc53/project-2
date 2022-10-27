const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const dotenv = require('dotenv');
const postRouter = require('./controllers/api/postRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//gets the register page when the server is started
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/posts', postRouter)


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});