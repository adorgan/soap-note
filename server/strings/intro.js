const str =`In order to improve the patients safety and independence with ADLs, the
            therapist instructed the resident in the arm cycle.`;

const inOrderTo = [
    'In order to',
    'To',
    'With the goal to',
];

const improve = [
    'improve',
    'progress',
    'increase',
    'upgrade',
    'maximize',
    'correct',
    'target',
]

const safetyAndIndependenceWith = [
    'safety and independence with',
]

const instructed = [
    'instructed',
    'trained',
    'guided',
    'educated',

]

const inSafeCompletionOf = [
    'in safe completion of',
    'to complete',
    'to safely complete',
    'in proper technique for completing',
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const makeIntro = (client, activity, impairments, goals) => {

    console.log(`${inOrderTo[getRandomInt(inOrderTo.length)]}
    ${improve[getRandomInt(improve.length)]}
    the client's ${
        safetyAndIndependenceWith[
            getRandomInt(safetyAndIndependenceWith.length)
        ]
    }
    ADLs, the therapist ${instructed[getRandomInt(instructed.length)]} 
    the client ${inSafeCompletionOf[getRandomInt(inSafeCompletionOf.length)]}
    the arm bike.`);

}

makeIntro();
