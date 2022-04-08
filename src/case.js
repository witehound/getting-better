let aSet, bSet, cSet;
const allCase = (a, b) => {
  const mainTest = (a) => {
    aSet = { aSet: a };
  };
  const sideTest = (b) => {
    bSet = { bSet: b };
  };

  sideTest(b);
  mainTest(a);

  console.log(aSet.aSet, bSet.bSet);
};

const testText = () => {
  console.log(`hey`);
};

const Product = {
  all: allCase,
  test: testText,
};

export default Product;
