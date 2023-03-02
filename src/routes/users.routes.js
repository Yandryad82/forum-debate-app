const { Router } = require("express");
const Posts = require("../models/posts.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");

const router = Router();

router.get("/api/v1/users/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;
    const userPosts = await Users.findByPk(id, {
      attributes: ["username"],
      include: {
        model: Posts,
        attributes: ["title", "description", "categoryId"],
        include: {
          model: Categories,
          attributes: ["name"],
        },
      },
      
    });
    res.json(userPosts);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;