const yargs = require('yargs')
const { create, deleteStudent, readStudent, listStudents} = require('./student_crud')
yargs.command({
    command:'add',
    describe:'Add notes',
    //  options command deal with
    builder:{
        id:{
            describe:'This is title description in add command',
            demandOption:true,
            type:'string'
        },
        name:{
            describe:'This is body description in add command',
            demandOption:true,
            type:'string'
        },
        commment:{
            describe:'This is body description in add command',
            demandOption:false,
            type:'string'
        },
        degrees:{
            describe:'one or more degree of the student',
            demandOption:true,
            type: 'array'
        }
    },
    // code excuted when using add command
    handler:()=>{
        create({id: yargs.argv.id, name: yargs.argv.name, degrees: yargs.argv.degrees, comment: yargs.argv.comment})
    }
}).argv

yargs.command({
    command:'delete',
    describe:'Delete notes command',
    builder:{
        id:{
            describe:'This is body description in delete command',
            demandOption:true,
            type:'string'
        }
    },

    handler:()=>{
        deleteStudent(yargs.argv.id)
    }
}).argv
// read
yargs.command({
    command:'read',
    describe:'Read notes command',
    builder:{
       id:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        readStudent(yargs.argv.id)
    }
}).argv

//list
yargs.command({
    command:'list',
    describe:'List notes command',
    handler:()=>{
        listStudents()
    }
}).argv
// divinabolis9718@gmail.com
// 01204761068#Dp