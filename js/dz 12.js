const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (myobj) {
            let str = `Мне ${myobj.age} и я владею языками: `;
            // for (let key in myobj.skills.languages){
            //     str += myobj[key].toUpperCase;
            myobj.skills.languages.forEach((item) => {str += item.toUpperCase() + ' '})

            return str
    }
};
//
// function showExperience(plan) {
//     return plan.skills.exp
// };



// console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = ''
    for (let key in plan.skills.programmingLangs) {
        str += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`
    }
    return str
};

// console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));