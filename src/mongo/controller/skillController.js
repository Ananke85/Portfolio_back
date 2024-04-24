const skillModel = require("../model/skillModel");
const cloudinary = require('cloudinary').v2

const getAllSkills = async (req, res) => {
  try {
    const allSkills = await skillModel.find();
    res.status(200).json(allSkills);
  } catch (error) {
    res.status(500).json({ message: "Can't find your skills" });
  }
};

const postSkill = async (req, res) => {
  const { body } = req;
  try {
    const newSkill = new skillModel(body);
    await newSkill.save();
    res.status(200).json(newSkill);
  } catch (error) {
    console.error("Error posting skill:", error);
    res.status(500).json({ message: "Sorry, can't post your skill" });
  }
};

// const postSkill = async (req, res) => {
//   const { body } = req;

//   try {
//     const result = await cloudinary.uploader.upload(req.body.image, {
//       folder: "portfolio", // Replace with your desired Cloudinary folder
//       resource_type: "auto", // This will automatically detect the resource type (image, video, raw, etc.)
//     });

//     body.image = result.secure_url;

//     const newSkill = new skillModel(body);
//     await newSkill.save();
//     res.status(200).json(newSkill);
//   } catch (error) {
//     console.error("Error posting skill:", error);
//     res.status(500).json({ message: "Sorry, can't post your skill" });
//   }
// };

module.exports = {
  getAllSkills,
  postSkill,
};
