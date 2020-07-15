interface IdentifiableObject {
  id: number;
}

function print(object: IdentifiableObject) {
  console.log(`Object id: "${object.id}"`);
}


// print({ id: 12, name: "Israel" });