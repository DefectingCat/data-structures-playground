import RoundLinkedList, { LinkedListNode } from "./RoundLinkedList";

/**
 * 指定一个总长度的队列，跳过指定数量对其进行删除，直到无法再被跳过为止。
 * @param length 总长度
 * @param m 每隔多少个进行删除
 */
const game = (length: number, m: number) => {
    let i = 1;
    const people = new RoundLinkedList(i);

    while (i < length) {
        people.insert(i + 1, i);
        i++;
    }

    let head = people.find(1);

    /**
     * 指定一个起始节点，查找指定调过数量后的节点
     * @param startNode 起始节点
     * @param targetNumber 跳过的数量
     * @returns
     */
    const findTarget = (
        startNode: LinkedListNode<number>,
        targetNumber: number
    ) => {
        let targetNode = startNode;
        // 找到跳过指定数量的节点
        for (let i = 1; i <= targetNumber; i++) {
            targetNode.next && (targetNode = targetNode.next);
        }
        return targetNode;
    };

    // 只要总长度还大于需要被跳过的数量
    // 就继续进行查找删除
    while (people.length > m) {
        const beDel = findTarget(head, m);
        if (beDel.next) {
            head = beDel.next;
            people.remove(beDel.element);
        }
    }

    people.display();
};
game(40, 2);
