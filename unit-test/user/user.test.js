const chai = require('chai');
const expect = chai.expect;
const User = require('./user');
describe('user creation test',()=>{
    beforeEach(()=>{

    });
    afterEach(()=>{

    })
    it('should throw error if email ,age and name are empty',()=>{
        const usr = new User();
        usr.validate(err => {
            expect(err.errors.name).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.age).to.not.exist;
            
          });
    })
})