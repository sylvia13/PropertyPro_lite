const price = /^[+-]?([0-9]*[.])?[0-9]+/;
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const address = /^[A-Za-z0-9]{2,}$/;
const state = /^[A-Za-z]{1,}$/; 
const type = /^[a-zA-Z0-9]{1,}/

class validateProperty {
  static validateProperties(req, res, next) {
    try {
      req.body.state = req.body.state.trim();
      req.body.city = req.body.city.trim();
      req.body.email = req.body.email.trim();
      req.body.address = req.body.address.trim();
      req.body.price = req.body.price.trim();
     

      if (!email.test(req.body.email)) throw new Error('invalid email');
      if (!state.test(req.body.state)) throw new Error('invalid state');
      if (!price.test(req.body.price)) throw new Error('invalid price');
     if ((req.body.status)&&(req.body.status)!="available"&&(req.body.status)!="sold") throw new Error('invalid status');
      if (!address.test(req.body.address)) throw new Error('invalid address');
      if (!type.test(req.body.type)) throw new Error('invalid type');
      next();
    } catch (err) {
      res.status(400).json({
        status: 400,
        error: err.message
      });
    }
  }
}

export default validateProperty;