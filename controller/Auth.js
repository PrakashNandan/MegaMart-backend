const { User } = require("../model/user");


exports.createUser= async (req, res) => {
    const user = new User(req.body);
    try {
      const doc = await user.save();
      res.status(201).json({id:doc.id, role:doc.id});
    } catch (err) {
      res.status(400).json(err);
    }
  };

exports.loginUser= async (req, res) => {

    try {

        const user = await User.findOne({email:req.body.email}).exec();
        // TODO : we will use strong password
        if(!user){
            res.status(401).json({message:'No such user email'})
        }
        else if(user.password==req.body.password){
              // TODO: We will make addresses independent of login
            res.status(200).json({id:user.id, role:user.id});
        }
        else{
            res.status(401).json({message:'Invalid credentials'})
        }

      
    } catch (err) {
      res.status(400).json(err);
    }
  };
  