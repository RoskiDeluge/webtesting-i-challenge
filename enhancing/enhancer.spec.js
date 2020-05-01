const { succeed, repair, fail, get } = require('./enhancer.js');
// test away!
describe('enhancing system', () => {
    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = {
                durability: 0
            }
            const item2 = {
                durability: 10
            }
            expect(repair(item).durability).toBe(100)
            expect(repair(item2).durability).toBe(100)       
        });
        it('increases enhancement by 1 up to 20, durability is unchanged', () => {
            const item = {
                durability: 50,
                enhancement: 15
            }
            expect(succeed(item).enhancement).toBe(16)
        });
        it.todo('decreases durability by 5 if enhancement < 15; by 10 if enhancement is > 15')
    })
})