const {repair, succeed, fail} = require('./enhancer.js');
// test away!

describe('enhancer functioms', () => {
    it('repair should restore the durability to 100', () =>{
        const item = {
            name: 'item1',
            durability: 50,
            enhancement: 5
        };
        const repaired = repair(item);

        expect(repaired).toBe(100);
    })
    it('succeed should increase enhancement by 1', () => {

        const item = {
            name: 'item1',
            durability: 50,
            enhancement: 5
        };

        const enhanced = succeed(item);
        expect(enhanced).toBe(6)
    })
    it('failed should change durability based on enhancement', () => {

        const item = {
            name: 'item1',
            durability: 50,
            enhancement: 5
        };
        
        const failed = fail(item);
        const result = {
            name: 'item1',
            durability: 45,
            enhancement: 5
        }
        expect(failed).toEqual(result)
    })
});


