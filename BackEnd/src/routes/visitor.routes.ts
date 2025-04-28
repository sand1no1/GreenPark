import express from 'express';
import { VisitorHandler } from '../handlers/visitor.handler';
import { VisitorController } from '../controllers/visitor.controller';
import { FakeVisitorService } from '../db/fake/fakeVisitorService';

const router = express.Router();

const fakeService = new FakeVisitorService();
const visitorController = new VisitorController(fakeService);
const visitorHandler = new VisitorHandler(visitorController);

router.post('/login', visitorHandler.login.bind(visitorHandler));
router.get('/visitor', visitorHandler.getVisitor.bind(visitorHandler));

export default router;