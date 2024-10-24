const User = require('./model')
exports.all = async (req, res) => {
    const us = await User.findAll()
    return res.status(200).send({
        status: true,
        message: 'succes get all data',
        data: us
      });
}

exports.create = async (req, res) => {
    const us = await User.findAll()
    return res.status(200).send({
        status: true,  
        message: 'success create',
        data: us
    });
}


exports.detail = async (req, res) => {
    const params = req.params.id
    const us = await User.findByPk(params)
    return res.status(200).send({
        status: true, 
        message: 'success get detail',
        data: us 
      });
}


exports.update = async (req, res) => {
    // const us = await User.find()
    const params = req.params.id
    const user = await User.findByPk(params);
    user.password = 'new password';
    await user.save();

    return res.status(200).send({
        status: true, 
        message:'Sucess updated!' 
      });
}