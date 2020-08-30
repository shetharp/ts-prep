module.exports = (title, slugName) => {
    return (`// ${title}
// https://leetcode.com/problems/${slugName}

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
 
/**
 * Test
 */
describe("${title}", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = false;
        expect(input).toBe(true);
    });
});

// Make this file a module to avoid global scoping
export { }
`)
};