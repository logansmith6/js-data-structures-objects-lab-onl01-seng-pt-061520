// Write your solution in this file!

function updateDriverWithKeyAndValue(obj, key, value){
  const driver = {...obj};
  driver[key] = value;
  return driver;
   // return Object.assign(driver, {[key]:value})
}
