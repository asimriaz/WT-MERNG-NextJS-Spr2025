import { useState } from "react";
import Student from "./Student";
import { Student as StudentType} from "../types";
import Semester from "./Semester";

export default function DataSheet() {
    const [student, setStudent] = useState<StudentType>({} as StudentType);
    const [semNo, setSemNo] = useState<number>(0);

    const getStudent= (args: {student: StudentType}) => {
        setStudent(args.student); 
    }

    const getSemNo = (semNo: number) => {
        setSemNo(semNo)
    }

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div style={{ flexGrow: 2 }}>
                <Student getStudent={getStudent} student={student}/>
                <div>&nbsp;</div>
                {Object.keys(student).length > 0 && <Semester getSemNo={getSemNo}/>}

            </div>
			<div style={{ flexGrow: 2 }}></div>
			<div style={{ flexGrow: 1 }}></div>
		</div>
	);
}
