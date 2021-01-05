// Write your solution in this file!

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver;
   // return Object.assign(driver, {[key]:value})
}
