const path = require('path');
const Data = require('../db/Data')
let main = path.join(__dirname, "../");
const get_mrd = async (req, res) => {
    res.status(200).sendFile(main + 'public/mrd.html');
}
const post_mrd = async (req, res) => {
    let newData = new Data(req.body);
    newData.save((err, item) => {
        let id = item._id;
        res.status(200).redirect('/fetch');
    });

}

module.exports = { get_mrd, post_mrd };