//Standard javaScript

const date1 = new Date('January 10, 1981 23:05:21')
const date2 = new Date('June 08, 2019 15:10:21')

console.log(date1)
console.log(date2)

const date01 = date1.getTime()
const date02 = date2.getTime()

console.log(date01)
console.log(date02)

//------------------------------------------------------------------

//Moment

// const now = moment()
// now.add(1, 'year').subtract(20, 'days')
// console.log(now.format('MMMM Do YYYY'))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()
// console.log(nowTimeStamp)
//console.log(moment(nowTimeStamp).toString())

// const birthday = moment().date(25).month("Feb").year(1972)
// console.log(birthday.format('MMM D, YYYY'))