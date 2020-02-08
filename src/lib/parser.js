import parse from 'csv-parse/lib/sync';

const parseSync = (input, delimiter=',') => {
  const result = parse(input, {
    delimiter: delimiter
  });
  return result;
};

export {
  parseSync
};
