export default () => ({
  databaseUrl:
    process.env.NODE_ENV === 'test'
      ? process.env.MONGODB_URI_TEST
      : process.env.MONGODB_URI,
});
