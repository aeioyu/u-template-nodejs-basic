class Dependency {
  get() {
    console.log('Dependency get');
  }

  post() {
    console.log('Dependency post');
  }

  put() {
    console.log('Dependency put');
  }
}

module.exports = Dependency;
