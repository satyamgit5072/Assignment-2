//Asynchronous with call back non blocking code
var fp = require("fs");
console.log("Begin");
fp.readFile('satyam.txt',function (err,dat)
{
    if(err)
    {
    return console.error(err);
    }
    console.log(dat.toString());
}
);
console.log('End');

//promises

var match = (str1,str2) => 
{
    return new Promise((resolve,reject)=>
    {
        if(str1==str2)
        {
            resolve("Both strings are same");
        }
        else{
            reject("Both are not same");
        }
    });
}

match('satya','satya').then((solve)=>
{
    console.log(solve);
},(ject)=>
{
    console.log(ject);
});

//Async await

var fp = require('fs')
var content = {}
 function readfile1()
 {
     return new Promise(function (solve,ject)
     {
      fp.readFile('content1.txt',function(error,info)
      {
          if(!error)
          {
              solve(info.toString())
          }
      })
     })
 }
 function readfile2()
 {
     return new Promise(function (solve,ject)
     {
      fp.readFile('content2.txt',function(error,info)
      {
          if(!error)
          {
              solve(info.toString())
          }
      })
     })
 }

 async function fun()
 {
content['con1']= await readfile1()
content['con2']= await readfile2()
console.log(content);
 }

 fun();

//Generator

function *generator()
{
    let i =0;
    while(true)
    {
     yield i;
     i++;
    }
}

var value = generator();

console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());

function *generator2()
{
    yield 'a';
    yield *generator3();
    //return 'satya';
    yield 'c';
};

function *generator3()
{
    yield 'b';
}

var a = generator2()
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

//Async Waterfall

var async=require('async');
async.waterfall([
    function(callback) {
        var first="Satyam";
        var last="Bojanki";
        callback(null, first, last);
    },
    function(arg1, arg2, callback) {
        var full=`fullname is ${arg1} ${arg2}`;
        callback(null, full);
    },
    function(arg1, callback) {
        var age=23;
        let full=`${arg1} age is ${age}`;
        callback(null, full);
    }
], function (err, result) {
    console.log(result);
});

//Async Series

var async=require('async');
async.series({
    first: function(callback) {
        setTimeout(function() {
          console.log("in one");
            callback(null, 1);
        }, 2000);
    },
    second: function(callback){
        setTimeout(function() {
            console.log("in two");
            callback(null, 2);
        }, 1000);
    }
}, function(err, results) {
    console.log(results);
});

//async auto

  
var async = require('async');
async.auto({
    Name: function (callback) {
        var company = "clicklabs";
        callback(null, company);
    },
    Address: function (callback) {
        var address = 'panchkula II park';
        callback(null, address);
    },
    Data: ['Name', 'Address', function (result, callback) {
        var location = "candigarh"
        var info = `company is ${result.Name} and address is ${result.Address} in ${location}`;
        callback(null, info);
    }],

}, function (err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});
