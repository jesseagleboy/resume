const express = require('express');
const app = express();

app.use(express.static('.'));


const PORT = process.env.PORT || 3003;


app.listen(PORT, () => {
    console.log(`This is listening on PORT:${PORT}.`);
});