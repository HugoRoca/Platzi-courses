# Usage

```js
const setupDatabase = require("module-db");
setupDataBase(config)
  .then((db) => {
    const { Agent, Metric } = db;
  })
  .catch((err) => {
    console.error(err);
  });
```
