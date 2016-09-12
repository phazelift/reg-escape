# reg-escape
Prepares a string to be used with new RegExp.

<br/>

```javascript

var regEscape= require( 'reg-escape' );

// this won't work
var regexp= new RegExp( '.,~!@#$%^&*()_=' );
console.log( regexp.test('.,~!@#$%^&*()_=') );
// false

// but this does
regexp= new RegExp( regEscape('.,~!@#$%^&*()_=') )
console.log( regexp.test('.,~!@#$%^&*()_=') );
// true

```

<br/>

###licence

MIT