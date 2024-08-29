const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      // await User.deleteMany({ _id: { $in: thought.users } }); //users??
      res.json({ message: 'Thoughts and reactions deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a course
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
//create reaction
async createReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } }, // push the reaction in the array
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: "No thought with this id!" });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},
//delete reaction
async deleteReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } }, // delete the reaction in the array, by the id
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: "No thought with this id!" });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},

};
