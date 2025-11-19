import { Assessment } from '@/types'

export const assessments: Assessment[] = [
  {
    id: 'prenatal-assessment',
    moduleId: 'prenatal',
    title: 'Prenatal Care Assessment',
    questions: [
      {
        id: 'prenatal-q1',
        type: 'mcq',
        question: 'A 28-year-old G1P0 at 8 weeks gestation presents for her first prenatal visit. Which of the following is NOT part of the standard initial prenatal lab panel?',
        options: [
          'Blood type and Rh',
          'HIV screening',
          '1-hour glucose challenge test',
          'Rubella immunity',
          'Hepatitis B surface antigen'
        ],
        correctAnswers: [2],
        rationale: 'The 1-hour glucose challenge test (GCT) is performed at 24-28 weeks gestation, not at the initial prenatal visit. All other options are standard components of initial prenatal labs.',
        difficulty: 'easy',
        tags: ['prenatal-labs', 'initial-visit']
      },
      {
        id: 'prenatal-q2',
        type: 'mcq',
        question: 'At what gestational age should Tdap vaccine be administered during pregnancy?',
        options: [
          '12-16 weeks',
          '20-24 weeks',
          '27-36 weeks',
          '37-40 weeks',
          'Immediately postpartum'
        ],
        correctAnswers: [2],
        rationale: 'Tdap should be given between 27-36 weeks gestation in EACH pregnancy to maximize maternal antibody response and passive antibody transfer to the fetus.',
        difficulty: 'easy',
        tags: ['vaccines', 'prenatal-care']
      },
      {
        id: 'prenatal-q3',
        type: 'mcq',
        question: 'An Rh-negative patient at 29 weeks gestation calls after a minor motor vehicle accident with no injuries. What is the appropriate management?',
        options: [
          'No intervention needed if no bleeding',
          'RhoGAM 50 mcg within 72 hours',
          'RhoGAM 300 mcg within 72 hours',
          'Check antibody screen only',
          'Wait until delivery to give RhoGAM'
        ],
        correctAnswers: [2],
        rationale: 'Any trauma in an Rh-negative patient warrants RhoGAM 300 mcg administration within 72 hours to prevent alloimmunization, even without visible bleeding.',
        difficulty: 'medium',
        tags: ['rh-immunoglobulin', 'trauma']
      },
      {
        id: 'prenatal-q4',
        type: 'mcq',
        question: 'A patient has a 1-hour glucose challenge test result of 155 mg/dL. What is the next step?',
        options: [
          'Diagnose gestational diabetes and start treatment',
          'Repeat 1-hour GCT in 2 weeks',
          'Proceed with 3-hour oral glucose tolerance test',
          'Start diabetic diet and recheck in 1 week',
          'No further testing needed'
        ],
        correctAnswers: [2],
        rationale: 'An abnormal 1-hour GCT (typically >130-140 mg/dL depending on institution) requires a 3-hour OGTT for definitive diagnosis of gestational diabetes. The GCT is a screening test, not diagnostic.',
        difficulty: 'medium',
        tags: ['gdm-screening', 'prenatal-labs']
      },
      {
        id: 'prenatal-q5',
        type: 'mcq',
        question: 'Dating ultrasound in the first trimester shows a gestational age of 9 weeks 2 days, but LMP dating suggests 8 weeks 1 day. Which dates should be used?',
        options: [
          'Use LMP dates because patient knows her LMP',
          'Use ultrasound dates',
          'Average the two dates',
          'Repeat ultrasound in 1 week',
          'Use whichever is further along'
        ],
        correctAnswers: [1],
        rationale: 'If there is a discrepancy of >7 days in the first trimester between LMP and ultrasound dating, ultrasound dates should be used as they are more accurate.',
        difficulty: 'medium',
        tags: ['dating', 'ultrasound']
      }
    ]
  },
  {
    id: 'hypertension-assessment',
    moduleId: 'hypertension',
    title: 'Hypertensive Disorders Assessment',
    questions: [
      {
        id: 'htn-q1',
        type: 'multi-select',
        question: 'Which of the following are criteria for preeclampsia with severe features? (Select all that apply)',
        options: [
          'BP ≥160/110 on two occasions 4 hours apart',
          'Platelet count <100,000',
          'Persistent right upper quadrant pain',
          'Blood pressure 145/95',
          'New-onset headache with visual symptoms'
        ],
        correctAnswers: [0, 1, 2, 4],
        rationale: 'Severe features include: BP ≥160/110, thrombocytopenia <100,000, elevated liver enzymes, RUQ/epigastric pain, pulmonary edema, or new cerebral/visual symptoms. BP of 145/95 does not meet severe criteria.',
        difficulty: 'medium',
        tags: ['preeclampsia', 'severe-features']
      },
      {
        id: 'htn-q2',
        type: 'mcq',
        question: 'A patient at 33 weeks with preeclampsia with severe features is being managed with magnesium sulfate. What is the therapeutic range for magnesium levels?',
        options: [
          '1-2 mEq/L',
          '2-4 mEq/L',
          '4-6 mEq/L',
          '6-8 mEq/L',
          '8-10 mEq/L'
        ],
        correctAnswers: [2],
        rationale: 'Therapeutic magnesium levels are 4-6 mEq/L (4.8-7.2 mg/dL). Loss of deep tendon reflexes occurs at 8-12 mEq/L, respiratory depression at 12-15 mEq/L, and cardiac arrest >15 mEq/L.',
        difficulty: 'hard',
        tags: ['magnesium-sulfate', 'treatment']
      },
      {
        id: 'htn-q3',
        type: 'mcq',
        question: 'A 32-year-old at 35 weeks gestation with preeclampsia with severe features has been on magnesium sulfate for seizure prophylaxis. She becomes lethargic with absent deep tendon reflexes and respiratory rate of 8/min. What is the immediate management?',
        options: [
          'Continue magnesium and reassess in 1 hour',
          'Decrease magnesium infusion rate by half',
          'Stop magnesium and give calcium gluconate',
          'Intubate immediately',
          'Give benzodiazepine for seizure control'
        ],
        correctAnswers: [2],
        rationale: 'This patient has magnesium toxicity (absent reflexes, respiratory depression). Immediate management is to STOP magnesium and give calcium gluconate 1g IV over 3 minutes as the antidote.',
        difficulty: 'hard',
        tags: ['magnesium-toxicity', 'emergency']
      },
      {
        id: 'htn-q4',
        type: 'mcq',
        question: 'At what gestational age should a patient with preeclampsia WITHOUT severe features be delivered?',
        options: [
          '34 weeks',
          '35 weeks',
          '36 weeks',
          '37 weeks',
          '39 weeks'
        ],
        correctAnswers: [3],
        rationale: 'Preeclampsia without severe features should be delivered at 37 weeks. Preeclampsia with severe features at ≥34 weeks should be delivered after maternal stabilization.',
        difficulty: 'medium',
        tags: ['delivery-timing', 'management']
      },
      {
        id: 'htn-q5',
        type: 'mcq',
        question: 'Which medication is CONTRAINDICATED in a preeclamptic patient with severe features and blood pressure of 170/115?',
        options: [
          'Labetalol',
          'Nifedipine',
          'Hydralazine',
          'Methyldopa',
          'All can be used'
        ],
        correctAnswers: [3],
        rationale: 'Methyldopa takes days to work and is not appropriate for acute severe hypertension. Labetalol, nifedipine, and hydralazine are all appropriate choices for acute blood pressure management in severe hypertension.',
        difficulty: 'medium',
        tags: ['antihypertensives', 'treatment']
      }
    ]
  },
  {
    id: 'labor-assessment',
    moduleId: 'labor',
    title: 'Labor & Delivery Assessment',
    questions: [
      {
        id: 'labor-q1',
        type: 'mcq',
        question: 'A nulliparous woman in active labor (7 cm dilated) has had no cervical change for 4 hours despite adequate contractions (3-5 per 10 minutes). What is the diagnosis?',
        options: [
          'Normal labor progression',
          'Prolonged latent phase',
          'Arrest of dilation',
          'Arrest of descent',
          'Failed induction'
        ],
        correctAnswers: [2],
        rationale: 'Arrest of dilation is defined as no cervical change for ≥4 hours with adequate contractions OR ≥6 hours with inadequate contractions in the active phase of labor.',
        difficulty: 'easy',
        tags: ['labor-dystocia', 'definitions']
      },
      {
        id: 'labor-q2',
        type: 'mcq',
        question: 'Which Bishop score component is NOT part of the standard assessment?',
        options: [
          'Cervical dilation',
          'Cervical effacement',
          'Fetal station',
          'Cervical consistency',
          'Amniotic fluid volume'
        ],
        correctAnswers: [4],
        rationale: 'The Bishop score includes 5 components: dilation, effacement, station, cervical consistency, and cervical position. Amniotic fluid volume is not part of the Bishop score.',
        difficulty: 'easy',
        tags: ['bishop-score', 'induction']
      },
      {
        id: 'labor-q3',
        type: 'mcq',
        question: 'A multiparous woman is fully dilated and has been pushing for 2.5 hours without descent past +1 station. What is the next best step?',
        options: [
          'Continue pushing for another hour',
          'Start Pitocin augmentation',
          'Proceed with cesarean delivery',
          'Attempt operative vaginal delivery',
          'Reposition and continue pushing'
        ],
        correctAnswers: [2],
        rationale: 'Arrest of descent is defined as no descent for ≥3 hours in nulliparous or ≥2 hours in multiparous patients. This patient meets criteria for arrest of descent and cesarean delivery is indicated.',
        difficulty: 'medium',
        tags: ['arrest-of-descent', 'stage-2-labor']
      },
      {
        id: 'labor-q4',
        type: 'multi-select',
        question: 'Which are prerequisites for operative vaginal delivery with vacuum or forceps? (Select all that apply)',
        options: [
          'Vertex presentation',
          'Ruptured membranes',
          'Station ≥+2',
          'Fully dilated cervix',
          'Empty bladder'
        ],
        correctAnswers: [0, 1, 2, 3, 4],
        rationale: 'All listed options are prerequisites for operative vaginal delivery: vertex presentation, ruptured membranes, adequate station (≥+2), complete dilation, known fetal position, and empty bladder. An adequate pelvis is also required.',
        difficulty: 'hard',
        tags: ['operative-delivery', 'prerequisites']
      },
      {
        id: 'labor-q5',
        type: 'mcq',
        question: 'During Pitocin augmentation, the patient develops tachysystole (6 contractions in 10 minutes) with a Category I fetal heart tracing. What is the most appropriate initial management?',
        options: [
          'Emergency cesarean delivery',
          'Immediate terbutaline administration',
          'Reduce Pitocin infusion rate',
          'Continue current management',
          'Amnioinfusion'
        ],
        correctAnswers: [2],
        rationale: 'Tachysystole with a reassuring (Category I) tracing should be managed by reducing or stopping Pitocin. Terbutaline is reserved for Category II or III tracings with tachysystole. Emergency delivery is not indicated with a reassuring tracing.',
        difficulty: 'medium',
        tags: ['tachysystole', 'pitocin']
      }
    ]
  },
  {
    id: 'fetal-monitoring-assessment',
    moduleId: 'fetal-monitoring',
    title: 'Fetal Monitoring Assessment',
    questions: [
      {
        id: 'fhr-q1',
        type: 'mcq',
        question: 'What defines moderate FHR variability?',
        options: [
          'Amplitude 0-5 bpm',
          'Amplitude 6-10 bpm',
          'Amplitude 11-25 bpm',
          'Amplitude >25 bpm',
          'Any variability with accelerations'
        ],
        correctAnswers: [2],
        rationale: 'Moderate variability is defined as amplitude of 11-25 bpm and is reassuring, indicating intact fetal autonomic nervous system.',
        difficulty: 'easy',
        tags: ['variability', 'basics']
      },
      {
        id: 'fhr-q2',
        type: 'mcq',
        question: 'Which type of deceleration is caused by uteroplacental insufficiency?',
        options: [
          'Early decelerations',
          'Variable decelerations',
          'Late decelerations',
          'Prolonged decelerations',
          'All of the above'
        ],
        correctAnswers: [2],
        rationale: 'Late decelerations are caused by uteroplacental insufficiency and are concerning, especially when recurrent or associated with decreased variability.',
        difficulty: 'easy',
        tags: ['decelerations', 'pathophysiology']
      },
      {
        id: 'fhr-q3',
        type: 'multi-select',
        question: 'A fetal heart tracing shows baseline 140, absent variability, and recurrent late decelerations. Which interventions are appropriate for intrauterine resuscitation? (Select all that apply)',
        options: [
          'Maternal repositioning to left lateral',
          'IV fluid bolus',
          'Discontinue Pitocin',
          'Supplemental oxygen',
          'Immediate cesarean without intervention'
        ],
        correctAnswers: [0, 1, 2, 3],
        rationale: 'This is a Category III tracing requiring prompt delivery, but intrauterine resuscitation should be attempted first: reposition, IV fluids, oxygen, stop Pitocin, check for cord prolapse. If no improvement, proceed to urgent delivery.',
        difficulty: 'medium',
        tags: ['category-III', 'resuscitation']
      },
      {
        id: 'fhr-q4',
        type: 'mcq',
        question: 'Which FHR tracing is classified as Category I (normal)?',
        options: [
          'Baseline 130, minimal variability, no decelerations',
          'Baseline 150, moderate variability, no decelerations',
          'Baseline 145, moderate variability, variable decelerations',
          'Baseline 110, absent variability, accelerations present',
          'Baseline 165, marked variability, early decelerations'
        ],
        correctAnswers: [1],
        rationale: 'Category I requires: baseline 110-160, moderate variability, NO late or variable decelerations, ± accelerations. Option B is the only one meeting all criteria.',
        difficulty: 'medium',
        tags: ['categories', 'interpretation']
      },
      {
        id: 'fhr-q5',
        type: 'mcq',
        question: 'What does a reactive non-stress test (NST) require?',
        options: [
          '≥1 acceleration in 20 minutes',
          '≥2 accelerations (≥15 bpm for ≥15 sec) in 20 minutes',
          '≥3 accelerations in 40 minutes',
          'Moderate variability only',
          'No decelerations in 20 minutes'
        ],
        correctAnswers: [1],
        rationale: 'A reactive NST requires ≥2 accelerations of ≥15 bpm lasting ≥15 seconds in a 20-minute period. If non-reactive, can extend to 40 minutes to account for fetal sleep cycles.',
        difficulty: 'easy',
        tags: ['nst', 'antepartum-testing']
      }
    ]
  },
  {
    id: 'postpartum-assessment',
    moduleId: 'postpartum',
    title: 'Postpartum Complications Assessment',
    questions: [
      {
        id: 'pp-q1',
        type: 'mcq',
        question: 'What is the most common cause of postpartum hemorrhage?',
        options: [
          'Cervical laceration',
          'Uterine atony',
          'Retained placenta',
          'Uterine rupture',
          'Coagulopathy'
        ],
        correctAnswers: [1],
        rationale: 'Uterine atony accounts for approximately 70% of postpartum hemorrhage cases. The 4 Ts are: Tone (atony), Trauma, Tissue, and Thrombin.',
        difficulty: 'easy',
        tags: ['hemorrhage', 'four-ts']
      },
      {
        id: 'pp-q2',
        type: 'mcq',
        question: 'Which medication for postpartum hemorrhage due to atony is CONTRAINDICATED in asthma?',
        options: [
          'Pitocin',
          'Methergine',
          'Hemabate',
          'Misoprostol',
          'Tranexamic acid'
        ],
        correctAnswers: [2],
        rationale: 'Hemabate (carboprost/15-methyl PGF2α) is contraindicated in asthma as it can cause bronchospasm. Methergine is contraindicated in hypertension.',
        difficulty: 'medium',
        tags: ['hemorrhage-treatment', 'medications']
      },
      {
        id: 'pp-q3',
        type: 'multi-select',
        question: 'Which findings suggest postpartum endometritis? (Select all that apply)',
        options: [
          'Fever >38°C',
          'Uterine tenderness',
          'Foul-smelling lochia',
          'Bright red vaginal bleeding',
          'Lower abdominal pain'
        ],
        correctAnswers: [0, 1, 2, 4],
        rationale: 'Endometritis presents with fever, uterine tenderness, foul lochia, and lower abdominal pain. Bright red bleeding is more suggestive of hemorrhage than infection.',
        difficulty: 'easy',
        tags: ['endometritis', 'infection']
      },
      {
        id: 'pp-q4',
        type: 'mcq',
        question: 'A patient 3 days postpartum calls reporting severe sadness, crying spells, and anxiety, but is caring for her baby appropriately. What is the most likely diagnosis?',
        options: [
          'Postpartum blues',
          'Postpartum depression',
          'Postpartum psychosis',
          'Normal adjustment',
          'Postpartum anxiety disorder'
        ],
        correctAnswers: [0],
        rationale: 'Postpartum blues affects 50-80% of women, peaks at days 3-5, and resolves by 2 weeks. Symptoms include mood lability, crying, and anxiety but not impairment in infant care. If symptoms persist >2 weeks, consider postpartum depression.',
        difficulty: 'medium',
        tags: ['mood-disorders', 'postpartum-blues']
      },
      {
        id: 'pp-q5',
        type: 'mcq',
        question: 'How long should magnesium sulfate be continued postpartum in a patient with severe preeclampsia?',
        options: [
          '12 hours',
          '24 hours',
          '48 hours',
          'Until discharge',
          'Until blood pressure normalizes'
        ],
        correctAnswers: [1],
        rationale: 'Magnesium sulfate should be continued for 24 hours postpartum in patients with preeclampsia with severe features for seizure prophylaxis. Risk of eclampsia is highest in the first 48 hours postpartum.',
        difficulty: 'easy',
        tags: ['preeclampsia', 'postpartum-management']
      }
    ]
  },
  {
    id: 'gyn-emergencies-assessment',
    moduleId: 'gyn-emergencies',
    title: 'Gynecologic Emergencies Assessment',
    questions: [
      {
        id: 'gyn-q1',
        type: 'mcq',
        question: 'A 25-year-old woman presents with pelvic pain and vaginal bleeding. What is the FIRST test that should be ordered?',
        options: [
          'Transvaginal ultrasound',
          'Complete blood count',
          'Urine or serum pregnancy test',
          'Pelvic examination',
          'CT scan of abdomen/pelvis'
        ],
        correctAnswers: [2],
        rationale: 'In ANY reproductive-age woman with abdominal/pelvic pain, pregnancy test should be the first test to rule out ectopic pregnancy, which is a life-threatening emergency.',
        difficulty: 'easy',
        tags: ['approach', 'ectopic-pregnancy']
      },
      {
        id: 'gyn-q2',
        type: 'multi-select',
        question: 'Which are criteria for methotrexate treatment of ectopic pregnancy? (Select all that apply)',
        options: [
          'Hemodynamically stable',
          'βhCG <5,000',
          'Mass <3.5-4 cm',
          'Patient desires future fertility',
          'No fetal cardiac activity'
        ],
        correctAnswers: [0, 1, 2, 4],
        rationale: 'Criteria for methotrexate: hemodynamically stable, βhCG <5,000 (some use <10,000), mass <3.5-4 cm, no cardiac activity, patient compliant with follow-up. Future fertility desire is not a contraindication but both medical and surgical options preserve fertility.',
        difficulty: 'hard',
        tags: ['ectopic-pregnancy', 'methotrexate']
      },
      {
        id: 'gyn-q3',
        type: 'mcq',
        question: 'A patient with suspected ovarian torsion has a pelvic ultrasound showing normal Doppler flow to the ovary. What should be done?',
        options: [
          'Torsion is ruled out',
          'Discharge patient with reassurance',
          'Still consider torsion if high clinical suspicion',
          'Repeat ultrasound in 24 hours',
          'No further workup needed'
        ],
        correctAnswers: [2],
        rationale: 'Normal Doppler flow does NOT rule out ovarian torsion due to dual blood supply (ovarian and uterine arteries). If clinical suspicion is high, surgical exploration is warranted.',
        difficulty: 'hard',
        tags: ['ovarian-torsion', 'diagnosis']
      },
      {
        id: 'gyn-q4',
        type: 'mcq',
        question: 'What are the minimum clinical criteria for diagnosing pelvic inflammatory disease (PID)?',
        options: [
          'Fever and cervical motion tenderness',
          'Cervical motion tenderness OR uterine tenderness OR adnexal tenderness',
          'Purulent cervical discharge and fever',
          'Positive gonorrhea/chlamydia test',
          'Elevated white blood cell count and pelvic pain'
        ],
        correctAnswers: [1],
        rationale: 'Minimum criteria for PID diagnosis: cervical motion tenderness OR uterine tenderness OR adnexal tenderness. Treatment should not be delayed waiting for test results as untreated PID can lead to serious sequelae.',
        difficulty: 'medium',
        tags: ['pid', 'diagnosis']
      },
      {
        id: 'gyn-q5',
        type: 'mcq',
        question: 'What is the outpatient treatment regimen for uncomplicated PID?',
        options: [
          'Doxycycline 100 mg PO BID × 14 days alone',
          'Ceftriaxone 500 mg IM × 1 + Azithromycin 1g PO × 1',
          'Ceftriaxone 500 mg IM × 1 + Doxycycline 100 mg PO BID × 14 days',
          'Metronidazole 500 mg PO BID × 14 days alone',
          'Ciprofloxacin 500 mg PO BID × 14 days'
        ],
        correctAnswers: [2],
        rationale: 'CDC-recommended outpatient PID treatment: Ceftriaxone 500 mg IM × 1 PLUS Doxycycline 100 mg PO BID × 14 days. Add metronidazole if anaerobic coverage needed (e.g., recent instrumentation, IUD).',
        difficulty: 'medium',
        tags: ['pid', 'treatment']
      }
    ]
  },
  {
    id: 'infections-assessment',
    moduleId: 'infections',
    title: 'Infections in OB/GYN Assessment',
    questions: [
      {
        id: 'inf-q1',
        type: 'mcq',
        question: 'At what gestational age should Group B Streptococcus (GBS) screening be performed?',
        options: [
          '12-16 weeks',
          '20-24 weeks',
          '28-32 weeks',
          '36-37 weeks',
          'At admission for delivery'
        ],
        correctAnswers: [3],
        rationale: 'GBS screening with vaginal-rectal swab should be performed at 36-37 weeks gestation. Results are considered valid for 5 weeks.',
        difficulty: 'easy',
        tags: ['gbs', 'screening']
      },
      {
        id: 'inf-q2',
        type: 'multi-select',
        question: 'Which are indications for intrapartum GBS prophylaxis? (Select all that apply)',
        options: [
          'Positive GBS culture this pregnancy',
          'GBS bacteriuria at any time this pregnancy',
          'Prior infant with invasive GBS disease',
          'Unknown GBS status with fever in labor',
          'Negative GBS culture 4 weeks ago'
        ],
        correctAnswers: [0, 1, 2, 3],
        rationale: 'Indications for GBS prophylaxis: positive culture this pregnancy, GBS bacteriuria anytime this pregnancy, prior infant with GBS disease, or unknown status with risk factors (fever, PROM ≥18 hrs, <37 weeks). Recent negative culture (within 5 weeks) does not require prophylaxis.',
        difficulty: 'medium',
        tags: ['gbs', 'prophylaxis']
      },
      {
        id: 'inf-q3',
        type: 'mcq',
        question: 'What is the treatment for asymptomatic bacteriuria in pregnancy?',
        options: [
          'No treatment needed',
          'Treat only if patient develops symptoms',
          'Antibiotics based on culture sensitivities',
          'Cranberry juice and increased fluid intake',
          'Single-dose antibiotic'
        ],
        correctAnswers: [2],
        rationale: 'Asymptomatic bacteriuria (>100,000 CFU) should be treated in pregnancy to reduce risk of pyelonephritis and preterm labor. Treatment should be based on culture sensitivities.',
        difficulty: 'easy',
        tags: ['uti', 'asymptomatic-bacteriuria']
      },
      {
        id: 'inf-q4',
        type: 'mcq',
        question: 'A patient is diagnosed with primary syphilis in the first trimester. What is the appropriate treatment?',
        options: [
          'Doxycycline 100 mg PO BID × 14 days',
          'Benzathine penicillin G 2.4 million units IM × 1',
          'Azithromycin 1g PO × 1',
          'Ceftriaxone 1g IV daily × 14 days',
          'Defer treatment until after delivery'
        ],
        correctAnswers: [1],
        rationale: 'Primary, secondary, and early latent syphilis are treated with benzathine penicillin G 2.4 million units IM × 1 dose. Penicillin is the only proven effective treatment in pregnancy to prevent congenital syphilis.',
        difficulty: 'medium',
        tags: ['syphilis', 'sti-treatment']
      },
      {
        id: 'inf-q5',
        type: 'mcq',
        question: 'When should suppressive antiviral therapy be started in a pregnant patient with a history of genital herpes?',
        options: [
          'First trimester',
          'Second trimester',
          'At 28 weeks',
          'At 36 weeks',
          'Only if active outbreak occurs'
        ],
        correctAnswers: [3],
        rationale: 'Suppressive acyclovir or valacyclovir should be started at 36 weeks gestation in patients with a history of genital HSV to reduce risk of outbreak at delivery and need for cesarean section.',
        difficulty: 'medium',
        tags: ['hsv', 'suppression']
      }
    ]
  }
]
