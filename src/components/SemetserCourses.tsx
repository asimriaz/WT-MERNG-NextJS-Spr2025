import { useEffect, useState } from "react";
import { Course, SemetserCoursesProps } from "../types";

import { api } from "../api";

export default function SemetserCourses({ semno }: SemetserCoursesProps) {
	const [courses, setCourses] = useState<Course[]>([]);

	useEffect(() => {
		api.get(`/api/courses/${semno}`).then((res) => {
			setCourses(res.data);
		});
	}, [semno]);

	return (
		<>
			<table>
				<tbody>
					<tr>
						<th>
							<input type="checkbox" name="master" />
						</th>
						<th>Code</th>
						<th style={{ width: "350px" }}>Title</th>
						<th>Cr</th>
					</tr>
					{courses.map((course) => (
						<tr key={course.courseid}>
							<td>
								<input type="checkbox" name="courseid" value={course.courseid} />
							</td>
							<td>{course.code}</td>
							<td>{course.title}</td>
							<td>{course.crhr}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
