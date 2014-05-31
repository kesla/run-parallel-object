# run-series-object[![build status](https://secure.travis-ci.org/kesla/run-series-object.png)](http://travis-ci.org/kesla/run-series-object)

Resolve functions in an object to values

[![NPM](https://nodei.co/npm/run-series-object.png?downloads&stars)](https://nodei.co/npm/run-series-object/)

[![NPM](https://nodei.co/npm-dl/run-series-object.png)](https://nodei.co/npm/run-series-object/)

## Installation

```
npm install run-series-object
```

## Example

### Input

```javascript
var run = require('./run-series-object')
  , obj = {
        beep: {
            boop: {
              foo: function (done) { done(null, 'bar') }
            }
          , bong: 'king kong'
        }
      , hello: function (done) { done(null, 'world') }
    }

run(obj, function (err, result) {
  console.log(result)
})
```

### Output

```
{ beep: { bong: 'king kong', boop: { foo: 'bar' } },
  hello: 'world' }
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
