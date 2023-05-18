const server = require('./src/app.js');
const {saveApiData} = require('./src/controllers/saveApiData.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true}).then(async() => {
  console.log('Databased connected');
  await saveApiData();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
