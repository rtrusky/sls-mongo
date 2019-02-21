const handler = require("../handler")

describe('crud test', () => {

    beforeAll(async () =>{
        jest.setTimeout(10000);
        process.env = Object.assign(process.env, require("../secrets"));
    })

    test('getTabs', async () => {
        let results  = await handler.getAll();
        expect(JSON.parse(results.body).length).toBeGreaterThan(0)

    });



})
