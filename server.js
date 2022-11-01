const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// Import express-session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const dotenv = require('dotenv');
const postRouter = require('./controllers/api/postRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3600000,
    httpOnly: true,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//gets the register page when the server is started
//register route in homeroutes is not needed because this will serve up the index
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/posts', postRouter)


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});