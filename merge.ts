function merge(a : number[] ,b : number[]) {
  let al : number = a.length
  let bl : number = b.length

  if(al <= 0){
    return b
  }

  if( bl <= 0){
    return a
  }

  let i : number = 0
  let j : number = 0
  let sorted : number[] = []
  while( i < al && j < bl){
    if(a[i] > b[j]){
      sorted.push(b[j])
      j++
    }
    else{
      sorted.push(a[i])
      i++
    }
  }
  while(i < a.length){
    sorted.push(a[i])
      i++
  }
  while(j < b.length){
    sorted.push(b[j])
      j++
  }
  return sorted;
}




module.exports = {
  merge,
};