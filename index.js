const Dependency = require('./dependency');

class DoSomeThing {
  constructor() {
    console.log('excute constructure');
    this.dependency = new Dependency();
  }

  methodPublic() {
    console.log('excute public methodPublic');
    this.dependency.get();
    this.dependency.post();
    this.dependency.put();
  }
}

const obj = new DoSomeThing();

obj.methodPublic();
