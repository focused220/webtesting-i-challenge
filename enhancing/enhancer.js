module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancedItem = item;
  if(enhancedItem.enhancement < 20){return enhancedItem.enhancement + 1;}
  else {return enhancedItem.enhancement}
}

function fail(item) {
  let newItem = item;
  if(newItem.enhancement < 15){ newItem.durability = newItem.durability - 5; return newItem}
  else if(newItem.enhancement >= 15){newItem.durability - 10; return newItem}
  else if(newItem.enhancement > 16){newItem.enhancement - 1; return newItem}
}

function repair(item) {
  let newItem = item;
  newItem.durability = 100;
  let durability = newItem.durability;
  return  durability;
}

function get(item) {
  return { ...item };
}
