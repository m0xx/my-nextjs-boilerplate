const getVersion = {
  method: 'GET',
  path: 'versions',
  auth: false,
  handler: async function getVersion(req, res) {
    res.status(200).json({ version: '1.0.0' });
  }
};

export default [getVersion];
