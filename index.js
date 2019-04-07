(function() {

  const values= {
    "one" : 1,
    "two" : 2
  };
  
  // Add will be the class which we will be importing in our files
  var Add = (function() {
    function add() {
        return values[one]+values[two];
    };
  });

  console.log("messae")

  // This is because 'module' loading is not yet supporting by a browser. 
  // so we would be requiring a module loader to load module format ones

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Add;
  else
    window.Add = Add;
  
})();