/* 1) გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი */


var  X = 87;
     Y = 65;
console.log(X + Y);

/* გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks & 3) დაბეჭდეთ student ის სახელი */

var student = {
    Firstname: "MISHA",
    Lastname: "SIDAMONIDZE",
    Age: "28",
    Email: "test.teste@gmail.com",
    Marks: "Unknown",
}
console.log(student.Firstname);

/* 4) გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n. */

let M = 45;
    N = 23;
        if(M > N){
            console.log(M + N)
        } else {
            console.log(N)
        };

/* 5) გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! ) */

let studentName = "MISHA";
console.log("Rise and shine", studentName);


/* 6) გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, 
თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus) */

let Salary = 1500
    Bonus = 4500
        if (Salary >= 2000) {
            Bonus = 0
        }
        else {
            Bonus = Salary*0.1
        }
        console.log(Bonus);

/* 7) გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c. */

let A = 23
    B = A/2
    C = A + B
console.log(C);


 /*8) გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. */ 

const Phones = [
    "Iphone",
    "Samsung",
    "Pixel",
    "Huawei",
    "Xiaomi"
]
console.log(Phones);