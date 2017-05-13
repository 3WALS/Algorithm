/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

// Basic
Array.prototype.isSubsetOf = function (arr) {
  for ( var i = 0; i<this.length; i++ ) {
    if ( arr.indexOf(this[i]) < 0 ) {
      return false;
    }
  }
  return true;
};

// Advanced
// Also work for arrays that contain objects and/or arrays
Array.prototype.isSubsetOf = function (arr) {
  var normalCheck = [],
      reCheck = [];

  function whatType(item) {
    return Object.prototype.toString.call(item).slice(8,-1).toLowerCase();
  }

  function arrCheck(a, b) {
    if ( a.length !== b.length ) return false;
    for ( var i = 0; i<a.length; i++ ) {
      if ( a[i] !== b[i] ) {
        if ( whatType(a[i]) === 'array' ) { arrCheck(a[i], b[i]); }
        else if ( whatType(a[i]) === 'object' ) { objCheck(a[i], b[i]); }
        else return false;
      }
    }
    // return true;
  }

  function objCheck(a, b) {
    for ( var key in a ) {
      if ( b[key] === undefined ) return false;
      if ( a[key] !== b[key]) {
        if ( whatType(a[i]) === 'array' ) { arrCheck(a[i], b[i]); }
        else if ( whatType(a[i]) === 'object' ) { objCheck(a[i], b[i]); }
        else return false;
      }
    }
  }

  this.forEach(function(item) {
    if ( whatType(item) === 'array' || whatType(item) === 'object' ) { reCheck.push(item); }
    else { normalCheck.push(item); }
  });

  if ( reCheck.length ) {
    console.log('recheck executed', reCheck);
    // only if it contains array || objects
    reCheck.forEach(function(item) {
      arrCheck(item, )
    });
  }

  for ( var i = 0; i<this.length; i++ ) {
    if ( arr.indexOf(this[i]) < 0 ) {
      return false;
    }
  }
  return true;

};

let product = {
  productName   : 'TV',
  maker         : 'LG',
  features      : ['Time Recoding', 'Sharing Screen', 'Speech Recognition'],
  productionYear: 2017
};

let { productName, maker, features } = product;

