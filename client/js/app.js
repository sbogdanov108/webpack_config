/**
 * Created by sb on 06.05.2016.
 */

// альтернативный вариант конфига для webpack
const view = require( 'raw!jade-html?pretty=true!../views/index.jade' );
document.body.innerHTML = view;

require( '../style/stylus/main.styl' );

if( __DEV__ )
  console.log( 'dev mode' );