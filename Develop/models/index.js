const Workout = require("./Workout");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter type of excercise"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name of excercise"
  },
  duration: {
    type: Number,
    trim: true,
    required: "Enter time"
  },
  weight: {
    type: Number,
    trim: true,
    required: "Enter weight used"
  },
  reps: {
    type: name,
    trim: true,
    required: "Enter how many reps"
  },
  sets: {
    type: Number,
    trim: true,
    required: "Enter how many sets"
  },
  day: {
    type: Date,
  default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports={Workout:require("./Workout")};
