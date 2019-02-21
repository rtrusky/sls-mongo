const handler = require("../handler")
const axios = require("axios")
describe('gateway to lambda test', () => {

    const testUrlBase = 'http://localhost:3000/tabs'
    beforeAll(async () =>{
        jest.setTimeout(10000);

    })

    test('getTabs', async () => {
        let res = await axios(testUrlBase);
        //console.log(res)
        let results =  res.data
        //console.log(results)
        expect(results.length).toBeGreaterThan(0)

    });



})
