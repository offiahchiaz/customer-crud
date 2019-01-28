const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();
const port = process.env.PORT || 4040;

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(port, (err) => {
    console.log(`Servering running on port ${port}`);
});