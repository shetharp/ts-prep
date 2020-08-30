// 155. Min Stack
// https://leetcode.com/problems/min-stack

/**
 * Solve
 */
class MinStack {
    stack: number[];
    minValues: number[];


    constructor() {
        this.stack = [];
        this.minValues = [];
    }

    push(x: number): void {
        this.stack.push(x);

        const minValue = this.minValues.length ? Math.min(this.minValues[this.minValues.length - 1], x) : x
        this.minValues.push(minValue);
    }

    pop(): void {
        this.stack.pop();
        this.minValues.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minValues[this.minValues.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * Test
 */
describe("155. Min Stack", () => {
    const minStack = new MinStack();

    it("create new MinStack", () => {
        expect(minStack).toBeInstanceOf(MinStack);
    });

    it("push -2", () => {
        minStack.push(-2);
        expect(minStack.top()).toBe(-2);
    });

    it("getMin", () => {
        expect(minStack.getMin()).toBe(-2);
    });

    it("push 0", () => {
        minStack.push(0);
        expect(minStack.top()).toBe(0);
    });

    it("getMin", () => {
        expect(minStack.getMin()).toBe(-2);
    });

    it("pop", () => {
        minStack.pop();
        expect(minStack.top()).toBe(-2);
    });

    it("getMin", () => {
        expect(minStack.getMin()).toBe(-2)
    })

    it("example", () => {
        const minStack1 = new MinStack();
        minStack1.push(-2);
        minStack1.push(0);
        minStack1.push(-3);
        expect(minStack1.getMin()).toBe(-3);
        minStack1.pop();
        expect(minStack1.top()).toBe(0);
        expect(minStack1.getMin()).toBe(-2);
    })
});

// Make this file a module to avoid global scoping
export { }
