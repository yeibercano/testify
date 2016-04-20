var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
      todo.init.should.be.a('function');
      todo.setup.should.be.a('function');
      expect(todo).to.have.property('setup');
    });
  });
});

describe('the todo.util methods', function() {
});
