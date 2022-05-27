import "./App.css";
import Product from "./case.js";

function App() {
  Product.all("hey", "man");

  const wait = (a) => {
    return <span>{a}</span>;
  };

  const text = `wait` + wait("hey");

  //  console.log(wait('hey'))

  //TEST
  //first i have to split string so now i have have an array
  //second save all possible letters and values as an object?
  //create a lop for the length of array
  //now do obj.array[] have a global varaiable that you can increment with each loop
  //create a global array and also push the values there
  // restult string and use all the values

  const word = "can";
  const tile = "catt_"
  const word2 = "dot";

  const obj = {
    a: 1,
    c: 2,
    t: 3,
    d: 4,
    o: 3,
    s: 2,
    _ : 0
  };

  const array = [];

  let sum = 0;

  const match = (word, tile, obj) => {
    let tileObj = {}
    let wordObj = {}
    const splittedWord = word.split("");
    const splittedTile = tile.split("");
    for (let i = 0; i < splittedTile.length; i++) {
     tileObj[splittedTile[i]] = obj[splittedTile[i]]
    }

    for (let i = 0; i < splittedWord.length; i++) {
      wordObj[splittedWord[i]] = tileObj[splittedWord[i]]
     }

    




    // for (let i = 0; i < splittedWord.length; i++) {
    //   array.push(obj[splittedWord[i]]);
    //   sum += obj[splittedWord[i]];
    // }
    // console.log( `result : ${sum}(${array[0]},${array[1]},${array[2]})`)
    // console.log(tileObj,wordObj)

  };

  // match(word, tile,obj);

  // console.log(array, sum);

  //  Product.test()
  // let number = []
  // var twoSum = function(nums, target) {
  //     for(let i = 0 ; i < nums.length; i++){
  //          for(let j = 0 ; j < nums.length; j++){
  //              if(nums[i] + nums[j] === target){
  //                 //  number.push[j]
  //                 //  number.push[i]
  //                 // console.log(nums[j], nums[i])
  //                 console.log(j,i)
  //                 return
  //              }
  //       }
  //     }
      
  // };

  // twoSum([3,2,4], 6)

// let output = []
// let now
//   var addTwoNumbers = function(l1, l2) {
//     for(let i = 0 ; i < l1 ; i++){
//         // now = l1[i] + l2[i]
//         console.log(firstarray)
//         output.push(now)
//     }
//     console.log(output) 
// };

// addTwoNumbers([2,4,3],[5,6,4])

let output = []
const addTwoNumbers = (l1,l2) => {
  let track
  let newAdd = 0
  let toADD = 0
  console.log(l1,l2)
  for(let i = 0 ; i < (l1.length  > l2.length ? l1.length : l2.length); i++){
    track = (l1[i] ? l1[i] : 0) +(l2[i] ? l2[i] : 0) + newAdd 
    newAdd = 0
    if (track > 9 ) {
      toADD = track - 10
      newAdd = 1
      output.push(toADD)
    }
    if(track < 9){
      toADD = 0
      output.push(track)
    }
  }
  
  console.log(output)
}

// 


// let newArr = []
// let sumForArr = 0
// let result = 0

// const findMedianSortedArrays =(nums1, nums2) => {
//     for(let i = 0 ; i < nums1.length; i++){
//       newArr.push(nums1[i])
//     }

//     for(let i = 0 ; i < nums2.length; i++){
//       newArr.push(nums2[i])
//     }

//     for(let i = 0 ; i < newArr.length; i++){
//        sumForArr += newArr[i]
//     }

//     result = sumForArr / newArr.length
//     console.log(result)
// };

// findMedianSortedArrays([1,2],[3,4])


// const longestPalindrome = (s) => {
//     let splittedS = s.split("")
//     console.log(splittedS)
//     for(let i = 0; i < splittedS.length; i++){
//       console.log("first")
//       for(let j = 0; j < splittedS.length; i++){
//          if( splittedS[i] === splittedS[j] && i !== j){
//              console.log(i,j)
//             //  console.log('here')
//              console.log(splittedS[i],splittedS[j])
//          }
//       }
//     }
// };


// longestPalindrome("heyy")

let count  = 0
const countB = (s) => {
  let splitted = s.split("")
  console.log(splitted)
  for( let i = 0; i < splitted.length; i++){
    if(splitted[i] === "B"){
      console.log(splitted[i])
      count ++
    }
  }
 console.log(count)
}

// countB("BBC")
let char = 0
const countChar = (a,b) => {
   let splitted = a.split("")
   console.log(splitted)
   for(let i = 0; i < splitted.length; i++){
     if(splitted[i] === b){
       char++
     }
   }
   console.log(char)
}

// countChar("kakkerlak","k")

// let daysAfter = 0
// let daysSlide = 0
// const daysForDepth = (depth) =>{
//   daysAfter = depth / (7 - 2)
//   console.log(daysAfter)
// }

// daysForDepth(25)

// ------------------------------------
// let depth = 31;
// let remainder = 0
// if (depth < 5 ) {
//   console.log(depth) 
//   return
// }
// remainder = 32 % 5
// let endNumber = depth - remainder
// let daysToout = 0
// for(let count = 0; count < endNumber; count += 5){
//   daysToout++
// }
// console.log(daysToout)


const zigGetter = (s, row ) => {
  const test = []
  let zigColunmOne = 0
  let paced 
  let pacedTwo
  const stringLength = s.length
  const refinedString = s.split("")
  zigColunmOne = row + (row -2 )
  let remainder = stringLength % zigColunmOne
  const zigColunmEnd = (stringLength - remainder) / zigColunmOne 
  paced = 1 + (row - 2)
  let colunms = 1 + (zigColunmEnd * paced)
  console.log(refinedString) 
  for(let i = 0; i < row; i++){
      console.log(refinedString[2])
      test.push(refinedString[i])
  }
  for(let i = 0; i < row; i++){
      refinedString.shift()
  }

  console.log("one", zigColunmOne)
  console.log("colunmEnd", zigColunmEnd)
  console.log("stringl", stringLength)
  console.log("remaider", remainder)
  console.log("paced", paced)
  console.log("colunms",colunms)
  console.log(refinedString)
  console.log("test", test)
}

// zigGetter("paypalishiring", 4)

const doReverse =(a) =>{
  let splitted = a.toString().split("")
  let dash = ""
  for(let i = 0; i < splitted.length; i++){
    if(splitted[i] === "-"){
      splitted.splice(i, 1)
      dash+="-"
    }
  }
  let reverse = splitted.reverse()
  let finalle = ""
  for(let i = 0; i < reverse.length; i++){
    if(reverse[i] > 0 || i === "-"){
      let arrTostry = reverse[i].toString()
      finalle+= arrTostry
    }
  }
  finalle = dash + finalle
  console.log(finalle)
  return parseInt(finalle) 
}

// doReverse(-123)
  
const mostWater = (a) => {
  const index = []
  for(let i = 1; i <= a.length;i++){
    for(let j = 1; j <= a.length;j++){
      if(a[i] < a[j]){
       index.push(i * a[j]) 
      }
      
    }
  }
  let refined = index.sort()
  console.log(refined)
}

// mostWater([1,8,6,2,5,4,8,3,7])

let trapStart = {
  index: '',
  value: ''
}

let trapEnd = {
  index: '',
  value: ''
}

let tallestTrap

const trapper = (a) => {
  for(let i = 0; i < a.length; i++){
     if( i <= 0){
       if (a[i] > 0){
         trapStart.index = i
         trapStart.value = a[i]
       }
     }
     if( i = a.length-1){
      if (a[i] > 0){
        trapEnd.index = i
        trapEnd.value = a[i]
      }

     if(a[i] < a[i + 1] ){
       tallestTrap = a[i]
     }
    }
  }
  console.log('trapstart',trapStart)
  console.log('trapend',trapEnd)
  console.log('tallest',tallestTrap)
}

// trapper([4,2,0,3,2,5])

let reverseType = []
const manualReverse= (a)=> {
  let start = a.length - 1
  console.log(start)
  for( let i = start; i >= 0; i--){
      reverseType.push(a[i])
  }
  console.log(reverseType)
}

// manualReverse([1,2,5])


const higheestInArray = (a) => {
  let highest = 0
    for( let i = 0; i < a.length; i++){
      if(a[i] > a[i+1] ? a[i+1] : 0) highest = a[i]
    }
    console.log(highest)
}
higheestInArray([10,1000,3000,100])


  return (
    <>
      <button className="App" onClick={Product.test}>
        tinder
        {/* {console.log(JSON.parse.call)} */}
      </button>
      <div>{text}</div>
      <div>{wait("hey")}</div>
    </>
  );
}

export default App;
