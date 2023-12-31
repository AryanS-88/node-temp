const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const fabsolutefilepath = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'text.txt'
)
console.log(fabsolutefilepath)
