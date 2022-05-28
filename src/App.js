import { SecurityRounded } from "@material-ui/icons";
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
  const tile = "catt_";
  const word2 = "dot";

  const obj = {
    a: 1,
    c: 2,
    t: 3,
    d: 4,
    o: 3,
    s: 2,
    _: 0,
  };

  const array = [];

  let sum = 0;

  const match = (word, tile, obj) => {
    let tileObj = {};
    let wordObj = {};
    const splittedWord = word.split("");
    const splittedTile = tile.split("");
    for (let i = 0; i < splittedTile.length; i++) {
      tileObj[splittedTile[i]] = obj[splittedTile[i]];
    }

    for (let i = 0; i < splittedWord.length; i++) {
      wordObj[splittedWord[i]] = tileObj[splittedWord[i]];
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

  let output = [];
  const addTwoNumbers = (l1, l2) => {
    let track;
    let newAdd = 0;
    let toADD = 0;
    console.log(l1, l2);
    for (let i = 0; i < (l1.length > l2.length ? l1.length : l2.length); i++) {
      track = (l1[i] ? l1[i] : 0) + (l2[i] ? l2[i] : 0) + newAdd;
      newAdd = 0;
      if (track > 9) {
        toADD = track - 10;
        newAdd = 1;
        output.push(toADD);
      }
      if (track < 9) {
        toADD = 0;
        output.push(track);
      }
    }

    console.log(output);
  };

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

  let count = 0;
  const countB = (s) => {
    let splitted = s.split("");
    console.log(splitted);
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] === "B") {
        console.log(splitted[i]);
        count++;
      }
    }
    console.log(count);
  };

  // countB("BBC")
  let char = 0;
  const countChar = (a, b) => {
    let splitted = a.split("");
    console.log(splitted);
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] === b) {
        char++;
      }
    }
    console.log(char);
  };

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

  const zigGetter = (s, row) => {
    const test = [];
    let zigColunmOne = 0;
    let paced;
    let pacedTwo;
    const stringLength = s.length;
    const refinedString = s.split("");
    zigColunmOne = row + (row - 2);
    let remainder = stringLength % zigColunmOne;
    const zigColunmEnd = (stringLength - remainder) / zigColunmOne;
    paced = 1 + (row - 2);
    let colunms = 1 + zigColunmEnd * paced;
    console.log(refinedString);
    for (let i = 0; i < row; i++) {
      console.log(refinedString[2]);
      test.push(refinedString[i]);
    }
    for (let i = 0; i < row; i++) {
      refinedString.shift();
    }

    console.log("one", zigColunmOne);
    console.log("colunmEnd", zigColunmEnd);
    console.log("stringl", stringLength);
    console.log("remaider", remainder);
    console.log("paced", paced);
    console.log("colunms", colunms);
    console.log(refinedString);
    console.log("test", test);
  };

  // zigGetter("paypalishiring", 4)

  const doReverse = (a) => {
    let splitted = a.toString().split("");
    let dash = "";
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] === "-") {
        splitted.splice(i, 1);
        dash += "-";
      }
    }
    let reverse = splitted.reverse();
    let finalle = "";
    for (let i = 0; i < reverse.length; i++) {
      if (reverse[i] > 0 || i === "-") {
        let arrTostry = reverse[i].toString();
        finalle += arrTostry;
      }
    }
    finalle = dash + finalle;
    console.log(finalle);
    return parseInt(finalle);
  };

  // doReverse(-123)

  const mostWater = (a) => {
    const index = [];
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (a[i] < a[j]) {
          index.push(i * a[j]);
        }
      }
    }
    let refined = index.sort();
    console.log(refined);
  };

  // mostWater([1,8,6,2,5,4,8,3,7])

  let trapStart = {
    index: "",
    value: "",
  };

  let trapEnd = {
    index: "",
    value: "",
  };

  let tallestTrap;

  const trapper = (a) => {
    for (let i = 0; i < a.length; i++) {
      if (i <= 0) {
        if (a[i] > 0) {
          trapStart.index = i;
          trapStart.value = a[i];
        }
      }
      if ((i = a.length - 1)) {
        if (a[i] > 0) {
          trapEnd.index = i;
          trapEnd.value = a[i];
        }

        if (a[i] < a[i + 1]) {
          tallestTrap = a[i];
        }
      }
    }
    console.log("trapstart", trapStart);
    console.log("trapend", trapEnd);
    console.log("tallest", tallestTrap);
  };

  // trapper([4,2,0,3,2,5])

  let reverseType = [];
  const manualReverse = (a) => {
    let start = a.length - 1;
    console.log(start);
    for (let i = start; i >= 0; i--) {
      reverseType.push(a[i]);
    }
    console.log(reverseType);
  };

  // manualReverse([1,2,5])

  const higheestInArray = (a) => {
    let highest = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1] ? a[i + 1] : 0) highest = a[i];
    }
    console.log(highest);
  };
  // higheestInArray([10,1000,3000,100])

  const numberToRoman = (a) => {
    let remiander = 0;
    let other = a;
    let result = "";
    const romanInt = ["I", "V", "X", "L", "C", "D", "M"];
    const romanEquiv = [1, 5, 10, 50, 100, 500, 1000];

    const geOther = (a) => {
      remiander = 0;
      for (let i = 0; i < romanEquiv.length; i++) {
        if (remiander <= 0) {
          if (a < romanEquiv[i]) {
            remiander = romanEquiv[i - 1];
            result += romanInt[i - 1];
            other = a - remiander;
          }
        }
      }
      if (other > 0) {
        geOther(other);
      }
    };

    geOther(other);

    console.log("result", result);
  };

  // numberToRoman(6);

  const romanToNumber = (a) => {
    let target = a.split("");
    let result = 0;
    const romanInt = ["I", "V", "X", "L", "C", "D", "M"];
    const romanEquiv = [1, 5, 10, 50, 100, 500, 1000];

    for (let i = 0; i < romanInt.length; i++) {
      for (let j = 0; j < target.length; j++) {
        if (target[j] === romanInt[i]) {
          console.log(target[i], romanInt[i]);
          result += romanEquiv[i];
        }
      }
    }
    console.log("target", target);
    console.log("result", result);
  };

  // romanToNumber("XX");

  const longestCommonPractise = (a) => {
    let major = [];
    let setter;
    let result = "";
    for (let i = 0; i < a.length; i++) {
      major.push(a[i].split(""));
    }

    for (let i = 0; i < major.length; i++) {
      if (major[i + 1]) {
        if (major[i].length > major[i + 1].length) {
          setter = major[i].length;
        }
      }
    }

    for (let i = 0; i < setter; i++) {
      if (major[0][i] === major[1][i] && major[1][i] === major[2][i]) {
        console.log(major[i]);
        result += major[i][i];
      }
    }

    console.log("rwsulr", result);
  };

  // longestCommonPractise(["flower", "flow", "flight"]);

  const phoneCombo = (a) => {
    let result = [];
    let saver = [];
    let first = [];
    let second = [];
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    const letters = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
      ["j", "k", "l"],
      ["m", "n", "o"],
      ["p", "q", "r", "s"],
      ["t", "u", "v"],
      ["w", "x", "y", "z"],
    ];

    let splitted = a.split("");
    console.log(splitted);

    for (let i = 0; i < splitted.length; i++) {
      saver.push(letters[i]);
    }

    for (let i = 0; i < saver.length; i++) {
      for (let j = 0; j < saver[i].length; j++) {
        first.push(saver[i][j]);
        second.push(saver[i][j]);
      }
    }

    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < saver.length; j++) {}
    }

    console.log("first", first);
    console.log("second", second);
  };

  // phoneCombo("23");

  const subStringPhoneNum = (a, b) => {
    let saver = [];
    let subSaver = [];
    let truthSaver = [];
    let newtruthSaver = [];
    let result = [];
    const letters = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
      ["j", "k", "l"],
      ["m", "n", "o"],
      ["p", "q", "r", "s"],
      ["t", "u", "v"],
      ["w", "x", "y", "z"],
    ];
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

    let target = a.toString().split("");
    let newTarget = [];
    for (let i = 0; i < target.length; i++) {
      newTarget.push(parseInt(target[i]));
    }

    for (let i = 0; i < b.length; i++) {
      let sample = b[i].split("");
      let ln = sample.length;
      for (let j = 0; j < ln; j++) {
        for (let k = 0; k < letters.length; k++) {
          let kay = letters[k];
          let kayLn = kay.length;
          for (let l = 0; l < kayLn; l++) {
            if (sample[j] === kay[l]) {
              saver.push(numbers[k]);
            }
          }
        }
      }
    }

    console.log(newTarget);

    for (let i = 0; i < b.length; i++) {
      let sample = b[i].split("");
      let ln = sample.length;
      subSaver.push([]);
      for (let j = 0; j < ln; j++) {
        if (subSaver[i].length < b[i].length) {
          subSaver[i].push(saver[j]);
        }
      }
      saver = saver.slice(ln);
    }

    for (let i = 0; i < subSaver.length; i++) {
      let forFirst = subSaver[i];
      for (let j = 0; j < forFirst.length; j++) {
        console.log(forFirst[j]);
        for (let k = 0; k < newTarget.length; k++) {
          if (
            newTarget[k] === forFirst[j] &&
            truthSaver.length < forFirst.length
          ) {
            truthSaver.push(newTarget[k]);
          }
        }
      }

      console.log(truthSaver);
      if (truthSaver.length === forFirst.length) {
        result.push(forFirst);
      }
      truthSaver = [];
    }

    console.log(result);
  };

  // subStringPhoneNum(3569377, ["foo", "bar", "barz"]);

  function plusMinus(arr) {
    // Write your code here
    let counterP = 0;
    let counterN = 0;
    let counterZ = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
        counterP++;
      }
      if (arr[i] < 0) {
        counterN++;
      }
      if (arr[i] === 0) {
        counterZ++;
      }
    }

    counterP = (counterP / n).toFixed(6);
    counterN = (counterN / n).toFixed(6);
    counterZ = (counterZ / n).toFixed(6);

    console.log(counterP, counterN, counterZ);
  }

  // plusMinus([-4, 3 ,-9 ,0 ,4 ,1])

  function staircase(n) {
    let result = [];
    let hash = "#";
    let newHash = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i + 1; j++) {
        newHash += hash;
      }
      result.push(newHash);
      newHash = "";
    }
    console.log(result);
  }

  // staircase(6)

  const miniMaxSum = (arr) => {
    let lowest = 0;
    let highest = 0;
    let current = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
          current += arr[j];
        }
      }
      if (lowest <= 0) lowest = current;
      if (highest <= 0) highest = current;
      if (lowest >= current) lowest = current;
      if (highest <= current) highest = current;
      console.log(lowest, highest);
      current = 0;
    }
  };

  // miniMaxSum([5, 5, 5, 5, 5]);

  function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0;
    let result = 0;

    for (let index = 0; index < candles.length; index++) {
      if (candles[index] >= tallest) {
        tallest = candles[index];
      }
    }

    for (let index = 0; index < candles.length; index++) {
      if (tallest === candles[index]) {
        result++;
      }
    }

    console.log(result);
  }

  // birthdayCakeCandles([82 , 49 , 82 , 82 , 41, 82, 15, 63, 38, 25]);

  function timeConversion(s) {
    // Write your code here
    let splitted = s.split("");
    let nLength = splitted.length;
    let timeArr = [];
    let time = "";
    let prefix = "";
    let newTime = 0;
    let displayTime = "";

    timeArr.push(splitted[nLength - 2], splitted[nLength - 1]);
    prefix += splitted[0].toString() + splitted[1].toString();
    prefix = parseInt(prefix);

    for (let index = 0; index < timeArr.length; index++) {
      time += timeArr[index];
    }

    if (time === "PM") {
      if (prefix < 12) {
        newTime = prefix + 12;
      }
      if (prefix > 12) {
        newTime = prefix;
      }
      if (prefix === 12) {
        newTime = 12;
      }
    }

    if (time === "AM") {
      if (prefix > 12) {
        newTime = prefix - 12;
      }
      if (prefix < 12) {
        newTime = prefix;
      }
    }

    let helpPrifix = newTime < 9 ? "0" : "";
    displayTime = helpPrifix + newTime.toString() + s.slice(2, -2);

    console.log(displayTime);
  }

  // timeConversion("12:01:00PM");

  function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applediff = s - a;
    let orangediff = b - t;
    let applefinal = [];
    let orangefinal = [];
    let applecount = 0;
    let orangecount = 0;

    for (let index = 0; index < apples.length; index++) {
      applefinal.push(a + apples[index]);
    }

    for (let index = 0; index < oranges.length; index++) {
      orangefinal.push(b + oranges[index]);
    }

    let longest = applefinal.length;
    console.log(longest);

    if (applefinal.length !== orangefinal.length) {
      longest =
        applefinal.length > orangefinal.length
          ? applefinal.length
          : orangefinal.length;
    }

    for (let i = 0; i < longest; i++) {
      if (applefinal[i] >= s && applefinal[i] <= t) {
        applecount++;
      }
      if (orangefinal[i] >= s && orangefinal[i] <= t) {
        orangecount++;
      }
    }
    console.log(applefinal, orangefinal)
    console.log(applecount, orangecount);
  }

  countApplesAndOranges(2, 3, 1, 5, [2], [-1]);

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
