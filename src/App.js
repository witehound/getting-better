import {
  CompareArrowsOutlined,
  ContactsOutlined,
  SecurityRounded,
} from "@material-ui/icons";
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
    console.log(applecount);
    console.log(orangecount);
  }

  // countApplesAndOranges(2, 3, 1, 5, [2], [-1]);

  function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let a = x1;
    let b = x2;
    for (let i = 0; i <= 10000; i++) {
      if (a !== b) {
        a += v1;
        b += v2;
      }
      if (a === b) {
        console.log("YES");
        return "YES";
      }
    }
    console.log("NO");
    return "NO";
  }

  // kangaroo(2, 1, 1, 2);

  function getTotalX(a, b) {
    // Write your code here
    let differnce = b[0] - a[a.length - 1];
    let first = a[a.length - 1];
    let combined = [];
    let count = 0;
    let result = 0;
    let tester = [];
    tester.push(first);
    for (let i = 0; i < differnce / a[a.length - 1] - 1; i++) {
      first += a[a.length - 1];
      tester.push(first);
    }

    for (let i = 0; i < a.length; i++) {
      combined.push(a[i]);
    }

    for (let i = 0; i < b.length; i++) {
      combined.push(b[i]);
    }

    for (let i = 0; i < tester.length; i++) {
      for (let j = 0; j < combined.length; j++) {
        if (tester[i] % combined[j] === 0) count++;
      }
      if (count === combined.length) result++;
      count = 0;
    }

    console.log(result);
    console.log(tester);
  }

  // getTotalX([2, 6], [24, 36]);

  function breakingRecords(scores) {
    // Write your code here
    let highest = [];
    let lowest = [];
    let trackhigh = 0;
    let tracklow = 0;
    let highchange = -1;
    let lowchange = -1;

    for (let i = 0; i < scores.length; i++) {
      if (trackhigh <= 0 || trackhigh < scores[i]) {
        trackhigh = scores[i];
        highchange++;
      }
      highest.push(trackhigh);
      if (tracklow <= 0 || tracklow > scores[i]) {
        tracklow = scores[i];
        lowchange++;
      }
      lowest.push(tracklow);
    }

    console.log(highchange, lowchange);
  }

  // breakingRecords([3 ,4 ,21 ,36 ,10 ,28 ,35 ,5 ,24 ,42])

  function birthday(s, d, m) {
    // Write your code here
    let num = s;
    let nums = [];
    let count = 0;
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
      let arrayElement = num.slice(0 + i, m + i);
      nums.push(arrayElement);
    }

    if (num.length === 1 && nums[0] === d) {
      count++;
    } else {
      nums.forEach((el) => {
        if (add(el) === d) {
          count++;
        }
      });
    }

    console.log(count);
  }

  // birthday([1, 2, 1, 3, 2], 3, 2);

  function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i < j) {
          if ((ar[i] + ar[j]) % k === 0) count++;
        }
      }
    }
    console.log(count);
  }

  // divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

  function migratoryBirds(arr) {
    // Write your code here
    let result = 0;
    let highest = [];
    let count = 0;
    let high = 0;
    let hightrack = 0;

    let tracker = arr.filter((element, index, array) => {
      return array.indexOf(element) === index;
    });

    for (let i = 0; i < tracker.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (tracker[i] === arr[j]) {
          count++;
        }
      }
      highest.push(count);
      count = 0;
    }

    for (let i = 0; i < highest.length; i++) {
      if (high <= 0) {
        high = highest[i];
        hightrack = tracker[i];
      }
      if (highest[i] >= high) {
        high = highest[i];
        hightrack = tracker[i];
      }
    }

    for (let i = 0; i < highest.length; i++) {
      if (highest[i] === high) {
        if (result <= 0) result = tracker[i];
        if (tracker[i] <= result) {
          result = tracker[i];
        }
      }
    }

    return result;
  }

  // migratoryBirds([1, 1, 1,1,4, 4, 4, 5, 5, 5,5 ,3]);

  const alpha = {
    a: 1,
    b: 2,
    c: 3,
    e: 1,
    f: 2,
    g: 3,
  };

  const strForHash = "abcebc";
  let hasher = {};

  for (let s of strForHash) {
    hasher[s] += 1;
    if (!hasher[s]) {
      hasher[s] = 1;
    }
  }

  // console.log(hasher);

  const coinStack = (a) => {
    let count = 0;
    let result = 0;
    let sum = 0;
    let tracker = 0;
    for (let i = 0; i < a; i++) {
      // if ( a <= sum )
      //count is 1 and sum is 1
      //ccount is 2 and sum is 3 ->  sum + new count
      //count is 3 and sum is 6 ->  sum + new count
      //count is 4 and sum is 10 -> sum + new count
      if (sum <= a) {
        count++;
        sum = sum + count;
      }
    }
    if (a < sum) tracker = count - 2;
    if ((a = sum)) tracker = count - 1;

    console.log(tracker);
  };

  // coinStack(6);

  function dayOfProgrammer(year) {
    if (year === 1918) {
      return `26.09.${year}`;
    } else if (year >= 1919) {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 100)) {
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    }

    if (year <= 1917) {
      if (year % 4 === 0) {
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    }
  }

  // dayOfProgrammer(2100)

  function bonAppetit(bill, k, b) {
    let sum = 0;
    let cost = 0;

    for (let i = 0; i < bill[0]; i++) {
      if (i !== bill[1]) sum += k[i];
    }
    cost = sum / 2;
    if (b === cost) return `Bon Appetit`;
    if (b > cost || b < cost) return b - cost;
  }

  // console.log(bonAppetit([4, 1], [3, 10, 2, 9], 7));

  function sockMerchant(n, ar) {
    // Write your code here
    //filter array with filter
    //for each i filter and same ccount
    //check is count % 2 = 0 if yes increase count of piar
    let count = 0;
    let pair = 0;
    let filtered = [];

    filtered = ar.filter((a, b, c) => {
      return c.indexOf(a) === b;
    });

    for (let v of filtered) {
      for (let s of ar) {
        if (v === s) {
          count++;
        }
      }
      count = count - (count % 2);
      if (count % 2 === 0) pair = pair + count / 2;
      count = 0;
    }
    console.log(pair);
  }

  // sockMerchant(7, [1,2,1,2,1,3,2]);

  function pageCount(n, p) {
    // Write your code here
    //have a variable to backtrack
    //have a varibale for flip
    //flip on starts when index > 0
    //if index > 0 track increments and when track === 2 flip increments
    //if p % 2 == 0 do p + 1 for control
    //reverse function fpr from back if p % 2 == 1 do p + 1
    let backtrack = 0;
    let flip = 0;
    let high = 0;
    if (n === p) return 0;
    if (p % 2 === 0) p++;
    for (let i = 0; i < n; i++) {
      if (p >= i + 1) {
        if (i !== 0) {
          backtrack++;
          if (backtrack === 2) {
            flip++;
            backtrack = 0;
          }
        }
      }
    }

    high = flip;
    flip = 0;

    if (p % 2 === 1) p--;
    for (let i = n; i > 1; i--) {
      if (i >= p) {
        if (i !== n) {
          backtrack++;
          if (backtrack === 2) {
            flip++;
            backtrack = 0;
          }
        }
      }
    }

    if (high >= flip) high = flip;
    return high;
  }

  // console.log(pageCount(5,5));
  function countingValleys(steps, path) {
    // Write your code here
    //thinking of having a tracker of a positive and negative a cycle completes when they equal zero
    // if statment for 0 and 0
    // if first letter = d set valley = 1
    let uphill = 0;
    let downhill = 0;
    let valley = 0;

    for (let s of path) {
      if (uphill === 0 && downhill === 0 && s === "D") {
        valley++;
      }

      if (s === "D") {
        downhill++;
        uphill--;
      }
      if (s === "U") {
        uphill++;
        downhill--;
      }
      console.log("s", s);
      console.log("uphill", uphill);
      console.log("downhill", downhill);
      console.log("valley", valley);
    }

    return valley;
  }

  // console.log(countingValleys(8, "UDDDUDUUDDUUD"));

  function getMoneySpent(keyboards, drives, b) {
    //
    let res = 0;

    for (let d of keyboards) {
      for (let a of drives) {
        if (a + d <= b) {
          if (a + d >= res) res = a + d;
        }
      }
    }

    if (res === 0) return -1;

    return res;
  }

  // console.log(getMoneySpent([3,1], [5,2,8], 10));

  function catAndMouse(x, y, z) {
    //for x run a function on y and z
    //function goes like check if cat 1 l > mouse c l to know the proper negagting
    //repaet for cat 2
    let dis = 0;
    let temp = 0;
    let third = 0;
    let resI = 0;

    const getLoc = (a) => {
      for (let b = 0; b < a.length - 1; b++) {
        if (b !== a.length - 1) {
          temp = a[2] > a[b] ? a[2] - a[b] : a[b] - a[2];
          third = temp;
          if (dis === 0) {
            dis = third;
            resI = b;
            console.log("changed this");
          } else if (dis === temp) {
            dis = temp;
            resI = b;
            console.log("changed thatt");
          } else {
            resI = 2;
          }
          // if (temp === dis) return "Mouse C";
        }
        console.log(temp, "temp", dis, "dis");
      }
      console.log(resI);

      dis = 0;
      if (resI === 0) console.log("Cat A");
      if (resI === 1) console.log("Cat B");
      if (resI === 2) console.log("Mouse C");
    };

    getLoc(y);
    // getLoc(z);
  }

  // catAndMouse(2, [1, 3, 2], [6, 3, 2]);

  function hurdleRace(k, height) {
    let result = 0;
    //for loop to compare heights in array to k
    for (let a of height) {
      //function only runs when height in array is larger than k
      if (a > k) {
        // we only need to update result is current result is zero || less than a - k
        if (result === 0 || a - k > result) result = a - k;
      }
    }

    return result;
  }
  // console.log(hurdleRace(1, [1, 2, 3, 3, 2]));

  function designerPdfViewer(h, word) {
    const letter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let height = 0;
    let area = 0;
    const splittedWord = word.split("");
    const wordObject = {};
    for (let i in letter) {
      wordObject[letter[i]] = h[i];
    }

    for (let i in splittedWord) {
      if (height === 0 || wordObject[splittedWord[i]] > height) {
        height = wordObject[splittedWord[i]];
      }
    }

    return (area = height * splittedWord.length);
  }

  // designerPdfViewer(
  //   [
  //     1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  //     7,
  //   ],
  //   "zaba"
  // );

  const gradingStudents = (a) => {
    const newArr = [];
    for (let i of a) {
      console.log(i % 5);
      if (i % 5 === 0 && i >= 40) newArr.push(i);
      if (i % 5 <= 2) {
        newArr.push(i);
      }
      if (i % 5 > 2) {
        let add = 5 - (i % 5);
        newArr.push(i + add);
      }
    }

    console.log(newArr);
  };
  function computeJoinPoint(s1, s2) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let var1;
    let num1;
    let var2;
    let num2;

    const convertToStringA = (a, b) => {
      var1 = a;
      console.log(var1);
      for (let i of var1) {
        b += i.parseInt();
      }
      num1 = b;
    };

    const convertTostringB = (b, c) => {
      var2 = b.toString().split("");
      for (let i of var2) {
        c += i.parseInt();
      }
      num2 = c;
    };

    const checker = (a, b) => {
      num1 = a;
      num2 = b;
      convertToStringA(a, num1);
      convertTostringB(b, num2);
      if (num1 !== num2) {
        checker(num1, num2);
      }
      return num1;
    };

    // return ;
  }
  function computeJoinPoint(s1, s2) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let var1;
    let num1;
    let var2;
    let num2;
    let arr1 = [];
    let arr2 = [];

    const convertToStringA = (a, b) => {
      var1 = a.toString().split("");
      for (let i of var1) {
        b += parseInt(i);
      }
      num1 = b;
      arr1.push(num1);
    };

    const convertTostringB = (b, c) => {
      var2 = b.toString().split("");
      for (let i of var2) {
        c += parseInt(i);
      }
      num2 = c;
      arr2.push(num2);
    };

    const checker = (a, b) => {
      num1 = a;
      num2 = b;
      convertToStringA(a, num1);
      convertTostringB(b, num2);
      if (num1 !== num2) {
        for (let i = 0; i < 5; i++) {
          checker(num1, num2);
        }
      }

      for (
        let i = 0;
        arr1.length > arr2.length ? arr2.length : arr1.length;
        i++
      ) {
        for (
          let j = 0;
          arr1.length > arr2.length ? arr1.length : arr2.length;
          j++
        ) {
          if (
            arr1.length > arr2.length
              ? arr2[i]
              : arr1[i] == arr1.length > arr2.length
              ? arr1[j]
              : arr2[j]
          ) {
            console.log(arr1[i]);
          }
        }
      }
      console.log(num1);
      console.log(num2);
    };

    checker(s1, s2);

    // return ;
  }

  const utopianTree = (n) => {
    // declared cyclecount to be able to use 1 as a starting cycle
    let cycleCount = 0;
    // this is the end result after all cycles
    let result = 0;
    // craeted a loop to run though cycle length
    for (let i = 0; i <= n; i++) {
      //used thr cycle count to determine if we aree in the first or second cycle
      cycleCount++;
      // if we aree in the second cycle we double the previous result
      if (cycleCount % 2 === 0) result = result * 2;
      // if we are in the first cycle we  increase by 1
      else {
        result++;
      }
    }

    return result;
  };

  // utopianTree(1);

  const angryProfessor = (k, a) => {
    //here we need to find number of students that arrived early
    //if any element of array a < 0 then student arrived early
    //class is cancelled if student who arrived early is lower than threshold k
    let count = 0;
    for (let i of a) {
      if (i <= 0) count++;
    }
    if (count < k) return "YES";
    return "NO";
  };

  const beautifulDays = (i, j, k) => {
    // count to know how many beautiful days we have
    let count = 0;

    // revrse day a function that helps to reverse the number
    const reverseDay = (n) => {
      let dayToString = n.toString().split("");
      let newDay = "";
      for (let i = dayToString.length - 1; i >= 0; i--) {
        newDay += dayToString[i];
      }
      return parseInt(newDay);
    };

    // a loop to check if the differnce between a numnber and it reverse is a whole number
    for (let a = i; a <= j; a++) {
      let reverse = reverseDay(a);
      let diff;
      a > reverse ? (diff = a - reverse) : (diff = a - reverse);
      if ((diff / k) % 1 === 0) count++;
    }

    return count;
  };

  // beautifulDays(20, 23, 6);

  const viralAdvertising = (n) => {
    let day, liked;
    let cumulative = 0;
    let shared = 5;

    const getNewvalues = (a) => {
      day = a;
      liked = shared / 2;
      if (liked % 1 !== 0) liked = liked - (liked % 1);
      cumulative += liked;
      shared = liked * 3;
    };

    for (let i = 1; i <= n; i++) {
      getNewvalues(i);
    }

    return cumulative;
  };

  // viralAdvertising(3);

  const saveThePrisoner = (n, m, s) => {
    let mod = m % n;
    console.log(mod);
    let end = (mod + (s - 1)) % n || n;

    return end;
  };

  // saveThePrisoner(3, 7, 3);

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }

    push(value) {
      const newNode = new Node(value);
      if (this.head) {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }

      this.length++;
    }

    pop() {
      if (!this.head) return undefined;
      let pre = this.head;
      let temp = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }

    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    shift() {
      if (!this.head) return undefined;
      let temp = this.head;
      if (!temp.next) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      temp.next = null;
      this.length--;
      return temp;
    }

    get(index) {
      if (index > this.length - 1 || index < 0) return null;
      let temp = this.head;
      for (let i = 0; i < this.length; i++) {
        if (index === i) return temp;
        temp = temp.next;
      }
    }

    set(index, value) {
      let temp = this.get(index);
      if (temp) {
        temp.value = value;
        return true;
      }
      return false;
    }

    insert(index, value) {
      if (index === 0) return this.unshift(value);
      if (index === this.length - 1) return this.push(value);
      if (index >= this.length || index < 0) return null;
      const newNode = new Node(value);
      let temp = this.get(index - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return newNode;
    }

    remove(index) {
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      if (index >= this.length || index < 0) return null;
      let pre = this.get(index - 1);
      let temp = this.get(index + 1);
      pre.next = null;
      pre.next = temp;
      this.length--;
    }

    reverse() {
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      let prev = null;
      let next = temp.next;
      for (let i = 0; i < this.length; i++) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
      }
    }
  }

  class DoubleNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    constructor(value) {
      const newDoubleNode = new DoubleNode(value);
      this.head = newDoubleNode;
      this.tail = newDoubleNode;
      this.length = 1;
    }

    push(value) {
      const newDoubleNode = new DoubleNode(value);
      if (!this.head) {
        this.head = newDoubleNode;
        this.tail = newDoubleNode;
      } else {
        this.tail.next = newDoubleNode;
        newDoubleNode.prev = this.tail;
        this.tail = newDoubleNode;
      }
      this.length++;
    }

    pop() {
      if (!this.head) return false;
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      if (this.length <= 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }

    unshift(value) {
      const newDoubleNode = new DoubleNode(value);
      if (!this.head) {
        this.tail = newDoubleNode;
        this.head = newDoubleNode;
      } else {
        newDoubleNode.next = this.head;
        this.head.prev = newDoubleNode;
        this.head = newDoubleNode;
      }

      this.length++;
      return newDoubleNode;
    }

    shift() {
      if (!this.head) return false;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      let temp = this.head.next;
      temp.prev = null;
      this.head.next = null;
      this.head = temp;

      this.length--;
      return this;
    }

    get(index) {
      if (index < 0 || index > this.length) return false;
      let temp = this.head;
      if (index < this.length / 2) {
        for (let i = 0; i < this.length; i++) {
          if (i === index) return temp;
          temp = temp.next;
        }
      } else {
        temp = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          temp = temp.prev;
        }
      }
      return temp;
    }

    set(index, value) {
      if (index < 0 || index > this.length) return false;
      let temp = this.get(index);
      if (temp) {
        temp.value = temp;
        return true;
      }
      return false;
    }

    insert(index, value) {
      if (index === 0) return this.unshift(value);
      if (index === this.length - 1) return this.push(value);
      if (index < 0 || index > this.length) return false;
      const newDoubleNode = new DoubleNode(value);
      if (!this.head) {
        this.tail = newDoubleNode;
        this.head = newDoubleNode;
      } else {
        let temp = this.get(index - 1);
        newDoubleNode.prev = temp;
        newDoubleNode.next = temp.next;
        temp.next = newDoubleNode;
      }
      this.length++;
      return true;
    }

    remove(index) {
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      if (index < 0 || index > this.length) return false;
      let temp = this.get(index);
      let prev = temp.prev;
      let next = temp.next;

      prev.next = next;
      next.prev = prev;

      return true;
    }
  }

  //STACKS//

  class Stack {
    constructor(value) {
      const newNode = new Node(value);
      this.top = newNode;
      this.length = 1;
    }

    pop() {
      if (this.length <= 0) return false;
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
    }

    push(value) {
      const newNode = new Node(value);
      if (this.length <= 0) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.length++;
    }
  }

  ///QUEUES///
  class Queue {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }

    dequeue() {
      if (!this.head) return false;
      if (this.length === 1) {
        this.tail = null;
        this.head = null;
      } else {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
      }
      this.length--;
    }

    enqueue(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      }
    }
  }

  ///BINARY - TREES///

  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newTreeNode = new TreeNode(value);
      if (!this.root) {
        this.root = newTreeNode;
        return newTreeNode;
      } else {
        let temp = this.root;
        while (temp) {
          if (newTreeNode.value === temp.value) return false;
          if (temp.value > value) {
            if (!temp.left) {
              temp.left = newTreeNode;
              return newTreeNode;
            }
            temp = temp.left;
          }
          if (temp.value < value) {
            if (!temp.right) {
              temp.right = newTreeNode;
              return newTreeNode;
            }
            temp = temp.right;
          }
        }
      }
    }

    contains(value) {
      if (!this.root) return false;
      let temp = this.root;
      while (temp) {
        if (temp.value === value) return true;
        if (temp.value > value) temp = temp.left;
        else {
          temp = temp.right;
        }
      }
      return false;
    }
  }

  class Csharp {
    constructor(value) {
      this.value = value;
    }

    print() {
      return this.value;
    }

    reverse() {
      this.value = this.value.reverse();
      return this.value;
    }

    sort() {
      this.value = this.value.sort();
      return this.value;
    }
  }
  ///HASHTABLE///
  class HashTable {
    constructor(size = 7) {
      this.dataMap = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      }
      return hash;
    }

    set(key, value) {
      let hash = this._hash(key);
      let newArr = [key, value];
      if (!this.dataMap[hash]) {
        this.dataMap[hash] = [];
      }
      this.dataMap[hash].push(newArr);
      return newArr;
    }

    get(key) {
      let hash = this._hash(key);
      if (this.dataMap[hash]) {
        for (let i = 0; i < this.dataMap[hash].length; i++) {
          if (this.dataMap[hash][0] === key) {
            return this.dataMap[hash][1];
          }
        }
      }
      return undefined;
    }

    keys() {
      let allKeys = [];
      for (let i = 0; i < this.dataMap.length; i++) {
        if (this.dataMap[i]) {
          for (let i = 0; i < this.dataMap[i].length; i++) {
            allKeys.push(this.dataMap[i][0]);
          }
        }
      }
      return allKeys;
    }
  }

  //GRAPHS//
  class Graph {
    constructor() {
      this.ajacencyList = {};
    }

    add(vertex) {
      if (!this.ajacencyList[vertex]) {
        this.ajacencyList[vertex] = [];
        return true;
      }
      return false;
    }

    addEdge(vertex1, vertex2) {
      if (this.ajacencyList[vertex1] && this.ajacencyList[vertex2]) {
        this.ajacencyList[vertex1] = this.ajacencyList[vertex1].frilter(
          (v) => v !== vertex2
        );
        this.ajacencyList[vertex2] = this.ajacencyList[vertex2].frilter(
          (v) => v !== vertex1
        );
        return true;
      }
      return false;
    }

    removeEdge(vertex1, vertex2) {
      if (this.ajacencyList[vertex1] && this.ajacencyList[vertex2]) {
        return true;
      }
    }

    removeVortex(vertex) {
      if (this.ajacencyList[vertex]) {
        let temp = this.ajacencyList[vertex];
        for (let i = 0; i < temp.element; i++) {
          this.removeEdge(vertex, temp[i]);
        }
        delete this.ajacencyList[vertex];
        return this;
      }
      return false;
    }
  }

  const carPooling = (a, b) => {
    const hash = {};
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (!hash[a[i][1]]) hash[a[i][1]] = [];
      if (!hash[a[i][2]]) hash[a[i][2]] = [];
      hash[a[i][1]].push(i);
      hash[a[i][2]].push(i);
      count += 2;
    }
    let k = 0;
    let track = 1;
    let position = 0;
    let passengers = 0;

    while (track <= count) {
      k++;
      let temp = hash[k];
      if (temp) {
        for (let i = 0; i < temp.length; i++) {
          if (position > 0) {
            if (a[temp[i]][1] === k) {
              position = a[temp[i]][1];
              passengers += a[temp[i]][0];
              console.log(passengers);
            } else if (a[temp[i]][2] === k) {
              position = a[temp[i]][2];
              passengers -= a[temp[i]][0];
              console.log(passengers);
            }
          }
          if (passengers > b) {
            console.log(false);
            return false;
          }
          if (position <= 0) {
            position = a[temp[i]][1];
            passengers += a[temp[i]][0];
          }
        }
        track++;
      }
    }
    console.log();
    return true;
  };

  //SELECTION SORT//
  const selectSort = (a) => {
    let min;
    for (let i = 0; i < a.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = a[i];
        a[i] = a[min];
        a[min] = temp;
      }
    }
    return a;
  };

  var productExceptSelf = function (nums) {
    let hash = {};
    let old = nums;

    for (let i in nums) {
      let temp = old;
      temp[i] = 1;
      console.log(temp);
      old = nums;
    }

    console.log(nums);
  };

  // productExceptSelf([1, 2, 3, 4]);

  class encodeAnddecode {
    constructor() {
      this.encoded = null;
      this.decoded = null;
    }
    encode(arr) {
      let encoded = "";
      for (let i of arr) {
        encoded += `${i}*#`;
      }
      this.encoded = encoded;
      return encoded;
    }

    decode(str) {
      let decoded = str.plit("*#");
      this.decoded = decoded;
      return decoded;
    }
  }

  const longestConsecutive = function (nums) {
    let newNums = nums.sort((a, b) => a - b);
    console.log(newNums);
    let count = 0;
    let counts = [];
    let temp = 0;
    for (let i = 0; i < newNums.length; i++) {
      if (i === 0) {
        temp = newNums[i];
        count += 1;
        console.log(temp);
      } else {
        if (newNums[i] - temp === 1) {
          temp = newNums[i];
          count += 1;
        } else if (newNums[i] - temp === 0) {
          temp = newNums[i];
        } else {
          temp = newNums[i];
          counts.push(count);
          count = 1;
        }
      }
    }
    counts.push(count);
    for (let i in counts) {
      if (i === 0) count = counts[i];
      else {
        if (count < counts[i]) count = counts[i];
      }
    }
    return count;
  };

  // console.log(longestConsecutive([1, 2, 0, 1]));

  const twoSum = function (numbers, target) {
    let leftLength = 0;
    let rightLength = numbers.length - 1;
    let right = numbers[rightLength];
    let left = numbers[leftLength];
    let ret = [];

    while (ret.length < 1) {
      if (right + left < target) {
        leftLength += 1;
        left = numbers[leftLength];
      } else if (right + left > target) {
        rightLength -= 1;
        right = numbers[rightLength];
      } else {
        ret.push(leftLength + 1, rightLength + 1);
        ret.sort((a, b) => a - b);
      }
    }
  };

  // twoSum([3, 24, 50, 79, 88, 150, 345], 200);

  const lengthOfLongestSubstring = function (s) {
    if (s === " ") return 1;
    let highest = 0;
    let temp = 0;
    let hash = {};

    const getHighest = (b) => {
      temp = 0;
      hash = {};
      for (let a of b) {
        if (hash[a]) {
          hash = {};
          if (highest < temp) highest = temp;
          temp = 0;
        }
        temp++;
        hash[a] = [a];
      }
      return temp;
    };

    temp = getHighest(s);
    if (highest < temp) highest = temp;
    s = s.split("").reverse().join("");
    temp = getHighest(s);
    if (highest < temp) highest = temp;
    console.log(highest);
    return highest;
  };

  // lengthOfLongestSubstring("bbbbb");

  const maxArea = (a) => {
    let left = 0;
    let right = a.length - 1;
    let highest = 0;
    let loop = false;
    let leftPointer = a[left];
    let rightPointer = a[right];
    while (!loop) {
      if (highest === 0) {
        if (leftPointer > rightPointer) {
          highest = rightPointer * (right - left);
          right--;
          rightPointer = a[right];
        } else {
          highest = leftPointer * (right - left);
          left++;
          leftPointer = a[left];
        }
      } else {
        if (leftPointer > rightPointer) {
          rightPointer * (right - left) > highest
            ? (highest = rightPointer * (right - left))
            : (highest = highest);
          right--;
          rightPointer = a[right];
        } else {
          leftPointer * (right - left) > highest
            ? (highest = leftPointer * (right - left))
            : (highest = highest);
          left++;
          leftPointer = a[left];
          console.log(highest);
        }
      }
      if (left > right) loop = true;
    }
  };

  // maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

  const maxProfit = function (prices) {
    let left = 0;
    let right = left + 1;
    let max = 0;

    let leftPointer = prices[left];
    let rightPointer = prices[right];

    let p = true;

    while (prices[right] !== undefined) {
      let temp = rightPointer - leftPointer;
      right++;
      left++;
      rightPointer = prices[right];
      if (prices[left] < leftPointer) leftPointer = prices[left];
      if (temp > max) max = temp;
    }
    return max;
  };

  // console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

  const checkInclusion = function (s1, s2) {
    let hash = {};
    let count = 0;
    let temp = 0;

    for (let a of s1) {
      hash[a] = a;
      count++;
    }

    for (let b of s2) {
      if (hash[b]) {
        temp++;
        if (temp === count) return true;
      } else {
        temp = 0;
      }
    }
    return false;
  };

  // console.log(checkInclusion("ab", "eidbaooo"))
  const noReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) {
      const char = s[right];
      visited[char] = visited[char] ? visited[char] + 1 : 1;

      if (visited[char] > maxCharCount) maxCharCount = visited[char];

      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--;
        left++;
      }
      right++;
    }
    return right - left;
  };

  // console.log(noReplacement("ABABBA", 2));

  const isValid = (s) => {
    let hash = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    let stack = [];

    for (let a of s) {
      if (a === "{" || a === "(" || a === "[") stack.push(a);
      else if (hash[a] === stack[stack.length - 1]) stack.pop();
      else return false;
    }

    return stack.length ? false : true;
  };

  // console.log(isValid("(]"));
  var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      let mid = (left + right) / 2;
      if (target === nums[mid]) return mid;

      if (nums[left] <= nums[mid]) {
        if (target < nums[left] || target > nums[mid]) left = mid + 1;
        else {
          right = mid - 1;
        }
      } else {
        if (target < nums[mid] || target > nums[right]) right = mid - 1;
        else {
          left = mid + 1;
        }
      }
    }

    return -1;
  };

  const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    let min;

    while (left < right) {
      mid = Math.floor((right + left) / 2);

      if (nums[left] >= nums[right]) {
        min = nums[right];
        left = mid + 1;
      } else {
        min = nums[left];
        right = mid - 1;
      }
    }
    return min;
  };

  console.log(findMin([2, 4, 5, 6, 7, 0, 1]));

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
