/* eslint-env node, mocha */
'use strict';
const assert = require('assert');
const metalsmith = require('metalsmith');
const rm = require('rimraf').sync;
const equal = require('assert-dir-equal');

const removeEmptyTags = require('../');

describe('metalsmith-remove-empty-tags', () => {
	beforeEach(() => {
		rm('/test/fixtures/build');
	});

	it('should remove empty paragraphs', done => {
		metalsmith('test/fixtures')
			.use(removeEmptyTags(['p']))
			.build((err, files) => {
				if (err) {
					return done(err);
				}
				assert(files);
				equal('test/fixtures/expected', 'test/fixtures/build');
				done();
			});
	});
});
