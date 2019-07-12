import chai from 'chai';
import chaiHttp  from 'chai-http';
import app  from '../index';

chai.should();
chai.use(chaiHttp);
describe('Signup Test', () => {
  
  it('it should create a user account', (done) => {
    const data = {
       email:'syltt@prolite.com',
       first_name:'Sylvia', 
       last_name:'Gasyll',
       password:'Bb2135', 
       phoneNumber:'8988340920',
       address:'Kigali' 
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data)
      .end((err, res) => {
        res.should.have.status(201);

        done();
      });
  });
  it('it should not create a user account when no email provided', (done) => {
    const data = {
       email:'',
       first_name:'Sylvia', 
       last_name:'Gasyll',
       password:'Bb2135', 
       phoneNumber:'8988340920',
       address:'Kigali' 
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data)
      .end((err, res) => {
        res.should.have.status(400);

        done();
      });
  });


  
  it('it should not login a user without account', (done) => {
    const data = {
       email:'syl@prolite.com',
       password:'Bb2135'
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(data)
      .end((err, res) => {
        res.should.have.status(400);

        done();
      });
  });
})