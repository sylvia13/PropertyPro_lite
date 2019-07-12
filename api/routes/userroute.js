import express from 'express';
import user from '../controllers/userscontroller';
import validateUser from '../validations/authValidations';
const router = express.Router();

const { validateSignup } = validateUser;
const { validateLogin } = validateUser;
router.post('/signup', validateSignup, user.signup);
router.post('/signin', validateLogin, user.signin);

export default router; 

  