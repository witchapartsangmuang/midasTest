const getHandScore = (input: string): number => {
    var score = 0
    const pointArr: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const inputArr = input.split(' ')
    var cardArr: { suit: string, point: string }[] = []
    var h_card_point = 0
    var c_card_point = 0
    var d_card_point = 0
    var s_card_point = 0
    inputArr.map((card) => {
        cardArr.push({
            suit: card[0],
            point: card.split(card[0])[1]
        })
    })
    if (cardArr.filter((card) => (card.point == 'A')).length == 3) {
        score = 35
    } else {
        pointArr.map((point) => {
            if (cardArr.filter((card) => (card.point == point)).length == 3) {
                score = 32.5
            }
        })
    }
    if (score == 35 || score == 32.5) {
        return score
    } else {
        cardArr.map((card) => {
            var newPoint = 0
            // convert J, Q, K, A to points
            if (card.point == 'J' || card.point == 'Q' || card.point == 'K') {
                newPoint = 10
            } else if (card.point == 'A') {
                newPoint = 11
            } else {
                newPoint = parseInt(card.point)
            }
            // add points on each suit
            if (card.suit == 'H') {
                h_card_point += newPoint
            } else if (card.suit == 'C') {
                c_card_point += newPoint
            } else if (card.suit == 'D') {
                d_card_point += newPoint
            } else {
                s_card_point += newPoint
            }
        })
        score = Math.max(h_card_point, c_card_point, d_card_point, s_card_point)
        return score
    }
}
console.log(getHandScore('S8 S10 CA')) // score is 18
console.log(getHandScore('D2 H2 C2')) // score is 32.5
console.log(getHandScore('DA HA CA')) // score is 35