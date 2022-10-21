const { connect, connection } = require('mongoose');
require("dotenv").config();

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

const connectionString =
  process.env.MONGODB_URI || process.env.DB_URI;
  // process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';
  // 'mongodb+srv://callasteven:4184Longview@cluster0.x8hemhd.mongodb.net/studentsDB?retryWrites=true&w=majority'

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
