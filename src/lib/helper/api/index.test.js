import Api from './index';
const fetchMock = require("fetch-mock");

const fackUrl = "http://example.com";

jest.mock("./index", () => {
  return {
    get: jest.fn((fackUrl) => {
      return [{ full_name: "Repo 0" }, { full_name: "Repo Test" }];
    }),
  };
});


describe('Test The Api', () => {

    

  it('test added', async () => {
    const a = Api.get(fackUrl);
    console.log(a);
       /* let headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        let options = { method: "POST", headers: headers, body: payload };

        fetchMock.mock("http://someUrl", response, options);
*/
        

       /* fetchMock.get("http://fake.com", { hello: "world" });
        const resp = await Api.get("http://fake.com");
        const result = await resp.json();
        */
    });
});


