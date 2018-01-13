const assert = require('chai').assert;

describe('Search', () => {

    describe('sort search results', () => {
        const sort = require('../../sort');

        it('should return an array', () => {
            assert.typeOf(sort([]), 'array');
        });

        it('should order results lowest to highest', () => {
            const seedData = require('./seed-data');

            assert.deepEqual(sort(seedData), [1, 2, 3, 4, 5]);
        });
    });

    describe('should randomize search results', () => {
        const randomizer = require('../../randomize');

        it('should return an array', () => {
            assert.typeOf(randomizer([]), 'array');
        });

        it('should randomize elements within an array', () => {
            const seedData = require('./seed-data');
            const seedDataToTest = seedData.slice();

            assert.notDeepEqual(randomizer(seedData), seedDataToTest);
        });
    });
});
