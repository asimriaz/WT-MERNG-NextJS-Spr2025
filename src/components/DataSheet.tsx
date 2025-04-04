import { useState } from "react";
import Student from "./Student";
import { Student as StudentType } from "../types";
import Semester from "./Semester";
import SemetserCourses from "./SemetserCourses";
import { api } from "../api";

export default function DataSheet() {
	const [student, setStudent] = useState<StudentType>({} as StudentType);
	const [semNo, setSemNo] = useState<number>(0);
    const [courseids, setCourseIds] = useState<number[]>([]);

	const getStudent = (args: { student: StudentType }) => {
		setStudent(args.student);
	};

	const getSemNo = (semNo: number) => {
		setSemNo(semNo);
	};

    const getCourseIds = ( args : { name: string; value: number; crsIds: number[] }) => {
        if(args.name === "master") {
            setCourseIds(args.crsIds)
        }else{
            let index = courseids.indexOf(args.value);
            setCourseIds(index === -1 ? [...courseids, args.value] : courseids.filter(id => id !== args.value))
        }
    }

    const addRegs = () => {
        api.post(`/api/regs/add`,{
            regno: student.regno,
            courseids: JSON.stringify(courseids)
        }).then((res) => {
            console.log(res.data)   
        })
    }    

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div style={{ flexGrow: 2 }}>
				<Student getStudent={getStudent} student={student} />
				<div>&nbsp;</div>
				{Object.keys(student).length > 0 && <Semester getSemNo={getSemNo} />}
                <div>&nbsp;</div>
                    {semNo > 0 && <SemetserCourses 
                                    semno={semNo}
                                    getCourseIds={getCourseIds}
                                    cids={courseids}
                                    addRegs={addRegs} 
                                />}

			</div>
			<div style={{ flexGrow: 2 }}></div>
			<div style={{ flexGrow: 1, overflowY: "auto", height: "95vh" }}>
				<pre style={{ alignItems: "left" }}>{JSON.stringify({ student, semNo, courseids }, null, 4)}</pre>
			</div>
		</div>
	);
}
