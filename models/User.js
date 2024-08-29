const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { Thought } = require('./Thought')
// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      matched: [/.+@.+\..+/, "Must be valid email"]
    },
    thoughts: [
   {
    type: Schema.Types.ObjectId,
    ref: 'thought'
   }],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref:'user'
    }
  ]},
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual('friendCount').get(function (){
  return this.friends.length;
})
const User = model('user', userSchema);

module.exports = User;
