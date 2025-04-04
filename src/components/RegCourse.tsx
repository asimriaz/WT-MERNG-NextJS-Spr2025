import React from "react";
import { RegCourseProps } from "../types";
import { api } from "../api";

export default function RegCourse({ regs }: RegCourseProps) {
  
	return (
		<>
			<table className="table table-bordered table-striped table-hover table-sm">
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
								<select >
									<option hidden></option>
								</select>
							</td>
							<td></td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
