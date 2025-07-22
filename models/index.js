import { Sequelize } from 'sequelize';
import config from '../config/config'; development;

const sequelize = new Sequelize(config);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Joke = require('./joke')(sequelize, Sequelize);

export default db;