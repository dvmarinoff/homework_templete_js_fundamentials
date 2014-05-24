// Example templete 1 - simple:
(function () {
    'use strict';
    
    var controlFunction;
    
    function solution() {
        var result;
        
        // solution algorithm:
        
        return result;
    }
    
    // get input, call solution function, print result
    controlFunction = function () {
        var input, result;
        
        // get input
        input = document.getElementById('input-1-1').value;
        
        // optional: validate input
        //input = parseInt(input); ...    
        
        // call solution function: 
        
        // print result
        result = input;
        document.getElementById('result-1').innerHTML = result;
    };
    
    // Event listeners:
    document.getElementById('btn-1-submit').addEventListener('click', controlFunction);
    
}());
