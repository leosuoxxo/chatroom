const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

mongoose.connect('mongodb://Leo:whoknows@ds249005.mlab.com:49005/leo-chatroomdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected!');
});


// MongoClient.connect('mongodb://Leo:whoknows@ds249005.mlab.com:49005/leo-chatroomdb', (err, db) => {
//   const cursor = db.collection('user').find({
//     Nickname: 'Leo'
//   });
//   cursor.each((error, doc) => {
//     console.log(doc);
//     db.close();
//   });
//   if (err) throw err;
// });
