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


{
  /* Array some() Method  */
  
  const users = [
  { username: "manthan", role: "admin" },
  { username: "mayank", Role: "user" },
 ];

const userIsAdmin = (userName) =>
  users.some((user) => user.username === userName && user.role === "admin");

const userName1 = "manthan";
console.log(`${userName1} is Admin: ${userIsAdmin(userName1)}`);
const userName2 = "mayank";
console.log(`${userName2} is Admin: ${userIsAdmin(userName2)}`);
const userName3 = "rahul";
console.log(`${userName3} is Admin: ${userIsAdmin(userName3)}`);
/*
  Output:
  manthan is Admin: true  
  mayank is Admin: false
  rahul is Admin: false
*/
  
}
