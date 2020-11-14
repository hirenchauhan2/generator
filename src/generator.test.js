import test from 'tape';
import Generator from './generator';

test('constructor sets required properties', async (t) => {
  t.plan(3);

  const generator = new Generator('foo');

  t.equal(generator.dirname, 'foo');
  t.equal(generator.plugins.length, 0);
  t.equal(typeof generator.ctx, 'object');
});

test('source sets _source properties', async (t) => {
  t.plan(2);

  const generator = new Generator('foo');

  generator.source('bar');
  t.equal(generator._source, 'foo/bar');

  generator.source();
  t.equal(generator._source, 'foo');
});

test('templates sets _templates properties', async (t) => {
  t.plan(2);

  const generator = new Generator('foo');

  generator.templates('bar');
  t.equal(generator._templates, 'foo/bar');

  generator.templates();
  t.equal(generator._templates, 'foo');
});