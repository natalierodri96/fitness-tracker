const router = require("express").Router();
const db = require("../models/");

// Get previous workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Adding the new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//update workouts by id
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
// Get most recent 5 workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ _id: -1 })
    .limit(5)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;