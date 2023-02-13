

const { coding, civil, electrical, robotics, gaming } = require('../db/rData');


const getCrd = async (req, res) => {
    const event = req.query.Event;
    if(event==='code-tyro'){
        coding.find({}, event, (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.send(data);
            }});
    }
    

}


module.exports = getCrd;