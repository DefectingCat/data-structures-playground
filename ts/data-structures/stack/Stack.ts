class MyStack<T> {
    private data: T[];
    constructor(initData?: T[] | T) {
        if (initData instanceof Array) {
            this.data = initData;
        } else {
            this.data = initData ? [initData] : [];
        }
    }

    push(value: T[] | T) {
        if (value instanceof Array) {
            return this.data.push(...value);
        } else {
            return this.data.push(value);
        }
    }

    pop() {
        return this.data.pop();
    }

    get length() {
        return this.data.length;
    }
}

export default MyStack;
