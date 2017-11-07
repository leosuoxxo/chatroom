const { MongoClient } = require('mongodb');

// const { Server } = mongo;
// const Database = mongo.Db;
//
// const server = new Server('ds013898.mlab.com', 13898, { auto_reconnect: true });
// const db = new Database('leo-chatroomdb', server);

MongoClient.connect('mongodb://Leo:whoknows@ds249005.mlab.com:49005/leo-chatroomdb', (err, db) => {
  const cursor = db.collection('user').find({
    Nickname: 'Leo'
  });
  cursor.each((error, doc) => {
    console.log(doc);
    db.close();
  });
  if (err) throw err;
});
