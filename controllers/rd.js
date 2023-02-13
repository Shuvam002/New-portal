const path = require('path');
const { coding,civil,electrical,robotics,gaming } = require('../db/rData')
let main = path.join(__dirname, "../");
const get_rd = async (req, res) => {
    res.status(200).sendFile(main + 'public/rd.html');
}

const post_rd = async (req, res) => {
    
    try {
        const Domain = req.body.Domain;
        switch (Domain) {
            case "coding":
                var Event = req.body.event;
                if (Event === 'code-tyro') {

                    try {
                        
                        const gid1Exists = await coding.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid1 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid1 }, { Event: req.body.Event }] }]
                        });
                        const gid2Exists = await coding.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid2 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid2 }, { Event: req.body.Event }] }]
                        });
                        if (gid1Exists && gid2Exists) {
                            res.json("Both GIDs already exist");
                        } else if (gid2Exists) {
                            res.json("GID2 already exists");
                        } else if (gid1Exists) {
                            res.json("GID1 already exist");
                        } else {
                            let newData = new coding(req.body);
                            newData.save((err, item) => {
                                var id = item._id;
                                res.status(200).redirect('/fetch/rfetchCo');
                            });

                        }

                    } catch (error) {
                        res.json({ error });
                    }
                }
                break;
            case "civil":
                var Event = req.body.event;
                if (Event === 'Setubandhan') {
                    try {
                        
                        const gid1Exists = await civil.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid1 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid1 }, { Event: req.body.Event }] }, { $and: [{ gid3: req.body.gid1 }, { Event: req.body.Event }] }, { $and: [{ gid4: req.body.gid1 }, { Event: req.body.Event }] }, { $and: [{ gid5: req.body.gid1 }, { Event: req.body.Event }] }]
                        });
                        const gid2Exists = await civil.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid2 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid2 }, { Event: req.body.Event }] }, { $and: [{ gid3: req.body.gid2 }, { Event: req.body.Event }] }, { $and: [{ gid4: req.body.gid2 }, { Event: req.body.Event }] }, { $and: [{ gid5: req.body.gid2 }, { Event: req.body.Event }] }]
                        });
                        const gid3Exists = await civil.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid3 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid3 }, { Event: req.body.Event }] }, { $and: [{ gid3: req.body.gid3 }, { Event: req.body.Event }] }, { $and: [{ gid4: req.body.gid3 }, { Event: req.body.Event }] }, { $and: [{ gid5: req.body.gid3 }, { Event: req.body.Event }] }]
                        });
                        const gid4Exists = await civil.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid4 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid4 }, { Event: req.body.Event }] }, { $and: [{ gid3: req.body.gid4 }, { Event: req.body.Event }] }, { $and: [{ gid4: req.body.gid4 }, { Event: req.body.Event }] }, { $and: [{ gid5: req.body.gid4 }, { Event: req.body.Event }] }]
                        });
                        const gid5Exists = await civil.findOne({
                            $or: [{ $and: [{ gid1: req.body.gid5 }, { Event: req.body.Event }] }, { $and: [{ gid2: req.body.gid5 }, { Event: req.body.Event }] }, { $and: [{ gid3: req.body.gid5 }, { Event: req.body.Event }] }, { $and: [{ gid4: req.body.gid5 }, { Event: req.body.Event }] }, { $and: [{ gid5: req.body.gid5 }, { Event: req.body.Event }] }]
                        });
                        if (gid1Exists && gid2Exists && gid3Exists && gid4Exists && gid5Exists) {
                            res.json("All GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists) existingGIDs.push(req.body.gid3);
                            if (gid4Exists) existingGIDs.push(req.body.gid4);
                            if (gid5Exists) existingGIDs.push(req.body.gid5);

                            if (existingGIDs.length > 0) {
                                res.json(`GIDs ${existingGIDs.join(', ')} already exist`);
                            } else {
                                let req_id = new civil(req.body);
                                req_id.save((err, item) => {
                                    let id = item._id;
                                    res.redirect("/fetch/rfetchCi");
                                });



                            }

                        }
                    } catch (error) {
                        res.json(error)
                    }
                }
                break;
        }
    }
    catch (error) {
        res.status(400).json(error);
    }


}

module.exports = { get_rd, post_rd };