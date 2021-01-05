// Write your solution in this file!

function updateDriverWithKeyAndValue(obj, key, value){
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
   // return Object.assign(driver, {[key]:value})
}
