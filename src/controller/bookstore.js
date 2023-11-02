const bookstore = require('../models/bookstore')




exports.addbookstore = async (req, res) => {

    const bookStore = await bookstore.create(
        req.body
    )
    if (bookstore) {
        res.status(200).json({
            success: true,
            msg: "Added Successfully",

            bookStore
        })
    }
}

exports.getbookstore = async (req, res) => {
    const BSList = await bookstore.find().exec((error, BSList) => {
        if (error) return res.status(400).json({ error })
        if (BSList) {
            res.status(200).json({
                success: true,
                msg: "Get items Successfully",
                BSList
            })
        }
    })
}
exports.getbooksDetails = async (req, res) => {
    const BSList = await bookstore.findById(req.params.id)
    if (BSList) {
        res.status(200).json({
            success: true,
            msg: "Get items Successfully",
            BSList
        })
    }
}


exports.updatebookstore = async (req, res) => {
    let BS = await bookstore.findById(req.params.id);
    BS = await bookstore.findByIdAndUpdate(req.params.id, req.body, {
        new: true, useFindAndModify: false, runValidators: true
    })
    res.status(200).json({
        success: true,
        msg: "Updated Successfully",
        BS
    })
}

exports.deletebookstore = async (req, res) => {
    const DBS = await bookstore.findById(req.params.id);
    await DBS.remove()

    res.status(200).json({
        success: true,
        msg: "Deleted Successfully"
    })
}


