const sum = require('./sum')

test("should return 3 when a equals 1 and b equals 2", () => {
    expect(sum(1,2)).toBe(3);
})