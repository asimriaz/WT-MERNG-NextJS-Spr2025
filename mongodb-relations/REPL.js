import { db } from "./models/index.js";

// db.Student.find()
// .populate('marks')
// .then(res => console.log(JSON.stringify(res, null, 4)))
// .then(() => process.exit());

// db.Mark.find()
// .populate('student head')
// .then(res => console.log(JSON.stringify(res, null, 4)))


// db.Student.find()
//     .then(students => {
//         students.forEach(async student => {
//             let result = await db.Mark.updateMany(
//                 { regno: student.regno },
//                 { $set: { student: student._id } },
//                 { new: true }
//             )
//             console.log(result);

//             //console.log(student.regno)
//         })
//     })




// db.Head.find()
//     .then(heads => {
//         heads.forEach(async head => {
//             let result = await db.Mark.updateMany(
//                 { hid: head.hid },
//                 { $set: { head: head._id } },
//                 { new: true }
//             )
//             console.log(result);

//             //console.log(student.regno)
//         })
//     })

// db.Student.find().then( students => {
//     students.forEach(async student =>{
//         let ids = await db.Mark.find({ regno: student.regno }).select({_id: 1});
//         let result = await db.Student.updateOne(
//             { regno: student.regno }, 
//             { $push: { marks: ids } }, 
//             {new: true}
//         )

//         console.log(result);

//     })
// })


db.Student.aggregate([
    {
        $lookup:{
            from: "marks", 
            foreignField: "regno", 
            localField: "regno", 
            as: "obtain"
        }
    }, 
    {
        $unwind: "$obtain"
    }
])
.then(res => console.log(JSON.stringify(res, null, 4)))
.then(() => process.exit());
