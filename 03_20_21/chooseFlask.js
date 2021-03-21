function chooseFlask(requirements, flaskTypes, markings) {
  let sortedMarkings = [];
  // let minFlaskTypeWaste = new Map();
  let min = [-1, Infinity];

  let maxReq = Math.max(...requirements); // marking needs to be greater than or equal than this!

  let type = 0;
  while (type < flaskTypes) {
    // reorder 2d array
    let partialFlasks = markings.filter((flask) => {
      return flask[0] === type;
    });

    sortedMarkings.push(partialFlasks);
    type++;
  }

  let waste = [];
  for (let i = 0; i < sortedMarkings.length; i++) {
    for (let orderRequest = 0; orderRequest < requirements.length; orderRequest++) {
      let requirement = requirements[orderRequest];
  
    }
    let flasks = sortedMarkings[i];
    let flaskMarkings = flasks.map(flask => {
      return flask[1];
    });

    let maxMarking = Math.max(...flaskMarkings)

    if (requirement > maxMarking) continue;

    console.log(flaskMarkings)
  }

  return null;

  /*
  for (let i = 0; i < flaskTypes; i++) {
    let flaskType = i;

    

  }

  for (let i = 0; i < markings.length; i++) {
    let falsk = markings[i];
    if (maxReq > flask[1]) continue;

    // calculate waste
    // let waste = flask[1] - 
  }
  */
}

requirements1 = [4, 6, 6, 7];
flaskTypes1 = 3;
markings1 = [[0, 3], [0, 5], [0, 7], [1, 6], [1, 8], [1, 9], [2, 3], [2, 5], [2, 6]];
console.log(chooseFlask(requirements1, flaskTypes1, markings1)); // 0