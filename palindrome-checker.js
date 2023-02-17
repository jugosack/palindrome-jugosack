module.exports = function (str) {
  // write your code here
  /*First, we remove any non-alphabet character using regex and convert
    convert the strings to lowercase. */
    let reverse=str.toLowerCase().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_` ~()]/g, "").split("").reverse().join()

    let strRev=str.toLowerCase().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_` ~()]/g, "").split("").join()
    return strRev===reverse
   
  }