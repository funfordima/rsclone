import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import clinicRouter from './routes/clinics';
import doctorRouter from './routes/doctors';
import articlesRouter from './routes/articles';
import categoryRouter from './routes/category';
import subcategoryRouter from './routes/subcategory';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/clinics', clinicRouter);
app.use('/doctors', doctorRouter);
app.use('/articles', articlesRouter);
app.use('/category', categoryRouter);
app.use('/subcategory', subcategoryRouter);

app.use(function(req, res, next) {
  res.json({
    statusCode: 404,
  })
});

app.use(function(err, req, res, next) {
  res.json({
    statusCode: 505,
    message:  err.message,
  })
});

export default app;
