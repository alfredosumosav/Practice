function deleteProducts(ids, m) {
  let idsMap = new Map();

  for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      if (idsMap.has(id)) {
          idsMap.set(id, idsMap.get(id) + 1)
      } else {
          idsMap.set(id, 1)
      }
  }

  let entries = Array.from(idsMap.entries()).sort((a,b) => {
      return a[1] - b[1];
  });

  while (m > 0) {

      for (let i = 0; i < entries.length; i++) {
          let v = entries[i][1];
          if (v === 0) continue;
          entries[i][1]--;
          break;
      }

      m--;
  }

  let count = 0;
  entries.forEach(entry => {
      if (entry[1] !== 0) count++;
  })

  return count;
}