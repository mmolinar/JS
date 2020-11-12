const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let bornSeventies =  entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year >= 1970 && entrepreneur.year <= 1980;
});

console.log(bornSeventies)

function getFullName(entrepreneur) {
  let fullname = [entrepreneur.first,entrepreneur.last].join(" ");
  return fullname;
}

let nameLast = entrepreneurs.map(getFullName);

console.log(nameLast)

function getAge(entrepreneur) {
  let age = 2020 - entrepreneur.year;
  return age;
}

let entAge = entrepreneurs.map(getAge);

console.log(entAge)

let sortLast = entrepreneurs.sort(function(a, b) {
  let nameA = a.last;
  let nameB = b.last;
  if (nameA < nameB) {
    return -1; //nameA comes first
  }
  if (nameA > nameB) {
    return 1; // nameB comes first
  }
  return 0;  // names must be equal
});

console.log(sortLast)