import config from '../../config/config.js';

const setCache = (req, res, next) => {
  const period = config.cache.cachePeriod;

  if (req.method == 'GET') {
    res.set('Cache-Control', `public , max-age= ${period}`);
  } else {
    // for the other requests set strict no caching parameters
    res.set('Cache-Control', `no-store`);
  }

  next();
};

export { setCache };
