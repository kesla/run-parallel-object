var run = require('./run-parallel-object')
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