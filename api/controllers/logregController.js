const logregServices = require("../services/logregService");
require("dotenv").config();

const bcrypt = require("bcrypt");

const salt = 10;

const validator = require("email-validator");

exports.registerUser = async (req, res, next) =>
{
    const { email, user_name, password } = req.body;

    const newUser =
    {
        id: null,
        email: email,
        password: await bcrypt.hash(password, salt),
        user_name: user_name,
    }

    const user_check = await logregServices.checkUser(email, user_name);
    
    try{

        if(user_check != null){
            if(user_check.email == email){ 
                const error = new Error("Már van regisztrálva ilyen felhasználó ezzel az email-el!");

                error.status = 400;
    
                throw error;
            }else{
                const error = new Error("Már van ilyen felhasználó ezzel felhasználó névvel!");

                error.status = 400;
    
                throw error;
            }
        }

        
        const isValid = validator.validate(email);
        
        if (isValid) {
            console.log('Az email érvényes!');
        } else {
            const newError = new Error('Az email nem létezik!');
            
            newError.status = 400;
            
            return next(newError);
        }
        
        const result = await logregServices.registerUser(newUser);

        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}


exports.loginUser = async (req, res, next) =>
{
    const { email, password } = req.query;
    
    const user = await logregServices.getUser(email);

    try
    {
        if(user == null || await bcrypt.compare(password, user.password) == false)
        {
            const error = new Error("Nem sikerült a bejelentkezés! Valamelyik adat nem egyezik!");

            error.status = 400;

            throw error;
        }

        res.status(200).send(user);
    }
    catch(error)
    {
        next(error);
    }
}