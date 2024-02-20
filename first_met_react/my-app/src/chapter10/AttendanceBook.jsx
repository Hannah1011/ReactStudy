import React from "react";
{/*map()함수에서는 Element에 key값이 필수다!!!*/}



const students = [
    {
        id:1,
        name: "Hannah"
    },
    {
        id:2,
        name: "Momo"
    },
    {
        id:3,
        name: "Gui"
    },
    {
        id:4,
        name: "Jeff"
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student)=>{
                {/* 방법1. key를 포맷팅 된 문자열로 변경*/}
                return <li key={'student-id-${student.id}'}>{student.name}</li>;
            })}
            
            {/* 방법2. key를 index로 변경
             {students.map((student, index) => {
                return <li key = {index}>{student.name}</li>;
              })} */}
        </ul>
    );
}

export default AttendanceBook;