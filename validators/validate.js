import { validatorsResult } from "express-validator";
import { ValidationError } from "../errors/validation.js";

/* 
*validate the request body using express-validators
*This middleware checks validation results after validattirs have run 
*/


export const validate = (req, res, next) => {
    const errors = validatorsResult(req);
    if(!errors.isEmpty()){
        return next(new ValidationError("Validation failed", errors.array()));
    }   
    next();
};