const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', (error) => (console.log(error)));
  db.once('open', () => console.log('Database connected!'));
}

module.exports = connectToDatabase;
