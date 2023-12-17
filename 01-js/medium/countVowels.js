function countVowels(str) {
  let n = str.length;
  if (n === 0) {
    return 0;
  }

  const vowelList = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
