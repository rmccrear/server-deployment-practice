axios = require("axios");

const farmUrl = "https://data.ntpc.gov.tw/api/datasets/FC30F585-66D9-4233-A65E-C650D177EBFE/json/preview"

const getFarms = async () => {
    const resp = await axios.get(farmUrl);
    return resp.data;
}

module.exports = {getFarms};
