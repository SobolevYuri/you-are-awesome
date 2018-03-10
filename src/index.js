// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propTitle) => {
Object.defineProperty(this, `${propTitle}`, {enumerable: true});
return propTitle;
}

const createNotEnumerableProperty = (propTitle) => {
  Object.defineProperty(Object.prototype, `${propTitle}`,{
    value:'value'
  });
  return propTitle;
};

const createProtoMagicObject = () => {
  let magFunc=function(){};
 magFunc.__proto__ = magFunc.prototype;
  return magFunc;
};

const incrementor = () => {
  if(typeof curInc == "undefined") curInc=0;
    curInc++;
    incrementor.toString=() => {
      return curInc;
    }
  return incrementor;
};

const asyncIncrementor = () => {
if(typeof asyncIncrementor.curInc== "undefined") asyncIncrementor.curInc=0;
return (new Promise((resolve)=>{
return resolve(++asyncIncrementor.curInc);
}));
};

const createIncrementer = function*(i=0) {
 while(i<3){
  yield ++i;
 }
  return this;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (PingParam) => {
 return (new Promise((resolve)=>{
    setTimeout(() => {resolve(PingParam);},1100);}));
};

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
  var obj={
    name:'Yuri',
    LastName:'Sobolev',
    age:19
  };
  var objson=JSON.stringify(obj);
  return new String(objson);
};

const toBuffer = () => {};

const sortByProto = (protosArr) => {
return protosArr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;