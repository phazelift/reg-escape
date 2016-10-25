# reg-escape
Escapes special characters in a string so it can be used with RegExp


###usage

>install: `npm install --save reg-escape`

---

reg-escape inserts escape characters before every RegExp special character in a given string so it can be used to test against in a regular expression.

```javascript

var regEscape= require( 'reg-escape' );

var passwordCharacters= "~!@#$%^&*()_+|}{][\":?><`1234567890-=qwertyuiopasdfghjkl;'zxcvbnm,./";

// define passwords that can only exist of passwordCharacters,
// minimal 8, maximum 20 chars
var passwordLegit= new RegExp( '^['+ regEscape(passwordCharacters)+ ']{8,20}$' );
console.log( passwordLegit );
// /^[~!@#\$%\^\&\*\(\)_\+\|}{\]\[":\?\>\<`1234567890\-=qwertyuiopasdfghjkl;'zxcvbnm,\.\/]{8,20}$/

// the white space is not allowed, this will fail
var password= 'my./$^pass[ ]word';

console.log( passwordLegit.test(password) );
// false

console.log( passwordLegit.test('my./$^pass[]word'))
// true

```
---

`<array> regEscape.SPECIAL_CHARS` are the special characters used, you could modify this if needed.

---

###licence

MIT