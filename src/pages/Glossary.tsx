import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Book, Search } from 'lucide-react'

const glossaryData = {
  abbreviations: [
    { term: 'ACOG', definition: 'American College of Obstetricians and Gynecologists' },
    { term: 'AFP', definition: 'Alpha-fetoprotein' },
    { term: 'BhCG', definition: 'Beta-human chorionic gonadotropin' },
    { term: 'BPP', definition: 'Biophysical profile' },
    { term: 'FHR', definition: 'Fetal heart rate' },
    { term: 'GA', definition: 'Gestational age' },
    { term: 'GBS', definition: 'Group B Streptococcus' },
    { term: 'GDM', definition: 'Gestational diabetes mellitus' },
    { term: 'HELLP', definition: 'Hemolysis, Elevated Liver enzymes, Low Platelets' },
    { term: 'IUP', definition: 'Intrauterine pregnancy' },
    { term: 'LMP', definition: 'Last menstrual period' },
    { term: 'MgSO4', definition: 'Magnesium sulfate' },
    { term: 'NIPT', definition: 'Non-invasive prenatal testing' },
    { term: 'NST', definition: 'Non-stress test' },
    { term: 'PID', definition: 'Pelvic inflammatory disease' },
    { term: 'PROM', definition: 'Premature rupture of membranes' },
    { term: 'RhoGAM', definition: 'Rh immune globulin' },
    { term: 'SMFM', definition: 'Society for Maternal-Fetal Medicine' },
    { term: 'TOA', definition: 'Tubo-ovarian abscess' },
    { term: 'TVUS', definition: 'Transvaginal ultrasound' },
  ],
  terms: [
    {
      term: 'Arrest of Dilation',
      definition: 'No cervical change for ≥4 hours with adequate contractions OR ≥6 hours with inadequate contractions in active labor',
    },
    {
      term: 'Arrest of Descent',
      definition: 'No fetal descent for ≥3 hours (nulliparous) or ≥2 hours (multiparous) in second stage with pushing',
    },
    {
      term: 'Bishop Score',
      definition: 'Scoring system (0-13 points) to assess cervical favorability for induction: dilation, effacement, station, consistency, position',
    },
    {
      term: 'Category I Tracing',
      definition: 'Normal FHR: baseline 110-160, moderate variability, no late/variable decels',
    },
    {
      term: 'Category III Tracing',
      definition: 'Abnormal FHR requiring action: absent variability with recurrent late/variable decels, OR sinusoidal pattern, OR bradycardia',
    },
    {
      term: 'Eclampsia',
      definition: 'Seizures in the setting of preeclampsia that cannot be attributed to other causes',
    },
    {
      term: 'Ectopic Pregnancy',
      definition: 'Pregnancy implanted outside the uterine cavity, most commonly in the fallopian tube',
    },
    {
      term: 'Gestational Hypertension',
      definition: 'New-onset hypertension (BP ≥140/90) after 20 weeks without proteinuria or end-organ damage',
    },
    {
      term: 'Intrauterine Resuscitation',
      definition: 'Interventions to improve fetal oxygenation: maternal repositioning, IV fluids, oxygen, stop Pitocin, treat tachysystole',
    },
    {
      term: 'Late Deceleration',
      definition: 'Gradual FHR decrease with nadir after contraction peak, indicating uteroplacental insufficiency',
    },
    {
      term: 'Moderate Variability',
      definition: 'FHR variability with amplitude of 11-25 bpm, indicating intact fetal autonomic nervous system (reassuring)',
    },
    {
      term: 'Ovarian Torsion',
      definition: 'Twisting of the ovary on its ligamentous supports, causing vascular compromise - a surgical emergency',
    },
    {
      term: 'Preeclampsia',
      definition: 'Hypertension after 20 weeks with proteinuria OR end-organ dysfunction',
    },
    {
      term: 'Severe Features',
      definition: 'BP ≥160/110, platelets <100k, elevated LFTs (2x), RUQ pain, pulmonary edema, cerebral/visual symptoms, renal insufficiency',
    },
    {
      term: 'Tachysystole',
      definition: 'More than 5 contractions in 10 minutes, averaged over 30 minutes',
    },
    {
      term: 'Variable Deceleration',
      definition: 'Abrupt FHR decrease with variable timing relative to contractions, indicating cord compression',
    },
  ],
  guidelines: [
    {
      term: 'GDM Screening',
      guideline: 'Screen all patients at 24-28 weeks with 1-hour GCT; if abnormal, proceed to 3-hour OGTT',
    },
    {
      term: 'GBS Screening',
      guideline: 'Screen all patients at 36-37 weeks with vaginal-rectal swab',
    },
    {
      term: 'Preeclampsia Delivery',
      guideline: 'With severe features at ≥34 weeks: deliver. Without severe features at ≥37 weeks: deliver',
    },
    {
      term: 'RhoGAM Administration',
      guideline: 'Give 300 mcg at 28 weeks and within 72 hours postpartum if baby is Rh-positive',
    },
    {
      term: 'Tdap in Pregnancy',
      guideline: 'Give between 27-36 weeks EACH pregnancy',
    },
    {
      term: 'Dating Ultrasound',
      guideline: 'If >7 days discrepancy in first trimester or >14 days in second trimester, use ultrasound dates',
    },
  ],
}

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')

  const filterItems = (items: any[]) => {
    if (!searchTerm) return items
    return items.filter(
      (item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.definition && item.definition.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.guideline && item.guideline.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Glossary</h1>
        <p className="text-muted-foreground">
          Quick reference for OB/GYN terms, abbreviations, and guidelines
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search terms, definitions, or guidelines..."
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="terms" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="terms">Terms</TabsTrigger>
          <TabsTrigger value="abbreviations">Abbreviations</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="terms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Clinical Terms
              </CardTitle>
              <CardDescription>
                Essential OB/GYN terminology and definitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filterItems(glossaryData.terms).map((item, index) => (
                  <AccordionItem key={index} value={`term-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.term}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">{item.definition}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abbreviations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Common Abbreviations</CardTitle>
              <CardDescription>
                Frequently used OB/GYN abbreviations and acronyms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {filterItems(glossaryData.abbreviations).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg border"
                  >
                    <span className="font-semibold text-primary shrink-0">
                      {item.term}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.definition}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Guidelines</CardTitle>
              <CardDescription>
                Key ACOG and evidence-based practice points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filterItems(glossaryData.guidelines).map((item, index) => (
                  <AccordionItem key={index} value={`guideline-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.term}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">{item.guideline}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
