const { readFile, writeFile } = require('fs')

readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  writeFile('./content/subfolder/result-async.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
  })
})
