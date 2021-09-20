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
    position_exercise: ["seated", "standing"],
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
            "adaptive equipment",
            "verbal cueing",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "slide board",
        ],
    },
    armBike: {
        verbalCues: [
            "hand placement",
            "speed",
            "posture",
            "rest breaks",
            "pursed lip breathing",
        ],
    },
    exercise: {
        bandColors: ["yellow", "red", "green", "blue", "black"],
        verbalCues: [
            "counting repetitions",
            "pacing",
            "correct form",
            "breathing strategies",
        ],
    },
    eating: {
        position: [
            "supine with head of bed elevated 90 degrees",
            "sitting in wheelchair",
            "sitting in chair",
            "sitting in recliner",
        ],
        location: ["in bed", "in patient room", "in dining room"],
        tasks: [
            "opening containers",
            "utilizing silverware",
            "bringing food to mouth",
            "bringing drink to mouth",
            "cleaning up",
        ],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "position food tray within easy reach",
            "place napkin on lap",
            "use dominant UE for picking up food items",
            "safely cut food into small bites",
            "ensure food is swallowed before eating more",
            "drink small sips",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
            "placing all food within field of vision",
        ],
        adaptive_equipment: [
            "built-up handles for silverware",
            "spill guard for plate",
            "non-spill cup",
        ],
    },
    bathing: {
        position: [
            "in shower chair",
            "on tub bench",
            "in wheelchair",
            "supine",
        ],
        location: ["bathroom", "shower room", "bed"],
        tasks: [
            "washing and drying face/neck",
            "washing and drying upper body",
            "washing and drying lower body",
            "washing and drying feet",
            "washing and drying hair",
        ],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "hold on to grab bars when standing",
            "use hand-held shower head for safety",
            "thoroughly wash body parts",
            "rinse all soap off",
            "dry body in shower stall",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        adaptive_equipment: [
            "long-handle sponge",
            "grab bars",
            "shower seat",
            "tub transfer bench",
            "non-slip bath mat",
        ],
    },
    upper_dressing: {
        position: ["sitting edge of bed", "in chair", "in wheelchair"],
        location: ["bathroom", "patient room"],
        tasks: [
            "donning a t-shirt",
            "donning a button-down shirt",
            "donning a pullover",
            "donning a bra",
            "doffing a t-shirt",
            "doffing a button-down shirt",
            "doffing a pullover",
            "doffing a bra",
        ],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "dress weaker extremity first",
            "undress weaker extremity last",
            "slide sleeves up to shoulders before pulling head through",
            "use dressing stick to pull shirt down in back",
            "fasten bra in front first, then slide around body",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        adaptive_equipment: ["dressing stick", "grabber"],
    },
    lower_dressing: {
        position: ["sitting edge of bed", "in chair", "in wheelchair"],
        location: ["bathroom", "patient room"],
        tasks: [
            "donning pants",
            "donning shorts",
            "donning socks",
            "donning shoes",
            "doffing pants",
            "doffing shorts",
            "doffing socks",
            "doffing shoes",
        ],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "dress weaker extremity first",
            "undress weaker extremity last",
            "use figure 4 technique",
            "use reacher to lower pant let to floor",
            "don socks with sock aid",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        adaptive_equipment: [
            "dressing stick",
            "grabber",
            "long shoe horn",
            "sock aid",
        ],
    },
    toileting: {
        position: ["on toilet", "on bedside commode", "on bedpan"],
        location: ["bathroom", "patient room", "bed"],
        tasks: [
            "removing lower body clothing",
            "cleaning perineal area",
            "donning lower body clothing",
        ],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "utilize grab bar to steady self over toilet",
            "use grab bars or over toilet commode arms when transferring",
            "pull pants up as high as possible in sitting before standing",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        adaptive_equipment: ["grab bars", "bottom buddy"],
    },

    toilet_transfer: {
        location: ["bathroom", "patient room", "therapy room"],
        tasks: [
            "sit -> stand",
            "wheelchair -> toilet",
            "wheelchair -> bedside commode",
            "toilet -> wheelchair",
            "bedside commode -> wheelchair",
        ],
        aids: ["2 wheel walker", "Rollator", "grab bars", "wheelchair"],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "lock wheelchair breaks prior to standing",
            "position the wheelchair near toilet",
            "pull up on grab bars for support",
            "reach back for commode arms when sitting",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        adaptive_equipment: ["grab bars", "RW"],
    },
    tub_transfer: {
        location: ["bathroom", "shower room", "therapy room"],
        tasks: [
            "sit -> stand",
            "wheelchair -> tub bench",
            "wheelchair -> shower chair",
            "tub bench -> wheelchair",
            "shower chair -> wheelchair",
        ],
        aids: ["2 wheel walker", "Rollator", "grab bars", "wheelchair"],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "lock wheelchair breaks prior to standing",
            "position the wheelchair near shower stall",
            "pull up on grab bars for support",
            "reach back for commode arms when sitting",
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        adaptive_equipment: ["grab bars", "shower chair", "tub bench"],
    },
    bed_mobility: {
        location: ["patient room", "therapy room"],
        tasks: [
            "rolling side to side",
            "supine -> edge of bed",
            "edge of bed -> supine",
        ],
        aids: ["bed rail", "headboard"],
        education: [
            "purpose",
            "frequency",
            "duration",
            "proper technique for completion",
            "task sequencing",
            "rules and procedures",
            "initiation",
            "termination",
        ],
        instruction: [
            "use bed rails for leverage",
            "slide feet off edge of bed prior to sitting up",
            "push off of bed surface when transferring upright",
            "use log rolling technique"
        ],
        intervention: [
            "task repetition",
            "task simplification",
            "forward chaining",
            "backward chaining",
            "adaptive equipment",
            "tactile cueing",
            "visual cueing",
            "modeling",
            "task modification",
            "adapting the environment",
        ],
        
    },
};
