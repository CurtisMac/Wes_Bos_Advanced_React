const Mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    //create dog
    const newDog = { name: args.name };
    console.log(newDog);
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
