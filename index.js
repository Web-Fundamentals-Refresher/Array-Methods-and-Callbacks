import { fifaData } from './fifa.mjs';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// fifaData.forEach(function(item){
//     console.log(item.Stage);
// })



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){

    return data.filter(item => item.Stage ==='Final')
      };

console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`,
 and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {
    return getFinals(data).map(item => item.Year);
}

console.log(getYears(fifaData));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data) {
    let finals = getFinals(data);
    let winners = finals.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name']
        } else if(item['Home Team Goals'] < item['Away Team Goals']){
            return item['Away Team Name']
        } else {
            return item['Win Conditions']
        }
       
    })
    return winners;

};

console.log(getWinners(fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data) {
    let winners = getWinners(data);
    let years = getYears(data);
    let byYear = winners.map((country, index) => {
        return `In ${years[index]}, ${country} won the world cup!`
    })
    return byYear
};

console.log(getWinnersByYear(fifaData));

/* Task 6: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, country) {
    let finals = getFinals(data);
    let winners = finals.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Initials']
        } else if(item['Home Team Goals'] < item['Away Team Goals']){
            return item['Away Team Initials']
        } else {
            return item['Win Conditions']
        }

    });
    let byNumber = winners.reduce((acc, item) => {
        if(item === country){
            return acc + 1
        }
        return acc
    }, 0)
    return byNumber;
};

console.log(getCountryWins(fifaData,'FRA'));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals 
and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
