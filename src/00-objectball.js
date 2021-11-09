function gameObject(){
    // this has a nested obj
    let gameObj = {
        home: {
            teamname: "Brooklyn Nets",
            colors:["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1"
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                },
            },
        }, 
        away: {
            teamname:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                },
            },
        },
    }
return gameObj;
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamname'];
}
// console.log(homeTeamName());

// console.log(gameObject());

function numPointsScored(player){
    let object = gameObject();
    for(let lockey in object){
        // console.log(lockey);
        let teamObj = object[lockey];
        // this lists out the "Home"/away object values. (teamname, players, colors)
         for(let teamkey in teamObj){
             // This drills into values, teamkey is teamname, colors, player object.
             let innerTeamObj = teamObj[teamkey]
            //  console.log(innerTeamObj)
            // inner team obj represents the team string, color array, and player object.
             let playdat = innerTeamObj[player];
             if(typeof(playdat) === 'object'){
                return playdat['points'];
             }
        }
    }
}
           
function shoeSize(player){
    let object = gameObject();
    for(let lockey in object){
        let teamObj = object[lockey];
        // this lists out the "Home"/away object values. (teamname, players, colors)
         for(let teamkey in teamObj){
             // This drills into values, teamkey is teamname, colors, player object.
             let innerTeamObj = teamObj[teamkey]
            // inner team obj represents the team string, color array, and player object.
             let playdat = innerTeamObj[player];
             if(typeof(playdat) === 'object'){
                return playdat['shoe'];
             }
        }
    }
}
function teamColors(teamname){
    let object = gameObject();
    // console.log(object);
    for(let lockey in object){
        // console.log(lockey);
        let teamObj = object[lockey];
        // this lists out the "Home"/away object values. (teamname, players, colors)
        let takevalue;  
        for(let teamkey in teamObj){
             // This drills into values, teamkey is teamname, colors, player object.
             let innerTeamObj = teamObj[teamkey]
            //  console.log(innerTeamObj['colors']);
             if(innerTeamObj === teamname){
                takevalue = true;
                // so you know the team input is matched
             }
                 if (takevalue){
                     if(Array.isArray(innerTeamObj)){                
                         // so you know the color array is being referenced
                         return innerTeamObj;
                    }
             
                 }     
         }
    }
}

function teamNames(){
    // this is going to return an array of the team names.
    let object = gameObject();
    console.log(object);
    teamArr = [];
    for(let lockey in object){
        // console.log(lockey);
        let teamObj = object[lockey];
        // this lists out the "Home"/away object values. (teamname, players, colors)         
        for(let teamkey in teamObj){
            // This drills into values, teamkey is teamname, colors, player object.
            let innerTeamObj = teamObj[teamkey]
            if (typeof(innerTeamObj) === 'string'){
                teamArr.push(innerTeamObj);
            }

        }     
    }
    return teamArr
}

function playerNumbers(teamname){
    let object = gameObject();
    let numArr = [];
    // console.log(object);
    for(let lockey in object){
        // console.log(lockey);
        let teamObj = object[lockey];
        // this lists out the "Home"/away object values. (teamname, players, colors)
        let takevalue;  
        for(let teamkey in teamObj){
             // This drills into values, teamkey is teamname, colors, player object.
             let innerTeamObj = teamObj[teamkey]
            //  console.log(innerTeamObj['colors']);
             if(innerTeamObj === teamname){
                takevalue = true;
                // so you know the team input is matched
             }
                 if (takevalue){          
                     for(player in innerTeamObj){ 
                        let playdat = innerTeamObj[player];
                        if(typeof(playdat) === 'object'){
                            numArr.push(playdat['number']);
                        //    return playdat['points'];
                    }
                }
                 }     
         }
    }
return numArr;
}

function playerStats(player){
    let object = gameObject();
    for(let lockey in object){
        // console.log(lockey);
        let teamObj = object[lockey];
        // this lists out the "Home"/away object values. (teamname, players, colors)
         for(let teamkey in teamObj){
             // This drills into values, teamkey is teamname, colors, player object.
             let innerTeamObj = teamObj[teamkey]
            //  console.log(innerTeamObj)
            // inner team obj represents the team string, color array, and player object.
             let playdat = innerTeamObj[player];
             if(typeof(playdat) === 'object'){
                return playdat;
             }
        }
    }
}

function bigShoeRebounds(){
    // first find largest shoe size
    let object = gameObject();
    let bigshoe =0;
    let who;
    let count;
    for(let lockey in object){
        let teamObj = object[lockey];
         for(let teamkey in teamObj){
             let innerTeamObj = teamObj[teamkey]
            // inner team obj represents the team string, color array, and player object.
            // here you may want another for loop, but have logic to say (is this shoe size bigger?)
            for(player in innerTeamObj){

            let playdat = innerTeamObj[player];
            if(typeof(playdat) === 'object'){
                console.log(player)
                if(playdat['shoe'] > bigshoe){
                    bigshoe = playdat['shoe'];
                    console.log(bigshoe);
                    who = player;
                    count = playdat['rebounds'];
                }
             }
            } 

        }
    }
    // then return that persons rebounds
return count;
}

// console.log(numPointsScored("Bismak Biyombo"));
// console.log(shoeSize("Bismak Biyombo"));
// console.log(teamColors("Charlotte Hornets"));
// console.log(playerNumbers("Brooklyn Nets"));
// console.log(playerStats("Bismak Biyombo"));
console.log(bigShoeRebounds());