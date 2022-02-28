import { readFile } from "fs/promises";
import path from "path";
import Queue from "./Queue";

class Dancer {
    constructor(public name: string, public sex: string) {}
}

const filePath = path.resolve(__dirname, "dancer.txt");

const females = new Queue<Dancer>();
const males = new Queue<Dancer>();

const validObj: {
    [key: string]: (dancer: Dancer) => number;
} = {
    F: (dancer: Dancer) => females.enqueue(dancer),
    M: (dancer: Dancer) => males.enqueue(dancer),
};

const setDancer = async () => {
    const allPeople = await readFile(filePath, { encoding: "utf-8" });
    allPeople.split("\n").map((people) => {
        // Person from file like: F-Allison McMillan
        const person = people.split("-");
        validObj[person[0]](new Dancer(person[1], person[0]));
    });
};

const dance = async (females: Queue<Dancer>, males: Queue<Dancer>) => {
    await setDancer();
    while (females.length && males.length) {
        console.log(
            `Female dancer is: ${
                females.dequeue()?.name
            } - and the male dancer is: ${males.dequeue()?.name}`
        );
    }

    if (females.length)
        console.log(
            `There are ${females.length} female dancers waitting to dance.`
        );
    if (males.length)
        console.log(
            `There are ${males.length} male dancers waitting to dance.`
        );
};

dance(females, males);
