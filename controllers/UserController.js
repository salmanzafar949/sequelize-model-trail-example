const db = require('../models/index')

const store = async (req, res) => {

    const currentUserId = req.headers['user-id']

    await db.users.create(req.body, {userId: currentUserId})

    return res.json({
        data: "Success",
    })
}

const update = async (req, res) => {

    const currentUserId = req.headers['user-id']

    await db.users.findOne({id: req.params.id}).then((res) => {
        if (res){
            res.update(req.body, { userId: currentUserId })
        }
    })

    return res.json({
        data: "Success",
    })
}

const destroy = async (req, res) => {

    const currentUserId = req.headers['user-id']

    await db.users.findOne({id: req.params.id}).then((res) => {
        if (res){
            res.destroy({ userId: currentUserId });
        }
    })

    return res.json({
        data: "Success",
    })
}


module.exports = {
    store,
    update,
    destroy
}