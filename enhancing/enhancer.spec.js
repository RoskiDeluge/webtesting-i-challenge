const { succeed, repair, fail, get } = require('./enhancer.js');
// test away!
describe('enhancing system', () => {
    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = {
                durability: 0
            }
            expect(repair(item)).toEqual({durability: 100})
        })
    })
})