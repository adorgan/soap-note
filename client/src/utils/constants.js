module.exports = {
  verbal_cues_options: {
    none: "no verbal cueing",
    minimum: "minimum verbal cueing",
    moderate: "moderate verbal cueing",
    maximum: "maximum verbal cueing",
  },
  fim_options: {
    independent: "independent",
    modified_independent: "modified independent",
    supervision: "supervision",
    minimum_assistance: "minimum assistance",
    moderate_assistance: "moderate assistance",
    maximum_assistance: "maximum assistance",
    total_assistance: "total assistance",
  },
  patient_name_options: {
    patient: "patient",
    client: "client",
    resident: "resident",
  },
  goal_options: {
    eating: "eating",
    grooming: "grooming",
    bathing: "bathing",
    upper_body_dressing: "upper body dressing",
    lower_body_dressing: "lower body dressing",
    toileting: "toileting",
    toilet_transfers: "toilet transfers",
    tub_transfers: "tub transfers",
  },
  position: {
    sitting: "sitting",
    standing: "standing",
  },
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

  plan: ["upgrade", "downgrade", "maintain"],
  armBikeNames: [
    "arm bike",
    "Omnicycle",
    "ergometer",
    "Colorado Cycle",
    "restorator",
  ],
  patientTerm: ["patient", "client", "resident"],
  extremities: { bue: "BUE", lue: "LUE", rue: "RUE" },
  muscleGroups: {
    bicep: "bicep",
    tricep: "tricep",
    deltoid: "deltoid",
    trapezius: "trapezius",
    pectoralis: "pectoralis major",
    wrist_flexor: "wrist flexor",
    wrist_extensor: "wrist extensor",
    grip: "grip",
    forearm_supinator: "forearm supinator",
    forearm_pronator: "forearm prontator",
  },
  functionalActivityEducationTopics: {
    purpose: "purpose",
    frequence: "frequency",
    duration: "duration",
    proper_technique: "proper technique",
    sequencing: "sequencing",
    rules: "rules and procedures",
    initiation: "initiation",
    termination: "termination",
  },
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
  groomingTasks: {
    brushing_teeth: "brushing teeth",
    brushing_dentures: "brushing dentures",
    rinsing_mouth: "rinsing mouth",
    washing_face: "washing/drying face",
    washing_hands: "washing/drying hands",
    combing_hair: "combing/brushing hair",
  },
  groomingVerbalCues: {
    toothpaste: "applying toothpaste to the toothbrush",
    screw_toothpast: "screwing/unscrewing the toothpaste cap",
    brush_teeth: "thoroughly brushing teeth",
    brush_dentures: "thoroughly brushing dentures",
    apply_soap: "applying soap to washcloth",
    dry_face: "drying face with dry towel",
    scrub_hands: "thoroughly scrubbing hands with soap",
    dry_hands: "drying hands with dry towel",
    brush_hair: "brushing/combing hair entirely",
  },
  interventionsGrooming: {
    weighted_handle: "weighted or builtup handle",
    adapted_opener: "adapted toothpaste opener",
    task_repetition: "task repetition",
    task_simplification: "task simplification",
    item_placement: "item placement",
    gmc: "gross motor coordination for reaching",
    fmc: "fine motor coordination",
  },

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
    patient_name_options: {
      patient: "patient",
      client: "client",
      resident: "resident",
    },
    arm_bike_name_options: {
      arm_bike: "arm bike",
      omnicycle: "omnicycle",
      restorator: "restorator",
    },
    goal_options: {
      eating: "eating",
      grooming: "grooming",
      bathing: "bathing",
      upper_body_dressing: "upper body dressing",
      lower_body_dressing: "lower body dressing",
      toileting: "toileting",
      toilet_transfers: "toilet transfers",
      tub_transfers: "tub transfers",
    },
    impairment_options: {
      strength: "strength",
      standing_balance: "standing balance",
      sitting_balance: "sitting balance",
      gross_motor_coordination: "gross Motor Coordination",
      fine_motor_coordination: "fine Motor Coordination",
      cognition: "cognition",
      endurance: "endurance",
      sensation: "sensation",
    },
    fim_options: {
      independent: "independent",
      modified_independent: "modified independent",
      supervision: "supervision",
      minimum_assistance: "minimum assistance",
      moderate_assistance: "moderate assistance",
      maximum_assistance: "maximum assistance",
      total_assistance: "total assistance",
    },
    plan_options: {
      upgrade: "upgrade",
      maintain: "maintain",
      downgrade: "downgrade",
    },
    verbal_cues_options: {
      none: "no verbal cueing",
      minimum: "minimum verbal cueing",
      moderate: "moderate verbal cueing",
      maximum: "maximum verbal cueing",
    },
    education_topics_options: {
      safety: "safety awareness",
      ue_position: "upper extremity position",
      pacing: "pacing strategies",
      task_sequencing: "task sequencing",
    },
    verbal_cues: {
      hand_placement: "hand placement",
      speed: "speed",
      posture: "posture",
      rest_breaks: "rest breaks",
      pursed_lip_breathing: "pursed lip breathing",
    },
  },
  exercise: {
    bandColors: {
      yellow: "yellow",
      red: "red",
      green: "green",
      blue: "blue",
      black: "black",
    },
    verbalCues: {
      counting: "counting repetitions",
      pacing: "pacing",
      form: "correct form",
      breathing: "breathing strategies",
    },
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
  grooming: {
    location: {
      bed: "bed with head of bed inclined",
      bathroom: "bathroom",
      eob: "edge of bed",
    },
    position: {
      sitting: "sitting",
      standing: "standing",
    },
  },
  bathing: {
    position: ["in shower chair", "on tub bench", "in wheelchair", "supine"],
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
      "use log rolling technique",
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
  dynamic_balance: {
    position: ["seated", "standing"],
    support: {
      parallel_bars: "parallel bars",
      standard_walker: "standard walker",
      two_wheel_walker: "2 wheel walker",
      rollator: "rollator",
      cane: "cane",
      unsupported: "unsupported",
    },
    tasks: {
      reach_cones: "reach for cones in various positions",
      balloon_toss: "play balloon toss",
      insert_pegs: "insert pegs into peg board",
      ball_toss: "toss a ball back and forth",
      bue_strengthening: "complete BUE strengthening exercises",
      fold_laundry: "fold laundry",
    },
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
    instruction: {
      weight_shift: "safely weight shift when reaching",
      maintain_support: "maintain one UE on support device",
      base_of_support: "establish a wide base of support",
      posture: "maintain an upright posture",
      looking_down: "avoid looking down",
    },
    intervention: {
      task_repetition: "task repetition",
      task_simplification: "task simplification",
      forward_chaining: "forward chaining",
      backward_chaining: "backward chaining",
      adaptive_equipment: "adaptive equipment",
      tactile_cueing: "tactile cueing",
      visual_cueing: "visual cueing",
      modeling: "modeling",
      task_modification: "task modification",
      adapt_environment: "adapting the environment",
    },
  },
  static_balance: {
    position: ["seated", "standing"],
    support: ["parallel bars", "RW", "cane"],
    tasks: [
      "reach for cones in various positions",
      "play balloon toss",
      "insert pegs into peg board",
      "toss a ball back and forth",
      "complete BUE strengthening exercises",
      "fold laundry",
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
      "maintain one UE on support device",
      "establish a wide base of support",
      "maintain an upright posture",
      "avoid looking down",
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
