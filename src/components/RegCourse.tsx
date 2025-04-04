import React from "react";
import { RegCourseProps } from "../types";
import { api } from "../api";

export default function RegCourse({ regs, grades }: RegCourseProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
    }  
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Code</th>
						<th>Title</th>
						<th>Cr</th>
						<th>Grade</th>
						<th>GPA</th>
					</tr>
				</thead>
				<tbody>
					{regs.map((reg, index) => (
						<tr key={index}>
							<td>{reg.course.code}</td>
							<td>{reg.course.title}</td>
							<td>{reg.course.crhr}</td>
							<td>
                            <select name={reg._id} value={reg.gradeid || ''} onChange={handleChange}>
									<option hidden></option>
									{grades.map((grade) => (
										<option key={grade.gradeid} value={grade.gradeid}>
											{grade.grade}
										</option>
									))}
								</select>
							</td>
							<td>{reg.gradeid !== null ? grades.find((g) => g.gradeid === reg.gradeid)?.gpa : ''}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
