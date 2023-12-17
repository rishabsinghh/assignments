/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let m = str1.length; 
  let n = str2.length;
  
  if(m == 0 && n == 0){
    return true;
  }

  else if(m!=n){
    return false;
  }

  else{
       result = true;
       for(let char of str1.toLowerCase()){
        if(!str2.toLowerCase().includes(char)){
          result = false;
        }
       }
       return result;
  }

}
  

module.exports = isAnagram;
