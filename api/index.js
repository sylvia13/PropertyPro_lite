import express from'express';

import bodyParser from 'body-parser';
import userroutes from './routes/userroute';
import property from './routes/propertyroute';


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/v1/auth', userroutes);
app.use('/api/v1/', property);
const port = process.env.PORT || 1000;


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
export default app;