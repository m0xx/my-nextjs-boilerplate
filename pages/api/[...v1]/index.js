import router from '../../../_api/router';

export default async function ApiV1(req, res) {
  router.lookup(req, res);
}
