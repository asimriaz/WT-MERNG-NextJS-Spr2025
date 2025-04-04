export type Student = {
    regno: string,
    studentname: string,
    fathername: string
}


export type StudentProps = {
    getStudent: (args: {
        student: Student, 
    }) => void
    student: Student
}

export type SemesterProps = {
    getSemNo: (semNo: number) => void
}

export type Course = {
    courseid: number,
    code: string,
    title: string,
    crhr: number,
    semester: number
  }
  
  export type SemetserCoursesProps = {
      semno: number
  }