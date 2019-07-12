import express from 'express';
import bodyParser from 'body-parser';
import users from '../models/users.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class UserController {
  static signup(req, res) {
    const { email, first_name, last_name, password, phoneNumber, address } = req.body;
    const isUserExist = users.find(u => u.email === req.body.email);
    if (isUserExist) {
      return res.status(409).send({
        status: 409,
        message: "user already exists",

      })
    }
    const user = {
      id: users.length + 1,
      email,
      first_name,
      last_name,
      phoneNumber,
      address,
      is_admin: false
    };


    if (user.error !== 'null') {
      const token = jwt.sign({ email: user.email }, process.env.secretKey);
      users.push(user);
      res.status(201).json({
        status: 201,
        token: token, data: user
      }
      );
    }

    else {
      return res.status(400).send({
        status: 400,
        error: user.error.details[0].message
      });
    }
  }

static signin(req, res) {
        const isUserExist = users.find(user => user.email === req.body.email && user.password === req.body.password);
        if (!isUserExist) {
            return res.status(400).send({
               status: 400, 
               error: "invalid user account",
               })
        }
     
        const token = jwt.sign({ email: isUserExist.email }, process.env.secretkey);
        if (isUserExist) {
            res.status(200).send({
                status: 200,
                token: token,
                data: isUserExist
            });
        }
        else {
            res.status(400).send({
                status: 400,
                message: "Invalid credentials"
            })
        }
      }


}

export default UserController;