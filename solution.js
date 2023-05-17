const mostLikely = (prob1, prob2) => {
    const out1 = (prob1.split(':')[1] / prob1.split(':')[0])
    const out2 = (prob2.split(':')[1] / prob2.split(':')[0])
    if (out1 < out2) {
        return true
    }
        return false
}

console.log(mostLikely('1:3','1:2')) // false