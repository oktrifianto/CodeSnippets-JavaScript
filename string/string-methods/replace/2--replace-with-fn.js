const animal = 'It is a dog';

// replace word using function
function replaceWord(x) {
  return animal.replace('dog', x);
}

console.log(replaceWord('cat'));
console.log(replaceWord('fish'));
console.log(replaceWord('tiger'));