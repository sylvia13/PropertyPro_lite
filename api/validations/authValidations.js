const names = /^[A-Za-z ]{1,}$/;
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const address = /^[A-Za-z0-9]{2,}$/;

class validateUser {
  static validateSignup(req, res, next) {
    try {
      req.body.first_name = req.body.first_name.trim();
      req.body.last_name = req.body.last_name.trim();
      req.body.email = req.body.email.trim();
      req.body.address = req.body.address.trim();
      req.body.password = req.body.password.trim();
      req.body.phoneNumber = req.body.phoneNumber.trim();

      if (!email.test(req.body.email)) throw new Error('invalid email');
      if (!((req.body.password).length>5)) throw new Error('invalid password');
      if (!((req.body.phoneNumber).length==10)) throw new Error('invalid phoneNumber');
      if (!names.test(req.body.first_name)) throw new Error('invalid name');
      if (!names.test(req.body.last_name)) throw new Error('invalid names');
      if (!address.test(req.body.address)) throw new Error('invalid address');
      next();
    } catch (err) {
      res.status(400).json({
        status: 400,
        error: err.message
      });
    }
  }

  static validateLogin(req, res, next) {
    try {
      req.body.email = req.body.email.trim();
      req.body.password = req.body.password.trim();

      if (!email.test(req.body.email)) throw new Error('invalid email');
      if (!((req.body.password).length>0)) throw new Error('invalid password');
      next();
    } catch (err) {
      res.status(400).json({
        status: 400,
        error: err.message,
      });
    }
  }
}

export default validateUser;