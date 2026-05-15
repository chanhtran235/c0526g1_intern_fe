
const studentList = [
    {
        id:1,
        name:"chánh1",
        gender: true,
        subjects:["JS","JAVA"],
        class:{
            id: 1,
            name: "C0226G1"
        }
    },
    {
        id:2,
        name:"Hằng",
        gender: false,
        subjects:["JS","JAVA","SQL"],
        class:{
            id: 1,
            name: "C0326G1"
        }
    },
    {
        id:3,
        name:"Hải",
        gender: true,
        subjects:["JS","JAVA","SQL","PHP"],
        class:{
            id: 1,
            name: "C0426G1"
        }
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

export function getById(id) {
    // call API
    for (let i = 0; i < studentList.length; i++) {
        if (id == studentList[i].id) {
           return studentList[i];
        }
    }
    return null;
}
export function addNew(student){
    studentList.push(student);
}
