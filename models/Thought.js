const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');
const reactionSchema  = require('./Reaction');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength:1,
      maxlength:280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp=>dayjs(timestamp).format('DD/MM/YYYY'), 
    },
    username: {
      type: String,
      required:true
    },
    reactions: [
      reactionSchema
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
