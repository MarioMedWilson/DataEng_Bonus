import app from "./app.js";
import createTables from "./database/createTables.js";


const port = process.env.PORT || 3001;


// createTables();

app.listen(port, () => {
  console.log(`Api listening on port ${port}!`);
});
