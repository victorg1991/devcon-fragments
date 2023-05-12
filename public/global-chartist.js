const moduleName = '__GLOBAL_CHARTIST__$chartist';
Liferay.Loader._config.addModule(moduleName);

Liferay.Loader.define(moduleName, (...args) => {
  console.log({args});
});
