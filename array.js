var friendsAge = [15, 17, 14, 16]
console.log(friendsAge)//[15, 17, 14, 16]
var sonaliAge = friendsAge[2]
friendsAge[1] = 35
console.log(friendsAge)//[15, 35, 14, 16]
var arrPosition = friendsAge.indexOf(14)
var arrPositionNone = friendsAge.indexOf(13)
console.log(arrPosition)//2
console.log(arrPositionNone)//-1

friendsAge.push(100)
console.log(friendsAge)//[ 15, 35, 14, 16, 100 ]
console.log(friendsAge.length)//5
console.log(friendsAge.pop())//100
console.log(friendsAge)//[ 15, 35, 14, 16]
friendsAge.unshift(500)
console.log(friendsAge)//[ 50, 15, 35, 14, 16]
friendsAge.shift()
console.log('firstarr elelment remove:',friendsAge)//[ 15, 35, 14, 16 ]

var teaLine = ['Ashraf', 'Muhammad', 'Ibrahim']
console.log(teaLine)//['Ashraf', 'Muhammad', 'Ibrahim']
teaLine.push('Tamim')
console.log(teaLine)//[ 'Ashraf', 'Muhammad', 'Ibrahim', 'Tamim' ]
teaLine.pop()
console.log(teaLine)//['Ashraf', 'Muhammad', 'Ibrahim']
teaLine.shift()//
console.log(teaLine)//[ 'Muhammad', 'Ibrahim' ]
teaLine.unshift('Hamim')
console.log(teaLine)//[ 'Hamim', 'Muhammad', 'Ibrahim' ]
teaLine.push('Tamim')
var partOfArr = teaLine.slice(2)
console.log(partOfArr)//[ 'Ibrahim', 'Tamim' ]


