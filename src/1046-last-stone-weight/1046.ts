// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight

/**
 * Solve
 */
function lastStoneWeight(stones: number[]): number {
    if (stones.length == 0) {
        return 0;
    }
    if (stones.length == 1) {
        return stones[0];
    }

    stones.sort((a, b) => a - b);
    const stone1 = stones.pop() || 0;
    const stone2 = stones.pop() || 0;
    const smashedStone = stone1 - stone2;
    smashedStone > 0 && stones.push(smashedStone);
    return lastStoneWeight(stones);
};

/**
 * Test
 */
describe("1046. Last Stone Weight", () => {
    it("example 1", () => {
        const input = [2, 7, 4, 1, 8, 1];
        expect(lastStoneWeight(input)).toBe(1);
    });

    it("example 2", () => {
        const input = [2, 3, 1];
        expect(lastStoneWeight(input)).toBe(0);
    });
});

// Make this file a module to avoid global scoping
export { }
