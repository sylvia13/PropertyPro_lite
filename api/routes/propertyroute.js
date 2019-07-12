import express from 'express';
import property from '../controllers/propertycontrollers';
import validateProperty from "../validations/propertyValidation";

const { validateProperties } = validateProperty;
const router = express.Router();

router.post('/property', validateProperties ,property.createProperty);
s
export default router;