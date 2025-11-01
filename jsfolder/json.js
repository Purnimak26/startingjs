const course={
    courseName:'JS_HINDI',
    price:999,
    courseInstructor:'Hitesh'
}
console.log(course.courseInstructor);
//const{}=course
const {courseInstructor:instructor}=course;
console.log(instructor)

//destructuring mostly used in react
//whenever see {} means destructuring
/*const navbar=({company})=>{

}
navbar(company="hitesh");
*/

/*API: values coming from backend
apna kaam kisi aur ke sar par daalna
int past,values cva=came in xml format
now comes in json
*/
/*{
    "name":"Purnima",
    "course":'JS',
    "price":0
}
    */


