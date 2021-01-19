function phone(str) {
  let pad = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let result = [];

  for (let i = 0; i < str.length - 1; i++) {
    let ele1 = pad[str[i]];
    let ele2 = pad[str[i + 1]];
    let med = inner(ele1, ele2);
    result = result.concat(med);
  }
}

phone("456");

function inner(str1, str2) {
  let res = [];
  let res1 = "";

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];

    for (let j = 0; j < str2.length; j++) {
      let char2 = str2[j];
      // console.log(char2)
      res1 = char1 + char2;
      // console.log(res1);
      res.push(res1);
    }
  }

  return res;
}
