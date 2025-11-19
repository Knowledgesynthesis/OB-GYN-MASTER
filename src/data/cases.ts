import { Case } from '@/types'

export const cases: Case[] = [
  {
    id: 'prenatal-gdm-case',
    moduleId: 'prenatal',
    title: 'GDM Screening and Diagnosis',
    scenario: 'A 32-year-old G2P1 at 26 weeks gestation presents for routine prenatal care. She has no complaints. Her BMI is 34. Her 1-hour glucose challenge test result from yesterday is 165 mg/dL.',
    questions: [
      {
        id: 'prenatal-gdm-q1',
        question: 'What is the next best step in management?',
        options: [
          'Diagnose gestational diabetes and start insulin',
          'Start diabetic diet and recheck in 1 week',
          'Order 3-hour oral glucose tolerance test',
          'Repeat 1-hour GCT in 2 weeks',
          'No further testing needed'
        ],
        correctAnswer: 2,
        rationale: 'An abnormal 1-hour GCT (>130-140 mg/dL) is a screening test, not diagnostic. The next step is a 3-hour OGTT to confirm or rule out gestational diabetes. Two or more abnormal values on the 3-hour test are required for diagnosis.',
        references: ['ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus']
      },
      {
        id: 'prenatal-gdm-q2',
        question: 'The 3-hour OGTT shows: Fasting 98 mg/dL, 1-hr 195 mg/dL, 2-hr 170 mg/dL, 3-hr 145 mg/dL. What is your diagnosis and initial management?',
        options: [
          'Normal test, no GDM',
          'GDM diagnosed, start metformin',
          'GDM diagnosed, start lifestyle modifications with glucose monitoring',
          'Borderline, repeat test in 2 weeks',
          'Refer to endocrinology immediately'
        ],
        correctAnswer: 2,
        rationale: 'Three values are abnormal on this 3-hour OGTT (normal: fasting <95, 1-hr <180, 2-hr <155, 3-hr <140), confirming GDM diagnosis. Initial management is lifestyle modifications (diet and exercise) with home glucose monitoring. Insulin or medication is added if targets are not met.',
        references: ['ACOG Practice Bulletin No. 190']
      }
    ],
    learningPoints: [
      '1-hour GCT is a screening test; 3-hour OGTT is diagnostic',
      'Two or more abnormal values on 3-hour OGTT diagnose GDM',
      'Initial GDM management: lifestyle modifications + glucose monitoring',
      'Target glucose: fasting <95 mg/dL, 1-hour postprandial <140 mg/dL',
      'Consider early GDM screening in high-risk patients (BMI >30, prior GDM, family history)'
    ]
  },
  {
    id: 'hypertension-severe-preeclampsia',
    moduleId: 'hypertension',
    title: 'Severe Preeclampsia Management',
    scenario: 'A 28-year-old G1P0 at 32 weeks gestation presents to L&D with severe headache and visual changes for the past 2 hours. BP is 172/118. She has 3+ proteinuria on dipstick. Labs show platelets 95,000, Cr 1.3, AST 85.',
    questions: [
      {
        id: 'htn-severe-q1',
        question: 'What is the most appropriate immediate management?',
        options: [
          'Admit for observation, repeat labs in morning',
          'Start magnesium sulfate and antihypertensive medication',
          'Immediate cesarean delivery',
          'Discharge with oral antihypertensives and close follow-up',
          'IV fluids and rest, reassess in 4 hours'
        ],
        correctAnswer: 1,
        rationale: 'This patient has preeclampsia with severe features (BP ≥160/110, thrombocytopenia, elevated Cr, elevated LFTs, cerebral symptoms). Immediate management includes magnesium sulfate for seizure prophylaxis and IV antihypertensives to prevent stroke. Delivery planning comes after maternal stabilization.',
        references: ['ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia']
      },
      {
        id: 'htn-severe-q2',
        question: 'After starting magnesium sulfate and achieving BP control, what is the timing for delivery?',
        options: [
          'Immediate delivery regardless of gestational age',
          'Deliver at 34 weeks after betamethasone course',
          'Deliver after maternal stabilization at this gestational age (32 weeks)',
          'Expectant management until 37 weeks if stable',
          'Wait for spontaneous labor'
        ],
        correctAnswer: 2,
        rationale: 'At ≥32 weeks with severe features and maternal instability (severe symptoms), delivery should occur after maternal stabilization. Betamethasone should be given if <34 weeks. Expectant management is NOT appropriate with maternal symptoms of severe preeclampsia.',
        references: ['ACOG Practice Bulletin No. 222']
      }
    ],
    learningPoints: [
      'Severe features require immediate magnesium and BP control',
      'Magnesium loading dose: 4-6g IV over 15-20 min, then 2g/hr',
      'BP goal: <160/110 to prevent maternal stroke',
      'Delivery timing: ≥34 weeks with severe features → deliver after stabilization',
      'Maternal instability overrides conservative management',
      'Continue magnesium for 24 hours postpartum'
    ]
  },
  {
    id: 'labor-arrest-case',
    moduleId: 'labor',
    title: 'Arrest of Dilation',
    scenario: 'A 25-year-old G1P0 at 39 weeks in active labor has been 7 cm dilated for the past 5 hours. She has an epidural and is comfortable. Contractions are 3-4 per 10 minutes on the monitor. Fetal heart tracing is Category I.',
    questions: [
      {
        id: 'labor-arrest-q1',
        question: 'What is the diagnosis?',
        options: [
          'Normal labor progression',
          'Prolonged latent phase',
          'Arrest of dilation',
          'Arrest of descent',
          'Failed induction'
        ],
        correctAnswer: 2,
        rationale: 'Arrest of dilation is defined as no cervical change in active labor for ≥4 hours with adequate contractions OR ≥6 hours with inadequate contractions. This patient has been 7 cm (active labor) for 5 hours with marginal contraction pattern.',
        references: ['ACOG Safe Prevention of Primary Cesarean Delivery']
      },
      {
        id: 'labor-arrest-q2',
        question: 'What is the most appropriate next step?',
        options: [
          'Proceed directly to cesarean delivery',
          'Continue expectant management',
          'Augmentation with Pitocin',
          'Amniotomy alone',
          'Discontinue epidural'
        ],
        correctAnswer: 2,
        rationale: 'With marginal contraction pattern (3-4 per 10 min; goal is 3-5), augmentation with Pitocin is appropriate. She has NOT met full criteria for arrest yet if contractions are inadequate. Cesarean is indicated if no progress after adequate augmentation for ≥6 hours with inadequate contractions.',
        references: ['ACOG Safe Prevention of Primary Cesarean Delivery']
      }
    ],
    learningPoints: [
      'Arrest of dilation: ≥4 hours no change with adequate contractions',
      'OR ≥6 hours no change with inadequate contractions',
      'Adequate contractions: 3-5 in 10 minutes with moderate-strong intensity',
      'Augmentation with Pitocin is appropriate for inadequate contractions',
      'Cesarean for arrest requires adequate trial of augmentation',
      'Category I tracing = reassuring fetal status'
    ]
  },
  {
    id: 'fhr-late-decels',
    moduleId: 'fetal-monitoring',
    title: 'Late Decelerations in Labor',
    scenario: 'A 30-year-old G2P1 at 40 weeks is in active labor at 8 cm dilation on Pitocin augmentation. The nurse calls you to review the fetal heart tracing, which shows baseline 135, minimal variability, and recurrent late decelerations with each contraction.',
    questions: [
      {
        id: 'fhr-late-q1',
        question: 'What category is this fetal heart tracing?',
        options: [
          'Category I (Normal)',
          'Category II (Indeterminate)',
          'Category III (Abnormal)',
          'Unable to determine from information given',
          'Category II trending to Category III'
        ],
        correctAnswer: 2,
        rationale: 'This is Category III: absent/minimal variability with recurrent late decelerations. Category III tracings are abnormal and require prompt intervention and consideration of delivery.',
        references: ['ACOG Practice Bulletin No. 106: Intrapartum Fetal Heart Rate Monitoring']
      },
      {
        id: 'fhr-late-q2',
        question: 'What are the appropriate immediate interventions? (Select best comprehensive answer)',
        options: [
          'Continue current management and monitor closely',
          'Stop Pitocin only',
          'Stop Pitocin, maternal repositioning, IV fluid bolus, oxygen, prepare for delivery',
          'Immediate cesarean delivery without intervention',
          'Amnioinfusion and continue Pitocin'
        ],
        correctAnswer: 2,
        rationale: 'Category III tracing requires intrauterine resuscitation: stop Pitocin, maternal repositioning (left lateral), IV fluid bolus, supplemental oxygen, and vaginal exam (check for cord prolapse). If no rapid improvement, proceed to expedited delivery. Patient is 8 cm, so consider operative vaginal delivery vs cesarean based on response.',
        references: ['ACOG Practice Bulletin No. 106']
      }
    ],
    learningPoints: [
      'Late decelerations indicate uteroplacental insufficiency',
      'Category III: absent variability + recurrent late/variable decels OR sinusoidal OR bradycardia',
      'Intrauterine resuscitation: position change, fluids, oxygen, stop Pitocin',
      'Category III requires prompt delivery if no improvement',
      'Late decels with minimal variability is particularly concerning',
      'Consider operative vaginal delivery if station adequate and rapid improvement'
    ]
  },
  {
    id: 'postpartum-hemorrhage',
    moduleId: 'postpartum',
    title: 'Postpartum Hemorrhage',
    scenario: 'A 35-year-old G4P4 delivered a 4200g infant vaginally 15 minutes ago after a prolonged labor requiring Pitocin augmentation. She has now had approximately 700 mL estimated blood loss with ongoing bleeding. On exam, the uterus is soft and boggy.',
    questions: [
      {
        id: 'pph-q1',
        question: 'What is the most likely cause of her hemorrhage?',
        options: [
          'Cervical laceration',
          'Uterine atony',
          'Retained placenta',
          'Coagulopathy',
          'Uterine rupture'
        ],
        correctAnswer: 1,
        rationale: 'The boggy, soft uterus indicates uterine atony, which accounts for 70% of postpartum hemorrhage. Risk factors present include: multiparity, macrosomia, prolonged labor, and Pitocin use (all cause uterine overdistension).',
        references: ['ACOG Practice Bulletin No. 183: Postpartum Hemorrhage']
      },
      {
        id: 'pph-q2',
        question: 'What is the correct sequence of management steps?',
        options: [
          'Immediate hysterectomy',
          'Fundal massage, Pitocin, methergine/hemabate if needed, Bakri balloon, surgical intervention',
          'Start blood transfusion first, then uterine massage',
          'Methergine first, then assess response',
          'Immediate call to IR for embolization'
        ],
        correctAnswer: 1,
        rationale: 'Management follows stepwise approach: 1) Fundal massage, 2) Pitocin (10-40 units in 1L, never IV push), 3) Methergine 0.2mg IM (if no HTN) or Hemabate 250mcg IM (if no asthma), 4) Misoprostol 800-1000mcg PR, 5) Bakri balloon tamponade, 6) Surgical intervention. Simultaneously ensure IV access, labs (CBC, type & screen), and prepare blood products.',
        references: ['ACOG Practice Bulletin No. 183']
      }
    ],
    learningPoints: [
      'Four Ts: Tone (atony 70%), Trauma (20%), Tissue (10%), Thrombin (1%)',
      'Boggy uterus = atony',
      'Risk factors for atony: overdistension (twins, polyhydramnios, macrosomia), prolonged labor, rapid labor, multiparity',
      'Never give Pitocin as IV push (can cause hypotension, arrhythmia)',
      'Methergine contraindicated in hypertension',
      'Hemabate contraindicated in asthma',
      'Prepare for massive transfusion protocol if ongoing bleeding'
    ]
  },
  {
    id: 'ectopic-pregnancy',
    moduleId: 'gyn-emergencies',
    title: 'Ectopic Pregnancy',
    scenario: 'A 27-year-old woman presents to the ED with left lower abdominal pain and vaginal spotting. Her LMP was 6 weeks ago. Vital signs: BP 118/75, HR 88, afebrile. Exam shows left adnexal tenderness without rebound. Urine pregnancy test is positive.',
    questions: [
      {
        id: 'ectopic-q1',
        question: 'What is the next most appropriate step?',
        options: [
          'Discharge with prenatal vitamins and OB follow-up',
          'Transvaginal ultrasound and quantitative βhCG',
          'Immediate laparoscopy',
          'Start methotrexate',
          'CT scan of abdomen/pelvis'
        ],
        correctAnswer: 1,
        rationale: 'With positive pregnancy test and symptoms concerning for ectopic pregnancy, the next step is transvaginal ultrasound and quantitative βhCG. These will help determine if there is an intrauterine pregnancy, ectopic pregnancy, or pregnancy of unknown location. Discriminatory zone for TVUS is typically 1500-2000 mIU/mL.',
        references: ['ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy']
      },
      {
        id: 'ectopic-q2',
        question: 'βhCG is 2,800 mIU/mL. TVUS shows no intrauterine pregnancy, a 2.5 cm left adnexal mass, and no free fluid. Patient remains hemodynamically stable. What is the best management option?',
        options: [
          'Immediate surgical intervention',
          'Methotrexate therapy with close follow-up',
          'Expectant management with serial βhCG',
          'Repeat ultrasound in 1 week',
          'Dilation and curettage'
        ],
        correctAnswer: 1,
        rationale: 'This patient meets criteria for methotrexate: hemodynamically stable, βhCG <5,000, mass <3.5-4 cm, no fetal cardiac activity (not mentioned), compliant patient. Methotrexate 50 mg/m² IM is given with follow-up βhCG on days 4 and 7 (expect 15% decrease between these days).',
        references: ['ACOG Practice Bulletin No. 193']
      }
    ],
    learningPoints: [
      'ANY woman of reproductive age with abdominal pain → pregnancy test',
      'βhCG + TVUS to locate pregnancy',
      'Discriminatory zone: 1500-2000 mIU/mL (should see IUP on TVUS)',
      'No IUP above discriminatory zone = ectopic until proven otherwise',
      'Methotrexate criteria: stable, βhCG <5,000, mass <3.5-4 cm, no cardiac activity',
      'Contraindications: unstable, breastfeeding, renal/hepatic disease',
      'Follow βhCG on days 4 and 7 (need 15% decrease)'
    ]
  },
  {
    id: 'ovarian-torsion',
    moduleId: 'gyn-emergencies',
    title: 'Ovarian Torsion',
    scenario: 'A 22-year-old woman presents to the ED with sudden-onset severe right lower quadrant pain that started 3 hours ago. She has nausea and vomiting. She has no fever. Pregnancy test is negative. On exam, she has severe right adnexal tenderness.',
    questions: [
      {
        id: 'torsion-q1',
        question: 'What is the most appropriate next diagnostic step?',
        options: [
          'CT scan with contrast',
          'Pelvic ultrasound with Doppler',
          'Diagnostic laparoscopy',
          'MRI pelvis',
          'Observe for 6 hours and reassess'
        ],
        correctAnswer: 1,
        rationale: 'Pelvic ultrasound with Doppler is the first-line imaging for suspected ovarian torsion. Classic findings include enlarged ovary (>4 cm), possible mass/cyst, and may show decreased or absent Doppler flow. However, presence of flow does NOT rule out torsion due to dual blood supply.',
        references: ['ACOG Practice Bulletin: Adnexal Masses']
      },
      {
        id: 'torsion-q2',
        question: 'Ultrasound shows a 6 cm right ovarian cyst with normal Doppler flow. What is the most appropriate management?',
        options: [
          'Discharge with pain control and outpatient follow-up',
          'Admit for observation',
          'Proceed with diagnostic laparoscopy',
          'Repeat ultrasound in 24 hours',
          'Start antibiotics for possible TOA'
        ],
        correctAnswer: 2,
        rationale: 'Normal Doppler flow does NOT rule out ovarian torsion due to dual blood supply (ovarian and uterine arteries). With high clinical suspicion (sudden severe pain, nausea/vomiting, adnexal tenderness, ovarian cyst), surgical exploration is warranted. Ovarian salvage is best if detorsion occurs within 24 hours.',
        references: ['ACOG Practice Bulletin: Adnexal Masses']
      }
    ],
    learningPoints: [
      'Classic presentation: sudden severe unilateral pelvic pain + nausea/vomiting',
      'Risk factors: ovarian mass/cyst, pregnancy, ovulation induction',
      'Ultrasound findings: enlarged ovary, possible mass, may have abnormal Doppler',
      'CRITICAL: Normal Doppler does NOT exclude torsion',
      'High clinical suspicion → surgical exploration',
      'Time-sensitive: salvage best if <24 hours',
      'Treatment: laparoscopic detorsion ± cystectomy/oophorectomy'
    ]
  },
  {
    id: 'pid-case',
    moduleId: 'gyn-emergencies',
    title: 'Pelvic Inflammatory Disease',
    scenario: 'A 24-year-old sexually active woman presents with 3 days of lower abdominal pain, vaginal discharge, and fever to 101.2°F. She has a new sexual partner in the past month. On exam, she has cervical motion tenderness and bilateral adnexal tenderness.',
    questions: [
      {
        id: 'pid-q1',
        question: 'What are the minimum clinical criteria for PID diagnosis met in this patient?',
        options: [
          'Fever is required for diagnosis',
          'Positive gonorrhea/chlamydia test required',
          'Cervical motion tenderness alone is sufficient',
          'Need ultrasound confirmation',
          'Need all symptoms plus positive cultures'
        ],
        correctAnswer: 2,
        rationale: 'Minimum criteria for PID: cervical motion tenderness OR uterine tenderness OR adnexal tenderness in a sexually active woman at risk. Treatment should not be delayed while awaiting test results. This patient meets criteria with cervical motion tenderness.',
        references: ['CDC STI Treatment Guidelines']
      },
      {
        id: 'pid-q2',
        question: 'She has no signs of sepsis, no peritoneal signs, and prefers outpatient treatment. What is the appropriate outpatient antibiotic regimen?',
        options: [
          'Doxycycline 100 mg PO BID × 14 days alone',
          'Ceftriaxone 500 mg IM × 1 + Azithromycin 1g PO × 1',
          'Ceftriaxone 500 mg IM × 1 + Doxycycline 100 mg PO BID × 14 days',
          'Ciprofloxacin 500 mg PO BID × 14 days',
          'Metronidazole 500 mg PO BID × 14 days'
        ],
        correctAnswer: 2,
        rationale: 'CDC-recommended outpatient PID treatment: Ceftriaxone 500 mg IM × 1 dose PLUS Doxycycline 100 mg PO BID × 14 days. Consider adding metronidazole for anaerobic coverage if recent instrumentation or IUD present. Follow-up in 48-72 hours to ensure improvement.',
        references: ['CDC STI Treatment Guidelines 2021']
      }
    ],
    learningPoints: [
      'Minimum PID criteria: CMT OR uterine tenderness OR adnexal tenderness',
      'Do NOT delay treatment waiting for test results',
      'Outpatient treatment: Ceftriaxone + Doxycycline',
      'Inpatient indications: pregnancy, abscess, severe illness, failed outpatient',
      'Add metronidazole if: IUD, recent procedure, suspected anaerobes',
      'Complications: TOA, infertility, chronic pelvic pain, ectopic pregnancy',
      'Test and treat partners'
    ]
  },
  {
    id: 'gbs-prophylaxis',
    moduleId: 'infections',
    title: 'GBS Prophylaxis Decision',
    scenario: 'A 28-year-old G2P1 at 38 weeks gestation presents in active labor at 5 cm dilation. She received prenatal care but her GBS culture was never sent. She is allergic to penicillin (reports hives). She is currently afebrile with no prolonged rupture of membranes.',
    questions: [
      {
        id: 'gbs-q1',
        question: 'What is the indication for GBS prophylaxis in this patient?',
        options: [
          'No prophylaxis needed - patient is afebrile',
          'Unknown GBS status is not an indication',
          'Unknown GBS status with no risk factors - no prophylaxis',
          'Unknown GBS status requires prophylaxis if risk factors present',
          'All patients in labor get GBS prophylaxis'
        ],
        correctAnswer: 3,
        rationale: 'Indications for GBS prophylaxis: 1) Positive GBS culture this pregnancy, 2) GBS bacteriuria anytime this pregnancy, 3) Prior infant with GBS disease, 4) Unknown status with risk factors (fever, PROM ≥18 hrs, <37 weeks). This patient has unknown status but no current risk factors, so prophylaxis is NOT indicated unless she develops risk factors.',
        references: ['ACOG Prevention of Group B Streptococcal Early-Onset Disease']
      },
      {
        id: 'gbs-q2',
        question: 'Two hours later, she develops a temperature of 101.5°F. What is the appropriate antibiotic choice given her penicillin allergy?',
        options: [
          'Penicillin G 5 million units IV',
          'Ampicillin 2g IV',
          'Cefazolin 2g IV',
          'Clindamycin 900 mg IV (if GBS sensitive) or Vancomycin 1g IV',
          'No antibiotics - allergy precludes treatment'
        ],
        correctAnswer: 3,
        rationale: 'With penicillin allergy (hives = non-anaphylactic), cefazolin could be used. However, if severe/anaphylactic allergy or unknown severity, use clindamycin 900 mg IV q8h IF GBS isolate is clindamycin-sensitive. If resistance or sensitivity unknown, use vancomycin 1g IV q12h. Now she has fever making her unknown status with risk factor → needs prophylaxis.',
        references: ['ACOG Prevention of GBS']
      }
    ],
    learningPoints: [
      'GBS screening at 36-37 weeks (valid for 5 weeks)',
      'Prophylaxis indications: positive culture, GBS bacteriuria, prior infant with GBS, unknown + risk factors',
      'Risk factors: fever in labor, PROM ≥18 hours, <37 weeks',
      'Penicillin G first choice: 5 million units IV x1, then 2.5-3 million q4h',
      'Alternatives: Ampicillin, cefazolin',
      'PCN allergy: clindamycin (if sensitive) or vancomycin',
      'Adequate prophylaxis: ≥4 hours before delivery'
    ]
  }
]
