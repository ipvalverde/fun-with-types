interface IdentifiableObject {
  id: number;
}

function print(object: IdentifiableObject) {
  console.log(`Object id: "${object.id}"`);
}

class User {
  constructor(
      public readonly id: number,
      public readonly name: string
    ) {}
}

const user = new User(12, "Israel");
print(user);