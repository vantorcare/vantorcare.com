export interface Service {
	slug: string;
	name: string;
	title: string;
	description: string;
	summary: string;
	paragraphs: string[];
	includes: string[];
	payers: string;
	phone?: string;
	related: string[];
}

export const services: Service[] = [
	{
		slug: "skilled-nursing",
		name: "Skilled nursing",
		title: "Skilled Nursing at Home",
		description:
			"Registered and licensed practical nurses who visit at home after a hospital stay or a change in condition: medication management, assessments, injections and teaching.",
		summary: "RN and LPN visits for medication changes, new diagnoses and recovery after a hospital stay.",
		paragraphs: [
			"Most of our patients meet their Vantor nurse within 48 hours of leaving the hospital. That first visit is long, usually about ninety minutes: the nurse reconciles every medication bottle in the house against the discharge list, checks vital signs, looks at the stairs and the bathroom, and writes a plan of care with the patient and their family that their physician then signs.",
			"After that, visits are scheduled around what the plan needs. Someone who has just started insulin might see a nurse three times the first week and once a week after that; someone recovering from pneumonia might need four visits in total. Every nurse carries a tablet with the full chart, so whoever comes on a Saturday knows what Tuesday's nurse saw.",
			"Our nurses are employees, not contractors, and each one works a fixed territory. In practice that means the same two or three faces for the whole episode, and a nurse who already knows which pharmacy on your side of town is open on Sundays.",
		],
		includes: [
			"Medication reconciliation and teaching",
			"Vital signs and symptom monitoring with escalation to your physician",
			"Injections, catheter care and lab draws",
			"Diabetic, cardiac and respiratory teaching",
			"A written plan of care your doctor signs",
		],
		payers: "Medicare Part A, Medicare Advantage, Medicaid and most commercial plans when ordered by a physician.",
		related: ["wound-care", "infusion-therapy", "home-health-aide"],
	},
	{
		slug: "physical-therapy",
		name: "Physical therapy",
		title: "In-Home Physical Therapy",
		description:
			"Licensed physical therapists who treat at home after joint replacement, falls, stroke and hospital stays, working on strength, balance and walking in the rooms you actually use.",
		summary: "Strength, balance and walking practice in your own hallway, on your own stairs.",
		paragraphs: [
			"Therapy at home has one advantage a clinic cannot match: the stairs we practice on are the stairs you climb every night. Our physical therapists start with a standardized balance and gait assessment and then walk the house with you, noting the loose rug in the hall, the step down into the garage and the height of the bed.",
			"A typical course after a knee or hip replacement is two to three visits a week for three to five weeks, tapering as you meet goals. For patients recovering from a fall, the therapist also works on getting up from the floor safely and on the exercises that lower the chance of a second fall.",
			"Each visit ends with a short written home program, three or four exercises with pictures, so the work keeps happening between visits. When you are ready for outpatient therapy we send your progress notes to the clinic of your choice so you do not start over.",
		],
		includes: [
			"Gait, balance and fall-risk assessment",
			"Post-surgical strengthening and range of motion",
			"Walker, cane and stair training",
			"Home safety recommendations and equipment advice",
			"A written exercise program for days between visits",
		],
		payers: "Medicare Part A, Medicare Advantage, Medicaid and most commercial plans when ordered by a physician.",
		related: ["occupational-therapy", "skilled-nursing", "speech-language-pathology"],
	},
	{
		slug: "occupational-therapy",
		name: "Occupational therapy",
		title: "Occupational Therapy at Home",
		description:
			"Occupational therapists help patients get back to bathing, dressing, cooking and managing medications safely at home, with adaptive equipment fitted to the house.",
		summary: "Getting back to bathing, dressing and cooking, with the right equipment in the right place.",
		paragraphs: [
			"Physical therapy gets you walking again; occupational therapy gets you showering, dressing and making lunch again. Our occupational therapists focus on the tasks that decide whether someone can stay safely at home, and they do that work in the bathroom and kitchen where it happens.",
			"Much of what an OT recommends is simple and inexpensive: a tub transfer bench instead of a shower chair, a long-handled sponge, moving the coffee and the plates to the shelf between waist and shoulder height. When bigger changes make sense, like grab bars or a raised toilet seat, the therapist measures and gives the family a specific list rather than a catalog.",
			"OTs also work with patients after a stroke on fine motor skills and on cognitive strategies such as pill organizers, written routines and phone reminders, and they train family caregivers in safe transfers so nobody gets hurt helping.",
		],
		includes: [
			"Bathing, dressing and toileting retraining",
			"Adaptive equipment recommendations, measured for your home",
			"Energy conservation for heart and lung conditions",
			"Fine motor and cognitive strategies after a stroke",
			"Caregiver training in safe transfers",
		],
		payers: "Medicare Part A, Medicare Advantage, Medicaid and most commercial plans when ordered by a physician.",
		related: ["physical-therapy", "home-health-aide", "skilled-nursing"],
	},
	{
		slug: "speech-language-pathology",
		name: "Speech-language pathology",
		title: "Speech and Swallowing Therapy at Home",
		description:
			"Speech-language pathologists treat swallowing problems, speech and language loss after stroke, and voice changes from Parkinson's disease in the patient's home.",
		summary: "Swallowing safety, speech and language recovery after stroke, and voice work for Parkinson's.",
		paragraphs: [
			"Our speech-language pathologists see two groups of patients most often: people who have trouble swallowing after a stroke or a long intubation, and people whose speech or language has changed because of a stroke, Parkinson's disease or another neurological condition.",
			"For swallowing, the first visit is a bedside evaluation during an ordinary meal. The therapist watches how food and liquid are handled, recommends textures and positions, and teaches exercises. If the bedside picture suggests silent aspiration, we coordinate an instrumental study with the patient's physician rather than guessing.",
			"For speech and language, therapy is built around what the patient needs to say: ordering at a favorite restaurant, using the phone, reading a grandchild's text message. Several of our SLPs are certified in LSVT LOUD, an intensive voice program for Parkinson's that runs four sessions a week for four weeks.",
		],
		includes: [
			"Bedside swallowing evaluation and diet texture recommendations",
			"Swallowing exercises and safe-eating strategies",
			"Aphasia and speech therapy after stroke",
			"LSVT LOUD voice therapy for Parkinson's disease",
			"Communication aids and caregiver coaching",
		],
		payers: "Medicare Part A, Medicare Advantage, Medicaid and most commercial plans when ordered by a physician.",
		related: ["physical-therapy", "occupational-therapy", "skilled-nursing"],
	},
	{
		slug: "wound-care",
		name: "Wound care",
		title: "Home Wound Care",
		description:
			"Certified wound nurses manage surgical wounds, pressure injuries, diabetic foot ulcers and wound vacs at home, with photo-documented measurements every week.",
		summary: "Certified wound nurses for surgical wounds, pressure injuries, diabetic ulcers and wound vacs.",
		paragraphs: [
			"Every Vantor branch has at least one nurse certified in wound care (WCC or CWON) who reviews every open wound on the branch's census each week, even when a different nurse is doing the dressing changes. That review is where a wound that has stalled gets noticed early.",
			"We measure and photograph each wound at least weekly and share the images with the ordering physician or wound clinic through our secure portal, so the surgeon who placed the incision can see it without an extra office visit. [Negative pressure wound therapy (wound vac)](/guides/glossary#wound-vac) changes are typically three times a week, and our nurses handle the pump, canister and supply orders.",
			"Healing at home depends on more than dressings. The wound nurse also looks at nutrition, blood sugar control, pressure relief on the mattress and chair, and how much the patient is moving, then works with the rest of the care team on whatever is slowing things down.",
		],
		includes: [
			"Weekly measured and photographed wound assessments",
			"Negative pressure wound therapy (wound vac) management",
			"Pressure injury prevention and support surface advice",
			"Diabetic foot ulcer and ostomy care",
			"Coordination with your surgeon or wound clinic",
		],
		payers: "Medicare Part A, Medicare Advantage, Medicaid and most commercial plans when ordered by a physician.",
		related: ["skilled-nursing", "infusion-therapy", "home-health-aide"],
	},
	{
		slug: "infusion-therapy",
		name: "Infusion therapy",
		title: "Home Infusion Nursing",
		description:
			"Infusion nurses administer IV antibiotics, hydration and other therapies at home, manage PICC and port lines, and teach patients and families to run infusions safely.",
		summary: "IV antibiotics, hydration and line care at home, coordinated with your infusion pharmacy.",
		paragraphs: [
			"Patients who would once have stayed in the hospital for six weeks of IV antibiotics now go home with a [PICC line](/guides/glossary#picc-line) and a pump. Our infusion nurses make that work: they meet the patient on the day of discharge, check the line, run the first home dose and teach the patient or a family member to connect and disconnect safely.",
			"We work alongside the infusion pharmacy, which compounds and delivers the medication, and the physician who ordered it. Our nurse handles the weekly dressing change and lab draw, watches for signs of line infection or clotting, and reports lab results to the prescriber the same day.",
			"Beyond antibiotics, our infusion nurses manage hydration, total parenteral nutrition, inotropes for advanced heart failure and some biologic therapies. If a medication must be given in a supervised setting, we will say so plainly and help find a center near you.",
		],
		includes: [
			"PICC, midline and implanted port care",
			"First-dose administration and patient teaching",
			"Weekly dressing changes and lab draws",
			"IV antibiotics, hydration and TPN",
			"Coordination with your infusion pharmacy",
		],
		payers: "Nursing visits are covered by Medicare Part A and most plans; drug and pump coverage depends on your pharmacy benefit.",
		related: ["skilled-nursing", "wound-care", "adult-private-duty"],
	},
	{
		slug: "home-health-aide",
		name: "Home health aide",
		title: "Home Health Aide Visits",
		description:
			"Certified home health aides help with bathing, grooming and personal care during a home health episode, supervised by the patient's Vantor nurse.",
		summary: "Help with bathing and personal care during recovery, supervised by your nurse.",
		paragraphs: [
			"When a nurse or therapist is already seeing a patient under a home health plan, a certified aide can visit for bathing, hair care, skin checks and changing the bed. Aide visits usually run about an hour, two or three times a week, and are added to the plan of care alongside skilled visits rather than on their own.",
			"Our aides are state-certified and complete twelve hours of continuing education a year. A registered nurse supervises every aide's work on-site at least every fourteen days, and aides report anything new, from a reddened heel to a missed dose, to the nurse the same day.",
			"Families sometimes ask whether an aide can stay longer or come every day. Under a home health plan the answer is usually no. If more hours are what the household needs, our private duty team can help, and the two services can run side by side.",
		],
		includes: [
			"Bathing, showering and grooming",
			"Skin checks and reporting to the nurse",
			"Linen changes and light tidying of the care area",
			"Help with walking and exercises from the therapist",
		],
		payers: "Covered by Medicare Part A and most plans when part of a skilled home health plan of care.",
		related: ["skilled-nursing", "occupational-therapy", "adult-private-duty"],
	},
	{
		slug: "adult-private-duty",
		name: "Adult private duty nursing",
		title: "Private Duty Nursing for Adults",
		description:
			"RNs and LPNs for shifts of four to twenty-four hours at home: ventilator and tracheostomy care, complex medication schedules, post-operative overnights and end-of-life support.",
		summary: "Shift nursing from four to twenty-four hours for adults with complex or round-the-clock needs.",
		paragraphs: [
			"Private duty nursing is shift-based care: a nurse in the home for a block of hours, from a four-hour overnight after surgery to round-the-clock coverage for someone on a ventilator. It is different from home health, which brings a nurse for a visit and then leaves.",
			"Every private duty case starts with an RN assessment at home and a staffing plan the family approves, naming the primary nurses and the backups. We keep the team small on purpose. For a 24-hour case that is typically four to six nurses, so the patient is not meeting a stranger every week.",
			"Adult private duty is paid for in several ways: long-term care insurance, Medicaid waiver programs in some states, VA Community Care, workers' compensation and private pay. Our intake coordinators check every option with the family before the first shift.",
		],
		includes: [
			"Ventilator and tracheostomy care",
			"Overnight and post-operative shifts",
			"Complex medication and feeding schedules",
			"End-of-life comfort care alongside hospice",
			"A named nursing team and a written staffing plan",
		],
		payers: "Long-term care insurance, Medicaid waivers, VA Community Care, workers' compensation and private pay.",
		related: ["pediatric-private-duty", "infusion-therapy", "home-health-aide"],
	},
	{
		slug: "pediatric-private-duty",
		name: "Pediatric private duty nursing",
		title: "Pediatric Private Duty Nursing",
		description:
			"Pediatric nurses for medically complex children at home: trachs, ventilators, G-tubes and seizure care, with nursing that can follow a child to school.",
		summary: "Nurses for medically complex children, at home and at school.",
		phone: "(888) 555-0119",
		paragraphs: [
			"Our pediatric team cares for children who go home from the NICU or PICU with a tracheostomy, a ventilator, a feeding tube or a seizure disorder that needs a nurse close by. Every pediatric nurse completes our own trach and vent competency, with a skills check every year, before taking a case.",
			"Most families start with overnight shifts so parents can sleep, then add daytime hours as they return to work. When a child starts school, the nurse can go too: we coordinate with the school district on the health plan, the bus ride and the classroom setup.",
			"In every state we serve, Medicaid covers private duty nursing for children who qualify medically, regardless of household income, through programs like [TEFRA](/guides/glossary#tefra) or a state waiver. Our pediatric intake coordinators walk families through the application and the physician paperwork.",
		],
		includes: [
			"Tracheostomy and home ventilator care",
			"G-tube and J-tube feeding",
			"Seizure monitoring and rescue medication",
			"School nursing and transport support",
			"Parent training before and after discharge",
		],
		payers: "Medicaid (including TEFRA and waiver programs), commercial plans and private pay.",
		related: ["adult-private-duty", "skilled-nursing", "speech-language-pathology"],
	},
	{
		slug: "respite-care",
		name: "Respite care",
		title: "Respite Care for Family Caregivers",
		description:
			"Planned short-term nursing or aide coverage so a family caregiver can rest, travel or attend to their own health, from a single afternoon to a full week.",
		summary: "Short-term coverage so family caregivers can take a break.",
		paragraphs: [
			"Most of the care given at home is given by family. Respite care is a planned break for that person: a nurse or aide takes over for an afternoon, a weekend or a week so the caregiver can see their own doctor, go to a wedding or simply sleep.",
			"We match respite staff to the level of care involved. A parent caring for a child on a ventilator needs a nurse with trach and vent experience; a spouse caring for someone with mid-stage dementia may need an experienced aide who knows how to redirect without arguing. We schedule a short overlap visit beforehand so the patient meets the respite caregiver while family is still there.",
			"Respite is often covered more than families expect. Medicaid waiver programs, the VA, and the National Family Caregiver Support Program through local Area Agencies on Aging all fund respite hours, and hospice patients have a Medicare respite benefit of up to five days in a facility.",
		],
		includes: [
			"Nursing or aide coverage from four hours to seven days",
			"An overlap visit before the first respite shift",
			"Matching staff skill to the care involved",
			"Help finding waiver, VA and Area Agency on Aging funding",
		],
		payers: "Medicaid waivers, VA, Area Agency on Aging grants, long-term care insurance and private pay.",
		related: ["adult-private-duty", "pediatric-private-duty", "home-health-aide"],
	},
];

export const serviceGroups = [
	{
		name: "Home health",
		blurb: "Visits from nurses and therapists after a hospital stay or a change in condition, ordered by a physician.",
		slugs: [
			"skilled-nursing",
			"physical-therapy",
			"occupational-therapy",
			"speech-language-pathology",
			"wound-care",
			"infusion-therapy",
			"home-health-aide",
		],
	},
	{
		name: "Private duty nursing",
		blurb: "A nurse in the home for a shift of four to twenty-four hours, for adults and children with complex needs.",
		slugs: ["adult-private-duty", "pediatric-private-duty"],
	},
];

export function getService(slug: string) {
	return services.find((s) => s.slug === slug);
}
