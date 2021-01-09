import { Router } from 'express';

const router = Router();

router.get('/', function(req, res, next) {
  res.json([]);
});

router.get('/:id', function(req, res, next) {
  res.json([]);
});

router.post('/', function(req, res, next) {
  res.json([]);
});

router.post('/:id', function(req, res, next) {
  res.json([]);
});

export default router;