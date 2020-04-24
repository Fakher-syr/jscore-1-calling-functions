function getYearFromAge(age) {
  const birthYear = 2020 - age;
  return birthYear;
}

function createGreeting(name, age) {
  const message =
    "Hi My Name is " + name + " and I was born in year " + getYearFromAge(age);
  return message;
}
