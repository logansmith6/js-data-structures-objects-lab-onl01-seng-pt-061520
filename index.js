// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
   // return Object.assign(driver, {[key]:value})
}
