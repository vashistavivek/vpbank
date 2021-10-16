function betterFunction(arr){
  const a = [...arr];
  const isForwarded = a.some(ele => ele.id === 1);
  return isForwarded;
}
