const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();
const port = process.env.PORT || 4040;

mongoose.connect('mongodb://localhost:27017/customerbase', {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(port, (err) => {
    console.log(`Servering running on port ${port}`);
});