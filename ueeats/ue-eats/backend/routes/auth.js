const express = require('express');
const router = express.Router();
const User = require('../modals/User')
const Order = require ('../modals/Order')
// const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const JWt_SECRET = 'anasisagood$boy';
// var fetchuser = require('../Middleware/fetchuser')
// import fetchuser from '../Middleware/fetchuser';
var jwt = require('jsonwebtoken');
const Commet = require('../modals/Comet')
const Rating = require('../modals/Rating')


// Middleware to parse JSON bodies
router.use(express.json());

// Route to handle user registration
router.post('/createuser', [
  body('name').notEmpty().withMessage('The name is invalid'),
  body('email').isEmail().withMessage('The email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('The password must be at least 6 characters long'),
  // body('phonenumber')
  //   .isLength({ min: 11, max: 11 }).withMessage('The Phone Number must be exactly 11 characters long')
  //   .isNumeric().withMessage('The Phone Number must be numeric')
], async (req, res) => {
  let Success=false
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    // Check if user with the same email already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      // phonenumber: req.body.phonenumber // Assuming the phone number is already validated
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWt_SECRET);
    //  console.log(authtoken)
   // await user.save();
    Success=true
    res.json({Success,authtoken})
    // res.status(201).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server eroor has been occured");
  }
});

// module.exports = router;

// now for athentacating the user weather it is present in the database or not if not than show the error that the user you are entering is not present

router.post('/login', [
  body('email').isEmail().withMessage('The email is invalid').isEmail(),
  body('password').isLength({ min: 6 }).withMessage('The password cannot be blank').exists(),
], async (req, res) => {
  let Success=false
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array('Internal server error') })
    // const (email,password)=req.body
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ Success,error: "Please try to login with the correct credentions" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      Success=false
      return res.status(400).json({ Success,error: "Please try to login with the correct credentions" });
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWt_SECRET);
    //  console.log(authtoken)
    // await user.save();
    Success=true
    res.json({Success,authtoken})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server eroor has been occured");
  }
});
router.post('/create', async (req, res) => {
  let Success =false
  const { UserName,ItemName,DepartmentName,CurrentSemester,RoomNumber} = req.body;

  try {
      const newOrder = new Order({
          UserName,
          ItemName,
          DepartmentName,
          CurrentSemester,
          RoomNumber,
          status: 'pending',  // Default status
      });

      await newOrder.save();
      Success=true
      res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
      res.status(500).json({ message: 'Error in placing Order', error: error.message });
  }
});
router.post('/commet', async (req, res) => {
  try {
    const { itemname, description } = req.body;
    // if (!itemname || description) {
    //   return res.status(400).json({ message: 'Missing required fields.' });
    // }

    const newCommet = new Commet({ itemname, description});
    await newCommet.save();
    res.status(201).json({ message: 'New Comment Has been  placed successfully!', commet: newCommet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error in  placing the comment', error: err.message });
  }
});
router.post('/rate', async (req, res) => {
  const { itemName, rating, } = req.body;

  if (!itemName || !rating ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newRating = new Rating({
      itemName,
      rating,
    });

    await newRating.save();
    res.status(201).json({ message: 'Rating submitted successfully' });
  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({ message: 'Failed to submit rating. Please try again later.' });
  }
});


module.exports = router;