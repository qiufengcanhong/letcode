const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    class Node {
        constructor(val, next) {
            this.val = val;
            this.next = next;
        }
    }

    function create(values) {
        const head = new Node(values[0], null);
        let p = head;
        for (let i = 1; i < values.length; i++) {
            let val = values[i];
            let node = new Node(val, null);
            p.next = node;
            p = node;
        }
        return head;
    }

    while (await readline()) {
        let values = (await readline()).split(" ");
        let head = create(values);
        let k = parseInt(await readline());
        let fast = head;
        let slow = head;
        while (k > 0) {
            fast = fast.next;
            k--;
        }
        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }
        console.log(slow.val);
    }
})();
