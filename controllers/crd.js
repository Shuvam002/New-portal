

const { coding, civil, electrical, robotics, gaming } = require('../db/rData');


const getCrd = async (req, res) => {
    const event = req.query.Event;
    if (event === 'code-tyro') {
        coding.find({ event: req.query.Event }, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(data);
            }
        });
    }


}
const updateCrd = async (req, res) => {
    try {
        const event = req.query.Event;
        const id = req.body.id;
        const update = req.body;
        const option = {new : true}
        console.log(id, update);
        if (event === 'code-tyro') {
            const updatedData=await coding.findByIdAndUpdate(id, update, option);
            res.json(updatedData)
        }
    } catch (error) {
        console.log(error);
    }

};



module.exports = { getCrd, updateCrd };