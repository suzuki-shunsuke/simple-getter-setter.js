mocha.setup('bdd');

document.addEventListener('DOMContentLoaded', () => {
  describe('prop', () => {
    it('prop()() must be undefined', () => {
      const name = prop();
      chai.expect(name()).to.be.undefined;
    });
    it('prop("foo")() must be "foo"', () => {
      const name = prop('foo');
      chai.expect(name()).eql('foo');
    });
    it('setter must return the set value.', () => {
      const name = prop();
      chai.expect(name('bar')).eql('bar');
    });
    it('getter-setter must have .toJSON method.', () => {
      const name = prop('foo');
      chai.expect(JSON.stringify(name)).eql('"foo"');
    });
  });

  mocha.run();
});
