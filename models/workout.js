const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: "Enter exercise type!"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name!"
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number, 
            distance: Number, 
        },
    ],
    // totalDuration: {
    //     type: Number, 
    //     default: 0,
    // }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
