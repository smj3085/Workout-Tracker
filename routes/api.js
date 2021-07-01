const router = require("express").Router();
const mongoose = require("mongoose");
const Workout = require("../models/workout.js");

// Create new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

// Update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
	Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

// get workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
});

router.get("/api/workouts/range", (req, res) => {
	Workout.find()
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;