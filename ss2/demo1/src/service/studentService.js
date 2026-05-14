
const studentList = [
    {
        id:1,
        name:"chánh1"
    },
    {
        id:2,
        name:"chánh2"
    },
    {
        id:3,
        name:"chánh2"
    }
];

export function getAll(){
    return [...studentList]
}

export function deleteById(id) {

    // call API
    for (let i = 0; i < studentList.length; i++) {
        if (id == studentList[i].id) {
            studentList.splice(i, 1);
            break;
        }
    }
}
export function addNew(student){
    studentList.push(student);
}
