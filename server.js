import express, { urlencoded } from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());

app.use(urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('oli ');
})

app.listen(port, () =>{
    console.log('port'+port);
})
