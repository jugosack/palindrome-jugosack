module.exports = function (str) {
  // write your code here
  /*First, we remove any non-alphabet character using regex and convert
    convert the strings to lowercase. */
    str = str.replace(/[\W_]/g, "").toLowerCase();

    // convert string to an array
    const arrStr = str.split('');

    // reverse the array 
    const revArrStr = arrStr.reverse();

    // convert array to string
    const revStr = revArrStr.join('');

    if(str == revStr) {
        return true;
    }
    else {
        return false;
    }
  }