const path = require('path');
const { coding, civil, electrical, robotics, gaming, general } = require('../db/rData')
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
                if (Event === 'byte-bash') {

                    try {

                        const gid1Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }]
                        });
                        const gid2Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }]
                        });
                        const Eventexists = await coding.findOne({ event: req.body.event });
                        if (gid1Exists && gid2Exists && Eventexists) {
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
                } else if (Event === 'CodingCombo') {

                    try {

                        const gid1Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }]
                        });
                        const gid2Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }]
                        });
                        const gid3Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid3 }, { gid2: req.body.gid3 }, { gid3: req.body.gid3 }]
                        });
                        const Eventexists = await coding.findOne({ event: req.body.event });
                        if (gid1Exists && gid2Exists && gid3Exists && Eventexists) {
                            res.json("Both GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists && Eventexists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists && Eventexists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists && Eventexists) existingGIDs.push(req.body.gid3);



                            if (existingGIDs.length > 0) {
                                res.json(`GIDs ${existingGIDs.join(', ')} already exist`);
                            } else {
                                let req_id = new coding(req.body);
                                req_id.save((err, item) => {
                                    let id = item._id;
                                    res.redirect("/fetch/rfetchCo");
                                });



                            }

                        }

                    } catch (error) {
                        res.json({ error });
                    }
                }
                else if (Event === 'code-sprint') {
                    try {

                        const gid1Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }]
                        });
                        const gid2Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }]
                        });
                        const gid3Exists = await coding.findOne({
                            $or: [{ gid1: req.body.gid3 }, { gid2: req.body.gid3 }, { gid3: req.body.gid3 }]
                        });

                        const Eventexists = await coding.findOne({ event: req.body.event });

                        if (gid1Exists && gid2Exists && gid3Exists && Eventexists) {
                            res.json("All GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists && Eventexists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists && Eventexists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists && Eventexists) existingGIDs.push(req.body.gid3);



                            if (existingGIDs.length > 0) {
                                res.json(`GIDs ${existingGIDs.join(', ')} already exist`);
                            } else {
                                let req_id = new coding(req.body);
                                req_id.save((err, item) => {
                                    let id = item._id;
                                    res.redirect("/fetch/rfetchCo");
                                });



                            }

                        }
                    } catch (error) {
                        res.json(error)
                    }
                } else if (Event === 'code-mania') {
                    const gid1Exists = await coding.findOne({
                        gid1: req.body.gid1
                    });
                    const Eventexists = await coding.findOne({
                        event: req.body.event
                    })
                    if (gid1Exists && Eventexists) {
                        res.json("GID already exists");
                    } else {
                        let req_id = new coding(req.body);
                        req_id.save((err, item) => {
                            let id = item._id;
                            res.redirect("/fetch/rfetchCo");
                        });
                    }
                }
                break;
            case "civil":
                var Event = req.body.event;
                if (Event === 'mega-arch') {
                    try {

                        const gid1Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }, { gid4: req.body.gid1 }, { gid5: req.body.gid1 }]
                        });
                        const gid2Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }, { gid4: req.body.gid2 }, { gid5: req.body.gid2 }]
                        });
                        const gid3Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid3 }, { gid2: req.body.gid3 }, { gid3: req.body.gid3 }, { gid4: req.body.gid3 }, { gid5: req.body.gid3 }]
                        });
                        const gid4Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid4 }, { gid2: req.body.gid4 }, { gid3: req.body.gid4 }, { gid4: req.body.gid4 }, { gid5: req.body.gid4 }]
                        });
                        const gid5Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid5 }, { gid2: req.body.gid5 }, { gid3: req.body.gid5 }, { gid4: req.body.gid5 }, { gid5: req.body.gid5 }]
                        });
                        const Eventexists = await civil.findOne({ event: req.body.event });
                        if (gid1Exists && gid2Exists && gid3Exists && gid4Exists && gid5Exists && Eventexists) {
                            res.json("All GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists && Eventexists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists && Eventexists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists && Eventexists) existingGIDs.push(req.body.gid3);
                            if (gid4Exists && Eventexists) existingGIDs.push(req.body.gid4);
                            if (gid5Exists && Eventexists) existingGIDs.push(req.body.gid5);

                            if (existingGIDs.length > 0) {
                                res.json(`GIDs ${existingGIDs.join(', ')} already exist`);
                            } else {
                                let req_id = new civil(req.body);
                                let code = await req_id.save();


                                res.redirect("/fetch/rfetchCi");
                            }

                        }
                    } catch (error) {
                        res.json(error)
                    }
                } else if (Event === 'CivilCombo') {
                    try {

                        const gid1Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }, { gid4: req.body.gid1 }, { gid5: req.body.gid1 }]
                        });
                        const gid2Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }, { gid4: req.body.gid2 }, { gid5: req.body.gid2 }]
                        });
                        const gid3Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid3 }, { gid2: req.body.gid3 }, { gid3: req.body.gid3 }, { gid4: req.body.gid3 }, { gid5: req.body.gid3 }]
                        });
                        const gid4Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid4 }, { gid2: req.body.gid4 }, { gid3: req.body.gid4 }, { gid4: req.body.gid4 }, { gid5: req.body.gid4 }]
                        });
                        const gid5Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid5 }, { gid2: req.body.gid5 }, { gid3: req.body.gid5 }, { gid4: req.body.gid5 }, { gid5: req.body.gid5 }]
                        });
                        const Eventexists = await civil.findOne({ event: req.body.event });
                        if (gid1Exists && gid2Exists && gid3Exists && gid4Exists && gid5Exists && Eventexists) {
                            res.json("All GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists && Eventexists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists && Eventexists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists && Eventexists) existingGIDs.push(req.body.gid3);
                            if (gid4Exists && Eventexists) existingGIDs.push(req.body.gid4);
                            if (gid5Exists && Eventexists) existingGIDs.push(req.body.gid5);

                            if (existingGIDs.length > 0) {
                                res.json(`GIDs ${existingGIDs.join(', ')} already exist`);
                            } else {
                                let req_id = new civil(req.body);
                                let code = await req_id.save();


                                res.redirect("/fetch/rfetchCi");
                            }

                        }
                    } catch (error) {
                        res.json(error)
                    }
                } else if (Event === 'Setubandhan' || Event === 'Track-o-Treasure') {
                    try {

                        const gid1Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }]
                        });
                        const gid2Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }]
                        });
                        const gid3Exists = await civil.findOne({
                            $or: [{ gid1: req.body.gid3 }, { gid2: req.body.gid3 }, { gid3: req.body.gid3 }]
                        });

                        const Eventexists = await civil.findOne({ event: req.body.event });

                        if (gid1Exists && gid2Exists && gid3Exists && Eventexists) {
                            res.json("All GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists && Eventexists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists && Eventexists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists && Eventexists) existingGIDs.push(req.body.gid3);



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
                } else if (Event === 'cadstrom') {
                    const gid1Exists = await civil.findOne({
                        gid1: req.body.gid1
                    });
                    const Eventexists = await civil.findOne({ Event: req.body.event });
                    if (gid1Exists && Eventexists) {
                        res.json("GID already exists");
                    } else {
                        let req_id = new civil(req.body);
                        req_id.save((err, item) => {
                            let id = item._id;
                            res.redirect("/fetch/rfetchCi");
                        });
                    }
                }
                break;
            case "robotics":
                var Event = req.body.event;
                if (Event === 'enter the dragon' || Event === 'Supa-strikas' || Event === 'Warriors-pit' || Event === 'RoboticsCombo') {
                    try {

                        const gid1Exists = await robotics.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }, { gid4: req.body.gid1 }]
                        });
                        const gid2Exists = await robotics.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }, { gid4: req.body.gid2 }]
                        });
                        const gid3Exists = await robotics.findOne({
                            $or: [{ gid1: req.body.gid3 }, { gid2: req.body.gid3 }, { gid3: req.body.gid3 }, { gid4: req.body.gid3 }]
                        });
                        const gid4Exists = await robotics.findOne({
                            $or: [{ gid1: req.body.gid4 }, { gid2: req.body.gid4 }, { gid3: req.body.gid4 }, { gid4: req.body.gid4 }]
                        });
                        const Eventexists = await robotics.findOne({ event: req.body.event });

                        if (gid1Exists && gid2Exists && gid3Exists && gid4Exists && Eventexists) {
                            res.json("All GIDs already exist");
                        } else {
                            let existingGIDs = [];
                            if (gid1Exists && Eventexists) existingGIDs.push(req.body.gid1);
                            if (gid2Exists && Eventexists) existingGIDs.push(req.body.gid2);
                            if (gid3Exists && Eventexists) existingGIDs.push(req.body.gid3);
                            if (gid4Exists && Eventexists) existingGIDs.push(req.body.gid4);


                            if (existingGIDs.length > 0) {
                                res.json(`GIDs ${existingGIDs.join(', ')} already exist`);
                            } else {
                                let req_id = new robotics(req.body);
                                req_id.save((err, item) => {
                                    let id = item._id;
                                    res.redirect("/fetch/rfetchRo");
                                });



                            }

                        }
                    } catch (error) {
                        res.json(error)
                    }
                } else if (Event === 'Poseidons-Trident' || Event === 'excalibur') {
                    const gid1Exists = await robotics.findOne({
                        gid1: req.body.gid1
                    });
                    const Eventexists = await robotics.findOne({
                        event: req.body.event
                    })
                    if (gid1Exists && Eventexists) {
                        res.json("GID already exists");
                    } else {
                        let req_id = new robotics(req.body);
                        req_id.save((err, item) => {
                            let id = item._id;
                            res.redirect("/fetch/rfetchRo");
                        });
                    }
                }
                break;
            case "electrical":
                var Event = req.body.event;
                if (Event === 'Electro-Dote' || Event === 'ElectricalCombo') {
                    try {

                        const gid1Exists = await electrical.findOne({
                            $or: [{ gid1: req.body.gid1 }, { gid2: req.body.gid1 }, { gid3: req.body.gid1 }]
                        });
                        const gid2Exists = await electrical.findOne({
                            $or: [{ gid1: req.body.gid2 }, { gid2: req.body.gid2 }, { gid3: req.body.gid2 }]
                        });
                        const Eventexists = await electrical.findOne({ event: req.body.event });
                        if (gid1Exists && gid2Exists && Eventexists) {
                            res.json("Both GIDs already exist");
                        } else if (gid2Exists) {
                            res.json("GID2 already exists");
                        } else if (gid1Exists) {
                            res.json("GID1 already exist");
                        } else {
                            let newData = new electrical(req.body);
                            newData.save((err, item) => {
                                var id = item._id;
                                res.status(200).redirect('/fetch/rfetchEle');
                            });

                        }

                    } catch (error) {
                        res.json({ error });
                    }
                } else if (Event === 'Lumos-arcade') {
                    const gid1Exists = await electrical.findOne({
                        gid1: req.body.gid1
                    });
                    const Eventexists = await electrical.findOne({
                        event: req.body.event
                    })
                    if (gid1Exists && Eventexists) {
                        res.json("GID already exists");
                    } else {
                        let req_id = new electrical(req.body);
                        req_id.save((err, item) => {
                            let id = item._id;
                            res.redirect("/fetch/rfetchEle");
                        });
                    }
                }
                break;
            case "gaming":
                var Event = req.body.event;
                if (Event === 'Fifa' || Event === 'NFS') {
                    try {

                        const gid1Exists = await gaming.findOne({
                            gid1: req.body.gid1
                        });
                        const Eventexists = await gaming.findOne({
                            event: req.body.event
                        })
                        if (gid1Exists && Eventexists) {
                            res.json("GID already exists");
                        } else {
                            let req_id = new gaming(req.body);
                            req_id.save((err, item) => {
                                let id = item._id;
                                res.redirect("/fetch/rfetchGm");
                            });
                        }
                    } catch (error) {
                        res.json(error)
                    }
                }
                break;
            case "general":
                var Event = req.body.event;
                if (Event === 'GeneralCombo') {
                    let newData = new general(req.body);
                    newData.save((err, item) => {
                        let id = item._id;
                        res.status(200).redirect('/fetch/rfetchGenC');
                    });
                }
        }
    }
    catch (error) {
        res.status(400).json(error);
    }


}

module.exports = { get_rd, post_rd };
