//
// reg-escape:	escapes special characters in a string so it can be used with RegExp
//
// MIT License
//
// Copyright (c) 2014 Dennis Raymondo van der Sluis
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

var
	 types		= require( 'types.js' )
	,moduleName	= 'reg-escape'
;



var regEscape= function( string ){

	var escapedString= '';

	for ( var index in string ){
		var char= string[ index ];
		escapedString+= ( ~regEscape.SPECIAL_CHARS.indexOf(char) ) ? '\\'+ char : char;
	}

	return escapedString;
};
regEscape.SPECIAL_CHARS= [ '?', '\\', '[', ']', '(', ')', '*', '+', '.', '/', '|', '^', '$', '<', '>', '-', '&' ];



//
// creates a regular expression that can test for occurrance of characters in a string
// test is to be limited to a specific amount of characters by passing a lower and upper range
// passing only a string and lower value will limit the amount of accepted characters to lower's value
// no lower value will limit to 1 character
//
regEscape.limitOccur= function( string, lower, upper, flags ){

	string= types.forceString( string );

	if ( ! string ){
		console.log( moduleName+ ': error, invalid or missing string argument! now returning a non-matching regexp.' );
		return new RegExp('(?!.*)');
	}

	flags			= types.forceString( flags );
	lower			= types.forceNumber( lower, 1 );
	upper			= types.forceNumber( upper, 0 );

	var limit	= ( upper && (upper > lower) ) ? (lower+ ','+ upper) : lower;

	return new RegExp( '^['+ regEscape(string)+ ']{'+ limit+ '}'+ '$', flags );
};
// var limitedString= regEscape.limitOccur( 'only match 2 characters of this text!', 2 );
// console.log( limitedString.test('2!') );


module.exports= regEscape;