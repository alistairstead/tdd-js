describe('calculator', function () {

  var should = chai.should();

  it('should be defined', function (done) {
    Calculator.should.be.defined;
    done();
  });

  it('should return 0 with 0 arguments', function (done) {
    Calculator.add().should.equal(0);
    done();
  });

  it('should return the bare number', function (done) {
    Calculator.add('4').should.equal(4);
    done();
  });

});
