import test from 'tape';
import {
  getFrequency,
  getMode,
  aggregate
} from 'utils/aggregate-utils';
import {AGGREGATION_TYPES} from 'constants/default-settings';

test('AggregateUtils - GetFrequency', t => {

  t.deepEqual(
    getFrequency([2, 1, 2, 1]),
    {
      1: 2,
      2: 2
    },
    'Should compute frequency corerctly'
  );

  t.deepEqual(
    getFrequency([]),
    {},
    'Should return an empty object'
  );

  t.end();
});

test('AggregateUtils - GetMode', t => {

  t.deepEqual(
    getMode([2, 1, 2, 1]),
    '1',
    'should return 1 as Mode'
  );

  t.end();
});

test('AggregateUtils - aggregate', t => {

  const data = [1, 2, 3, 1, 2, 3, 4, 3];
  const results = [
    8,
    2.375,
    4,
    1,
    2.5,
    1.0606601717798212,
    19,
    1.125,
    '3',
    8
  ];
  Object.keys(AGGREGATION_TYPES).map((technique, index) => {
    t.equal(
      aggregate(data, technique),
      results[index],
      `Should compute the right aggregation using ${technique} - ${index}`
    )
  });

  t.end();

});
