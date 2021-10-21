import app from './app';

const { SERVER_PORT } = process.env;


app.listen(SERVER_PORT, () => {
    console.log(`app listening on port ${SERVER_PORT}`)
});