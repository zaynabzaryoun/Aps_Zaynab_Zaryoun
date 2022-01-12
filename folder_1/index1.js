const companies =[
    {name: "company 1", category: "financ", start: 1981, end: 2003},
    {name: "company 2", category: "retail", start: 1992, end: 2008},
    {name: "company 3", category: "auto", start: 1999, end: 2007},
    {name: "company 4", category: "retail", start: 1989, end: 2010},
    {name: "company 5", category: "technology", start: 2009, end: 2014},
    {name: "company 6", category: "financ", start: 1987, end: 2010},
    {name: "company 7", category: "auto", start: 1986, end: 1996},
    {name: "company 8", category: "technology", start: 2011, end: 2016},
    {name: "company 9", category: "retail", start: 1981, end: 1989}
];

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i<companies.length; i++){
//     console.log(companies[i]);
// }

//forEach

// companies.forEach(company => console.log(company));
// companies.forEach(company => console.log(company.name));

//filter
// let canDrink =[];
// for(let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(age => age>= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => company.category === "retail");
// console.log(retailCompanies);

// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));
// console.log(lastedTenYears);

//map
//creat array of caompany names[years]
// const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyName);

//sort 
// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1: -1));
// console.log(sortedCompanies);

// const sortAges = ages.sort((a,b)=> a-b);
// console.log(sortAges);

//reduce
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);
//tatol years for companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);
