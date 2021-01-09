import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import clinicRouter from './routes/clinics';
import doctorRouter from './routes/doctors';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/clinics', clinicRouter);
app.use('/doctors', doctorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    statusCode: 404,
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    statusCode: 505,
    message:  err.message,
  })
});

export default app;
