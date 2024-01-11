'use strict';
{
    console.log([11,2,22,1].sort((a, b) => a - b))
}
//1. make a string out of an array
{
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.toString());
}
//2. make a array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(', '));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2));

    //splice, shift 메소드는 배열 내 수정. slice는 반환된 배열을 새 메모리에 저장.
  }
  {
    const array = [1, 2, 3, 4, 5];
    array.shift();
    array.shift();
    console.log(array);
  }
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.splice(2))
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const HS = students.find(function(stundent){
        return stundent.score === 90;
    })
    console.log(HS);
  }
  
  // Q6. make an array of enrolled students
  {
    const ES = students.filter(function(student){
        return student.enrolled === true;
        //굳이 === true를 쓸 필요가 없다. 애초에 true가 조건을 만족시키는 것이기 때문
    })
    console.log(ES);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    let SC = students.map((student) => {return student.score;})
    console.log(SC);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const LS = students.some((value)=>value.score < 50);
    console.log(LS);
    //some과 every는 불리언 타입. 조건에 따라 있는지 없는지 확인만 한다. 반면 find는 동적으로 타입을 바꿔 값을 리턴.
  }
  
  // Q9. compute students' average score
  {
    const AS = students.reduce((prev, curr)=>prev + curr.score, 0)
    console.log(AS / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {

    let SC = students
        .map((student) => student.score)
        .filter((score)=>score > 50)
        .join(', ')
    console.log(SC);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    let SC = students.map((student)=>{return student.score;})
    SC.sort((a, b)=> a-b)
    console.log(SC);
  }