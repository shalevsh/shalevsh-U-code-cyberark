import { faker } from '@faker-js/faker';

function makeHuman(number){
for (let index = 0; index < number; index++) {
    let obj={
    firstName: faker.name.firstName(),
    imageUrl: faker.image.avatar(),
    companyName:faker.company.name(),
    }
    console.log(obj)
}}
makeHuman(2) //prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe


