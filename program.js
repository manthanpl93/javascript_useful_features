{

  /* The Spread Operator */
  const hobbies = ["Sports", "Cooking"];
  const activeHobbies = ["Hiking", ...hobbies];

  activeHobbies.push(...hobbies);

  const person = {
    name: "Manthan",
    age: 23,
  };
  
  const coppiedPerson = { ...person };
}
