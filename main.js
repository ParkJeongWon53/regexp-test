const str = `
010-1234-5678
thekfj@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps ober the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)