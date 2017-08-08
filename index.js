var loaderUtils = require('loader-utils');
var nullModule = 'module.exports = function() {return null}';

module.exports = function(content) {
  //cacheable
  this.cacheable && this.cacheable();

  //get query params
  var query = loaderUtils.getOptions(this) || {};
  var platform = query.platform || 'ios';
  console.log(platform);
  console.log(this.resourcePath);

  //如果当前的平台是ios，如果当前的模块以android.js结尾，返回null
  if (platform === 'ios') {
    if (this.resourcePath.indexOf('android.js') != -1) {
      return nullModule;
    }
  } else if (platform === 'android') {
    if (this.resourcePath.indexOf('ios.js') != -1) {
      return nullModule;
    }
  }

  //普通的模块不做处理
  return content;
};
