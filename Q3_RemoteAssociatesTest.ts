const getQuestionPart = (phrases: string[]) => {
    var lengthEachWord: number[] = []
    var shortestWordCharacter: number = 0
    var shortestWord: string = ''
    var charList: string[] = []
    // find shortestWord. If have more 1, choose the fisrt word in array
    phrases.map((word) => {
        lengthEachWord.push(word.length)
    })
    shortestWordCharacter = Math.min(...lengthEachWord)
    shortestWord = phrases.filter((word) => (word.length == shortestWordCharacter))[0]
    // find words can be
    for (var startIndexCharracter = 0; startIndexCharracter < shortestWord.length; startIndexCharracter++) {
        for (var stopIndexCharracter = shortestWord.length + 1; stopIndexCharracter > startIndexCharracter; stopIndexCharracter--) {
            var text: string = shortestWord.slice(startIndexCharracter, stopIndexCharracter)
            charList.push(text)
        }
    }
    // choose longest word 
    var wordDuplicate: string = ''
    charList.map((text) => {
        var count = 0
        phrases.map((word) => {
            count += word.includes(text) == true ? 1 : 0
        })
        if (count == 3) {
            if (text.length > wordDuplicate.length) {
                wordDuplicate = text
            }
        } else {
            count = 0
        }
    })
    // return array
    var returnList:string[] = []
    phrases.map((word) => {
        word.split(wordDuplicate).map((text)=>{
            if (text != '') {
                returnList.push(text.replace(' ', ''))
            }
        })
    })
    return returnList
}
console.log(getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']))
console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']))
console.log(getQuestionPart(['goodmoring', 'goodluck', 'good job'])) // test