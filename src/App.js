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

  const word = "cat";
  const word2 = "dot";

  const obj = {
    a: "1",
    c: "2",
    t: "3",
    d: "4",
    o: "3",
  };

  const array = [];

  let sum = 0;

  const splittedWord = word.split("");

  const match = (word, obj) => {
    const splittedWord = word.split("");
    for (let i = 0; i < splittedWord.length; i++) {
      // console.log(obj.splittedWord[i])
      console.log(obj[splittedWord[i]])
      array.push(obj[splittedWord[i]]);
      sum += parseInt(obj[splittedWord[i]]);
    }
    console.log( `result : ${sum}(${array[0]},${array[1]},${array[2]})`)
  };

  match(word, obj);

  // console.log(array, sum);

  //  Product.test()
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
