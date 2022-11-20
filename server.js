// VIEW EXPRESS HANDLBARS
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// MODEL DB
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// CONTROLLERS
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = process.env.PORT || 51429;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// https://www.npmjs.com/package/express-handlebars
// this is done by default/ dan: Mod14 Day 1 video
// app.set('views', './views')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Fallback route 
app.get('*', (req, res) =>
  res.send(
    `INVALID ROUTE @: http://localhost:${PORT}`
  )
);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(
    `
    ☕☕☕☕☕

    Listening at http://localhost:${PORT}...

    ☕☕☕☕☕

    `));
});
