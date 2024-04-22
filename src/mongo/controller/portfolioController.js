const portfolioModel = require("../model/portfolioModel");
const cloudinary = require('cloudinary').v2


const getAllWorks = async (req, res) => {
  try {
    const allWorks = await portfolioModel.find();
    res.status(200).json(allWorks);
  } catch (error) {
    res.status(500).json({ message: "Can't find your works" });
  }
};

const getWorkById = async (req, res) => {
  const { id } = req.params;
  try {
    const workById = await portfolioModel
      .findById(id)
      .exec();
    res.status(200).json(workById);
  } catch (error) {
    res.status(404).json({ error: "Sorry, can't find this work" });
  }
};

// const postWork = async (req, res) => {
//   const { body } = req;
//   try {
//     const newWork = new portfolioModel(body);
//     await newWork.save();
//     res.status(200).json(newWork);
//   } catch (error) {
//     res.status(500).json({ message: "Sorry, can't post your work" });
//   }
// };

// const postWork = async (req, res) => {
//   const { body } = req;

//   try {
//     const result = await cloudinary.uploader.upload(req.body.image, {
//       folder: "portfolio", // Replace with your desired Cloudinary folder
//       resource_type: "auto", // This will automatically detect the resource type (image, video, raw, etc.)
//     });

//     body.image = result.secure_url;

//     const newWork = new portfolioModel(body);
//     await newWork.save();
//     res.status(200).json(newWork);
//   } catch (error) {
//     console.error("Error posting work:", error);
//     res.status(500).json({ message: "Sorry, can't post your work" });
//   }
// };

const postWork = async (req, res) => {
  const { body } = req;

  try {
    // Assuming you have an input field with the name 'image' in your form
    // const { image } = body;

    // Update 'images' URLs directly
    body.images = body.images.map(imgUrl => imgUrl);

    // Update 'technologies' images URLs directly
    body.technologies.forEach(tech => {
      if (tech.image) {
        tech.image = tech.image;
      }
    });

    const newWork = new portfolioModel(body);
    await newWork.save();
    res.status(200).json(newWork);
  } catch (error) {
    console.error("Error posting work:", error);
    res.status(500).json({ message: "Sorry, can't post your work" });
  }
};

module.exports = {
  getAllWorks,
  getWorkById,
  postWork,
};
