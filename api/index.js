import express from'express';

import bodyParser from 'body-parser';
import userroutes from './routes/userroute';


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/v1/auth', userroutes);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
module.exports=app;