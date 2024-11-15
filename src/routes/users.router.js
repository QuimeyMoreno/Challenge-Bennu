import express from 'express';
import UserController from '../controller/users.controller.js';


const router = express.Router();

const {
    getUsers,
    getCount,
    createUser
} = new UserController

router.get('/', getUsers);

router.get('/count', getCount);

router.post('/', createUser);

export default router;
