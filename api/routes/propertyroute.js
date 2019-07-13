import express from 'express';
import property from '../controllers/propertycontrollers';
import validateProperty from "../validations/propertyValidation";
import { lookupService } from 'dns';

const { validateProperties } = validateProperty;
const router = express.Router();

router.post('/property', validateProperties ,property.createProperty);
router.delete('/property/:id', property.deleteProperty);
export default router;
