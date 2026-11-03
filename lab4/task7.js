const persons = {
  "Jeanne d`Arc": { born: 1412, died: 1431 },
  "Benjamin": { born: 1949 , died:2000},
  "Elizabeth II" :{ born: 1926, died: 2022 },
  "Napoleon Bonaparte": { born: 1769, died: 1821 }
}

function ages(persons) {
  const result = {}

  for (const name in persons) {
    const born = persons[name].born
    const died = persons[name].died

    result[name] = died - born
  }

  return result
}

console.log(ages(persons))