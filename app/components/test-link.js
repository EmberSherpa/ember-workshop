import Ember from 'ember';

var isNone = Ember.isNone;

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['btn', 'btn-sm'],
  module: null,
  "test": null,
  target: '_blank',
  attributeBindings: ['href', 'target'],
  href: Ember.computed('module', 'testName', function(){
    var module = this.get('module');
    var test = this.get('test');
    if (isNone(module) || isNone(test)) {
      return;
    }
    return `/tests?testId=${generateHash(module, test)}`;
  })
});

// Based on Java's String.hashCode, a simple but not
// rigorously collision resistant hashing function
function generateHash( module, testName ) {
  var hex,
    i = 0,
    hash = 0,
    str = module + "\x1C" + testName,
    len = str.length;

  for ( ; i < len; i++ ) {
    hash  = ( ( hash << 5 ) - hash ) + str.charCodeAt( i );
    hash |= 0;
  }

  // Convert the possibly negative integer hash code into an 8 character hex string, which isn't
  // strictly necessary but increases user understanding that the id is a SHA-like hash
  hex = ( 0x100000000 + hash ).toString( 16 );
  if ( hex.length < 8 ) {
    hex = "0000000" + hex;
  }

  return hex.slice( -8 );
}
