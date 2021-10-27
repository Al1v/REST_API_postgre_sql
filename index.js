const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const useerRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');

app.use('/api', useerRouter);
app.use('/api', postRouter);



app.listen(PORT, () => {
    console.log('server is running');
});






