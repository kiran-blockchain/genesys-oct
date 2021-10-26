const { expect } = require('chai');
const { addCallback,addPromise} = require('./callback');

describe('UnitTesting callback', () => {
    it('should add two numbers in a callback', () => {
            const myCallback  = (err,result)=>{
                expect(err).to.not.exist();
                expect(result).to.equal(3);
            }
           addCallback(1, 2, myCallback);
    });
    it('should add with a promise cb', (done) => {
        addPromise(1, 2).then(result => {
          expect(result).to.equal(3);
          done();
        }).catch(ex => {
          done(ex);
        });
      });
  
      it('should test a promise with return', () => {
        return addPromise(1, 2).then(result => {
          expect(result).to.equal(3);
        });
      });
});