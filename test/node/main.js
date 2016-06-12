'use strict';

const chai = require('chai');
const mocha = require('mocha');

const prop = require('../../src/main');

mocha.describe('prop', () => {
  mocha.it('prop()() must be undefined', () => {
    const name = prop();
    chai.expect(name()).to.be.undefined;
  });
  mocha.it('prop("foo")() must be "foo"', () => {
    const name = prop('foo');
    chai.expect(name()).eql('foo');
  });
  mocha.it('setter must return the set value.', () => {
    const name = prop();
    chai.expect(name('bar')).eql('bar');
  });
  mocha.it('getter-setter must have .toJSON method.', () => {
    const name = prop('foo');
    chai.expect(JSON.stringify(name)).eql('"foo"');
  });
});
