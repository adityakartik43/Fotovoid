import imageModel from "../models/image.model.js";

const uploadImage = async (req, res) => {
  const image = new imageModel({
    url: req.file.path,
    public_id: req.file.filename,
    user: req.user.id,
    category: req.body,
  });

  await image.save();
  res.json({
    message: `Image uploaded`,
    image,
  });
};

const getRandomImages = async (req, res) => {
  try {
    const images = await imageModel.aggregate([{ $sample: { size: 1 }}]);
    
    const randomImg = images[0];
    const imageUrl = randomImg.url;

    res.send(imageUrl);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

const getUserImage = async (req, res) => {
  const images = await imageModel.find({
    user: req.user.id,
  });
  res.json(images);
};

export { uploadImage, getUserImage, getRandomImages };
