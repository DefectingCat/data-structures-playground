class MyStack<T> extends Array {
  private dataStore: T[] = [];
  constructor(dataStore?: T) {
    super();
    if (dataStore) this.dataStore.push(dataStore);
  }

  peek() {
    return this.dataStore[this.dataStore.length - 1];
  }
}

export default MyStack;
