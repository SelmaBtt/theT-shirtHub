const validation = (schema) => async (req, res, next) => {
    const body = req.body

    try {
        await schema.validate(body)
        next();
    } catch (error) {
        return res.status(400).json({ error })
    }
}


module.exports = validation;