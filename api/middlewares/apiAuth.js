require("dotenv").config();

exports.verifyApiPassword = (req, res, next) =>
{
    const { authorization } = req.headers;
    
    if (!authorization || authorization !== process.env.API_SECRET) {
        const error = new Error('Érvénytelen API jelszó!');

        error.status = 400;

        throw error;
    }

    next();
}