const config = require('generator-liferay-fragments').getBundlerConfig();

module.exports = {
  ...config,
  imports: {
    ...config.imports,
    __GLOBAL_CHARTIST__: {
      chartist: '*',
    }
  }
};
