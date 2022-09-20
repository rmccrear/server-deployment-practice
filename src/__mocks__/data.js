const data = [
    {
        Operators: "Mr. Jones",
        Address: "123 N A. Street"
    },
    {
        Operators: "Mrs. Jones",
        Address: "123 N B. Street"
    }
]


const getFarms = async () => {
    const p = Promise.resolve(data)
    return await p;
}

module.exports = {getFarms};
