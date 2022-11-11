const developers = [
    {
        index:0,
        name:"Брендан Эйх",
        work: "специалист в области информатики, программист, технический директор"
    },
    {
        index:2,
        name: "Джеймс Гослинг",
        work: "специалист в области информационных технологий"
    },
    {
        index:3,
        name: "Бьёрн Страуструп",
        work: "программист"
    }
]

const textIndex1 = developers.filter((person) => person.index ===  3); 
const textIndexName1 = textIndex1.map((person) => person.work);
 
const textIndex = developers.filter((person) => person.index ===  3); 
const textIndexName = textIndex.map((person) => person.name);

console.log(`${textIndexName} - ${textIndexName1}`);
