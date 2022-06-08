const ErrorHandler = async(err,req,res,next) => {

    if(err){
            return res.status(err.status).json({'message': err.message });
    }
    next();
}

module.exports = ErrorHandler;