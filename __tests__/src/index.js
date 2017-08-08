var View = require('./view.ios');
var AndroidView = require('./view.android');

console.log(__platform__ == 'ios' ? View : AndroidView);
