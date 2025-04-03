import { db } from './models/index.js'

db.Student.find()
    .then(res => console.log(JSON.stringify(res, null, 2)))
    .then(() => process.exit(0))