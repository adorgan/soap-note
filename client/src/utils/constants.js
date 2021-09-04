module.exports = {
    assessments: {
        balance: [
            "normal",
            "good",
            "good-",
            "fair+",
            "fair",
            "fair-",
            "poor+",
            "poor",
            "poor-",
        ],
        care: [
            "Independent",
            "Setup or Clean Assistance",
            "Supervision",
            "Partial/Moderate Assistance",
            "Substantial/Maximal Assistance",
            "Dependent",
        ],
        coordination: [
            "normal",
            "good",
            "good-",
            "fair+",
            "fair",
            "fair-",
            "poor+",
            "poor",
            "poor-",
        ],
        fim: [
            "independent",
            "modified independent",
            "supervision",
            "minimum assistance",
            "moderate assistance",
            "maximum assistance",
            "total assistance",
        ],
        verbalCues: [
            "no verbal cueing",
            "minimal verbal cueing",
            "moderate verbal cueing",
            "maximum verbal cueing",
            "total verbal cueing",
        ],
    },
    goals: [
        "eating",
        "grooming",
        "upper body dressing",
        "lower body dressing",
        "toileting",
        "toilet transfers",
        "tub transfers",
    ],

    plan: ["upgrade", "downgrade", "maintain"],
    armBikeNames: [
        "arm bike",
        "Omnicycle",
        "ergometer",
        "Colorado Cycle",
        "restorator",
    ],
    patientTerm: ["patient", "client", "resident"],
    extremities: ["BUE", "LUE", "RUE"],
    muscleGroups: [
        "bicep",
        "tricep",
        "deltoid",
        "trapezius",
        "pectoralis major",
        "wrist flexor",
        "wrist extensor",
        "grip",
        "forearm supinator",
        "forearm prontator",
    ],
    functionalActivityEducationTopics: [
        "purpose",
        "frequency",
        "duration",
        "proper technique",
        "sequencing",
        "rules and procedures",
        "initiation",
        "termination",
    ],
    upperBodyDressingVerbalCues: [
        "clothing placement prior to donning",
        "dressing affected extremity first",
        "undressing the affected side last",
        "pulling sleeves up to shoulders before donning",
        "pulling shirt down in back all the way",
        "use dressing stick for limited reach",
        "shift weight appropriately",
    ],
    interventionsUBDressing: [
        "adaptive equipment: reacher",
        "adaptive equipment: dressing stick",
        "repetition",
        "task simplification",
        "weight shifting practice",
        "challenge dynamic sitting balance",
    ],
    groomingTasks: [
        "brushing teeth",
        "brushing dentures",
        "rinsing mouth",
        "washing/drying face",
        "washing/drying hands",
        "combing/brushing hair",
    ],
    groomingVerbalCues: [
        "applying toothpaste to the toothbrush",
        "screwing/unscrewing the toothpaste cap",
        "thoroughly brushing teeth",
        "thoroughly brushing dentures",
        "applying soap to washcloth",
        "drying face with dry towel",
        "thoroughly scrubbing hands with soap",
        "drying hands with dry towel",
        "brushing/combing hair entirely",
    ],
    interventionsGrooming: [
        "weighted or builtup handle",
        "adapted toothpaste opener",
        "task repetition",
        "task simplification",
        "item placement",
        "gross motor coordination for reaching",
        "fine motor coordination",
    ],
    position: ["seated", "standing", "supine with head of bed elevated"],
    location: ["bedroom", "bathroom"],
    toiletTransfer: {
        instruction: [
            "reach back prior to sitting",
            "push off with upper extremities from the seated surface",
            "position the wheelchair at a 45 degree angle to the toilet",
            "use grab bars to assist with pulling up to stand",
            "ensure bathroom lights are turned on",
            "use non-slip footwear to prevent slipping",
            "lock wheelchair breaks prior to standing",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipement use",
            "verbal cueing",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "slide board",
        ],
    },
};
