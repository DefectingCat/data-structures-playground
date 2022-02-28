class Queue<T> {
    private dataStore: T[];
    constructor(initData?: T[] | T) {
        if (initData instanceof Array) {
            this.dataStore = initData;
        } else {
            this.dataStore = initData ? [initData] : [];
        }
    }

    enqueue(value: T[] | T) {
        if (value instanceof Array) {
            return this.dataStore.push(...value);
        } else {
            return this.dataStore.push(value);
        }
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.length - 1];
    }

    get length() {
        return this.dataStore.length;
    }

    toString() {
        return this.dataStore.toString();
    }

    map(
        callbackfn: (value: T, index: number, array: T[]) => unknown,
        thisArg?: unknown
    ) {
        return this.dataStore.map(callbackfn, thisArg);
    }

    get itera() {
        return this.dataStore;
    }
}

export default Queue;
