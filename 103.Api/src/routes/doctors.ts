import { Router } from 'express';
//import { v4 as uuid } from 'uuid';
import * as storage from '../storage/mongoDoctors';


const router = Router();

router.get('/', async (req, res, next) => {
  const list = await storage.listAll();
  res.json(list);
});

router.get('/:id', async (req, res, next) => {
  const item = await storage.getById(req.params['_id']);


  res.status(item ? 200 : 404)
      .json(item ?? {
        statusCode: 404
      });
});

router.post('/', async (req, res, next) => {
  //const id = uuid();
  const { body } = req;
 // body.id = id;

  const newBody = await storage.create(body);
  res.json(newBody);
});

router.put('/:id', async (req, res, next) => {
  const { body } = req;
  const newBody = await storage.update({
    ...body,
    id: req.params['_id']
  });
  res.json(newBody);
});

router.delete('/:id', async (req, res, next) => {
  await storage.remove(req.params['_id']);
  res
    .status(404)
    .json(null);
});


export default router;