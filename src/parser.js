import parse from 'csv-parse/lib/sync';

const parseSync = (input) => {
  const result = parse(input, {});
  return result;
}

export {
  parseSync
}
