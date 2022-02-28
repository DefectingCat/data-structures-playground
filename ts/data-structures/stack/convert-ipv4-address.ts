import MyStack from "./Stack";

const mulBase = (num: number, base: number) => {
    const s = new MyStack();
    const maxAndMin = 8;

    do {
        s.push(num % base);
        num = Math.floor((num /= base));
    } while (num > 0);

    let converted = "";

    if (s.length < maxAndMin) {
        for (let i = 0; i < maxAndMin - s.length; i++) {
            converted += 0;
        }
    }

    while (s.length > 0) {
        converted += s.pop();
    }

    return converted;
};

const convertIPv4 = (ip: string) => {
    const ipArr = ip.split(".");

    return ipArr.map((item) => mulBase(Number(item), 2));
};

console.log(convertIPv4("192.168.2.33"));
console.log(convertIPv4("255.255.255.255"));
console.log(convertIPv4("172.16.2.3"));
console.log(convertIPv4("10.16.3.22"));
