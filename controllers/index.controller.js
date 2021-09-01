const index = async (req, res) => {
    const testString = "Hi this is a test string";

    let data = {
        test: testString,
        title: "Express server side rendering"
    }
    res.render("index", data);
};


module.exports = {
    index
}