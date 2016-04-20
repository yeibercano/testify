var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
      todo.init.should.be.a('function');
      todo.setup.should.be.a('function');
      expect(todo).to.have.property('init');
      assert.typeOf(todo, 'object', 'todo is an object - suckah!'); 
    });
  });
});

describe('the todo.util methods', function() {

  it('should have all the necessary methods', function() {
    expect(todo.util.getUniqueId()).to.equal(1);
    expect(todo.util.getUniqueId()).not.to.equal(3);
    expect(Object.keys(todo.util)).to.have.length(3);
  })
});
