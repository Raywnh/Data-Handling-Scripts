function checkEarlyTermination(length,...values) {
  for (let i = 0; i < length; i++)  {
    if (values[i][values[i].length - 1] == 'Yes')
      moveData(i+1);
  }  
}
