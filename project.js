//Hanged Man Game Jamie Collins

function hangedManGame() {
    //js chooses a random state
    //let states = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSSIPPI', 'MISSOURI',
      //  'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPHSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING'
    let states = ['TEXAS', 'MAINE','NEW YORK','IDAHO'
    ];
    const randomState = states[Math.floor(Math.random() * states.length)];
    let stateArray = randomState.split('');
    let hiddenAnswer = randomState.replace(/[A-Z]/g, '-');
    let hiddenArray = hiddenAnswer.split('');
    let strikes = 0;


    while (hiddenArray.includes('-') && strikes < 6) {
        //asks user for letter
        const readline = require("readline-sync");
        let letter = readline.question("Enter letter: ");
        let userLetter = letter.toUpperCase().substring(0, 1);

        //checks for users letter and if true or false
        let index = randomState.indexOf(userLetter) > -1;
        if (index === true) {
            //finds index of stateArray
            let stateIndex = stateArray.findIndex(
                item => item.indexOf(userLetter) > -1)

            //replaces - with users letter
            let answer = hiddenArray.splice(stateIndex, 1, userLetter)
            console.log(hiddenArray.join(''))

            if (hiddenArray.includes('-') === false) {
                console.log('You Win!');
                return;
            }

        } else if (index === false) {
            strikes += 1;
            if (strikes < 6) {
                console.log('Strikes: ' + strikes)
                let hangedMan = strikes;
                switch (hangedMan) {
                    case 1:
                        console.log('Head');
                        break;
                    case 2:
                        console.log('Torso')
                        break;
                    case 3:
                        console.log('Left Arm')
                        break;
                    case 4:
                        console.log('Right Arm')
                        break;
                    case 5:
                        console.log('Left Leg')
                        break;
                        console.log(hangedMan);
                }
                if (RegExp(/[a-z]/i).test(userLetter) === false) {
                    console.log('Please enter a valid letter!')
                }
            } else {
                console.log('Strikes: 6', '\nRight Leg', '\n- GAME OVER -', '\n The state was', randomState);
                return;
            }
        }
    }
}

hangedManGame();