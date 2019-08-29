export interface bet{
    thirdBet: ThirdBet,
    halfBet: HalfBet,
    numberBet: NumberBet,
}
enum ThirdBet{
    first = "1st",
    second = "2nd",
    third = "3rd"
}
enum HalfBet{
    firstTwelve = "1-18",
    secondTwelve = "19-36"
}
enum NumberBet{
    even = "even",
    odd = "odd",
    red= "red",
    black = "black"
}