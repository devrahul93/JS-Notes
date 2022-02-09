// Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'

const countWords = (para, word1, word2) => {
  return para.split(word1).length > para.split(word2).length
    ? `The word ${word1} more frequently occured than ${word2}`
    : `The word ${word2} more frequently occured than ${word1}`
}

console.log(countWords(paragraph, 'love', 'you'))
//The word love more frequently occurred than you.
