const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    subjectId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    cardSetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Lesson", lessonSchema);
