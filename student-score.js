const students=[];
function addStudent(name, score){
    score= Number(score);
    score=score ?? 0;
    name=name.trim().toUpperCase();
    students.push({name, score})
}
function getGrade(){
    return students.map((student)=>{
        let grade="f";
        if(student.score>=90) grade="A";
        else if(student.score>=75) grade="B";
        else if(student.score>=30) grade="D";
        else grade="F";
        return {...student, grade};
    })
}
function getTopScores(){
    return students.filter(student => student.score >= 75);
}
function findStudent(name){
    name=name.trim().toUpperCase();
    return students.find(student => student.name ==name);
}
function failstudents(){
    students.some(student => student.score <30);

}
function displayall(){
    const grades=getGrade();
    console.log("student data");
    console.log("all student with grades");
    console.log("name | score |grade");
    grades.forEach((student)=>{
        console.log(`${student.name} | ${student.score} | ${student.grade}`);
    })
}
addStudent("john", 91);
addStudent("ravi", 82);
addStudent("sneha",44);
addStudent("aarthi", 29);
displayall();
console.log("\n top scores", getTopScores());
console.log("\n find student", findStudent("ravi"));
console.log("\n any failures:", failstudents() ? "no students failed" : "yes some students failed");