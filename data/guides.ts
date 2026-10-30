export interface Guide {
	slug: string;
	name: string;
	title: string;
	description?: string;
	summary: string;
	reviewedBy: string;
	updated: string;
	paragraphs: string[];
	callIf: string[];
	services: string[];
}

export const guides: Guide[] = [
	{
		slug: "heart-failure",
		name: "Heart failure",
		title: "Managing Heart Failure at Home",
		description:
			"A practical guide to heart failure at home: daily weights, the salt and fluid limits that matter, medication timing, and the symptoms that mean call your nurse today.",
		summary: "Daily weights, salt and fluid limits, and the early signs that mean call today.",
		reviewedBy: "Daniel Whitfield, RN, MSN",
		updated: "2026-06-12",
		paragraphs: [
			"Heart failure means the heart is not pumping as well as the body needs, so fluid backs up into the lungs, legs and belly. It is one of the most common reasons older adults go back to the hospital within a month of leaving it, and most of those readmissions start with a few days of slowly building fluid that nobody noticed.",
			"The single most useful habit is a daily weight: same scale, every morning, after using the bathroom and before breakfast, written on the same sheet. A gain of two to three pounds overnight, or five pounds in a week, is usually fluid rather than food, and it is the earliest warning you will get. Our nurses leave a weight log on the refrigerator at the first visit for exactly this reason.",
			"Most people with heart failure are asked to keep sodium under about 2,000 milligrams a day, and some are given a fluid limit too. Canned soup, deli meat, frozen dinners and restaurant food are where most of the salt hides. It is not neccessary to give up every favorite food; reading labels for a week usually shows where the easy changes are.",
			"Medications are the other half. Water pills work best taken in the morning so the bathroom trips happen during the day. If a dose makes you dizzy when you stand, tell your nurse rather than skipping it; there is usually a timing change that fixes it.",
		],
		callIf: [
			"You gain 2 to 3 pounds overnight or 5 pounds in a week",
			"You need more pillows than usual to breathe at night",
			"Your ankles, legs or belly are more swollen",
			"You feel short of breath doing things that were easy last week",
		],
		services: ["skilled-nursing", "home-health-aide", "infusion-therapy"],
	},
	{
		slug: "copd",
		name: "COPD",
		title: "Living with COPD at Home",
		summary: "Inhaler technique, home oxygen safety, breathing exercises and a written flare plan.",
		reviewedBy: "Hollis Pruett, RN",
		updated: "2026-04-03",
		paragraphs: [
			"Chronic obstructive pulmonary disease, which includes emphysema and chronic bronchitis, narrows the airways and makes it hard to move air out of the lungs. It does not go away, but how someone with COPD feels day to day depends a great deal on things that can be practiced at home.",
			"Inhaler technique is the first thing our nurses check, because most people use at least one inhaler incorrectly. A metered-dose inhaler works far better with a spacer; a dry-powder inhaler needs a fast, deep breath instead of a slow one. Bring every inhaler to the first visit, including the ones you stopped using.",
			"Pursed-lip breathing, in through the nose and out slowly through lips shaped as if to whistle, helps empty the lungs and calms the panic that comes with breathlessness. Our therapists also teach energy conservation: sitting to shower and dress, keeping things used every day between waist and shoulder height, and planning the hardest tasks for the time of day you breathe best.",
			"Every patient on our pulmonary program leaves the first week with a written flare plan from their physician: which medicines to start, at what point to call, and when to go to the emergency room. Home oxygen users also get a safety check, because oxygen and open flames, including candles and gas stoves, do not mix.",
		],
		callIf: [
			"Your mucus changes color or thickens",
			"You are using your rescue inhaler more than usual",
			"You are more breathless than your normal bad day",
			"You have new confusion, drowsiness or a fever",
		],
		services: ["skilled-nursing", "occupational-therapy", "physical-therapy"],
	},
	{
		slug: "diabetes",
		name: "Diabetes",
		title: "Diabetes Care at Home",
		description:
			"Checking blood sugar, insulin at home, foot care and sick-day rules for people with type 1 or type 2 diabetes, from the nurses who teach it every week.",
		summary: "Blood sugar checks, insulin at home, foot care and what to do on a sick day.",
		reviewedBy: "Felicia Mabry, RN, WCC",
		updated: "2026-05-20",
		paragraphs: [
			"Diabetes is the most common diagnosis our nurses see, and it is usually not the reason a patient was in the hospital. It is the condition sitting underneath the pneumonia, the wound or the heart attack, and it makes recovery from all of those harder when blood sugar runs high.",
			"Many patients go home on a new insulin regimen, which is a lot to learn in a hospital discharge conversation. Our nurses teach on the patient's own pen or vials and meter, watch the first few home injections, and set up a simple log so the physician can adjust doses from real numbers. A continuous glucose monitor, if you have one, can share readings with your care team directly.",
			"Feet deserve a daily look, especially if you have lost some feeling in them. A small blister or cut that goes unnoticed for a week can become a wound that takes months to heal. Look at the tops, bottoms and between the toes every day, with a mirror if needed, and never go barefoot, even indoors.",
			"Sick days need a plan made in advance. When you are ill, blood sugar often rises even if you are not eating. Keep taking long-acting insulin unless your doctor has told you otherwise, check more often, drink fluids and know the number at which you call.",
		],
		callIf: [
			"Your blood sugar is over 300 twice in a row",
			"You have a low under 70 that does not come up with treatment",
			"You find a new sore, blister or color change on your foot",
			"You cannot keep food or fluids down",
		],
		services: ["skilled-nursing", "wound-care"],
	},
	{
		slug: "stroke-rehabilitation",
		name: "Stroke recovery",
		title: "Stroke Recovery at Home",
		description:
			"What the first months of stroke recovery at home look like: therapy goals, preventing a second stroke, swallowing safety and support for the family caregiver.",
		summary: "Therapy goals, swallowing safety, preventing a second stroke and caring for the caregiver.",
		reviewedBy: "Carla Benfield, RN",
		updated: "2026-03-14",
		paragraphs: [
			"Most recovery after a stroke happens in the first three to six months, and much of it can happen at home. Patients who leave an inpatient rehab unit often still need physical, occupational and speech therapy, and continuing without a gap matters more than where it happens.",
			"Therapy goals are set around daily life. A physical therapist might work toward walking to the mailbox; an occupational therapist toward dressing without help; a speech-language pathologist toward ordering a meal or reading the mail. Progress is rarely a straight line, and plateaus are normal before the next gain.",
			"Swallowing problems are common after a stroke and are easy to miss. Coughing during meals, a wet or gurgly voice after drinking, or repeated chest infections are reasons to ask for a swallowing evaluation. Following the diet texture your therapist recommends is one of the most effective ways to avoid pneumonia.",
			"Preventing a second stroke means taking blood pressure and cholesterol medicines every day, controlling blood sugar, and not smoking. Family caregivers carry a heavy load in these months; ask your nurse about respite options and caregiver support groups early rather than late.",
		],
		callIf: [
			"New face drooping, arm weakness or slurred speech: call 911",
			"Coughing or choking with most meals",
			"A fall, even without an obvious injury",
			"Signs of depression lasting more than two weeks",
		],
		services: ["physical-therapy", "occupational-therapy", "speech-language-pathology"],
	},
	{
		slug: "joint-replacement",
		name: "Hip and knee replacement",
		title: "Recovering from Hip or Knee Replacement at Home",
		description:
			"A week-by-week look at recovery from hip or knee replacement at home: exercises, pain control, preventing blood clots, and preparing the house before surgery.",
		summary: "Preparing the house, the first two weeks, exercises, pain control and clot prevention.",
		reviewedBy: "Marcus Odom, RN, BSN",
		updated: "2026-07-08",
		paragraphs: [
			"Most people now go home the same day or the day after a hip or knee replacement, so the hard work of recovery happens in the living room. A little preparation before surgery makes the first two weeks much easier: clear a path from bed to bathroom, remove loose rugs, put a firm chair with arms where you will spend the day, and set up a raised toilet seat if your surgeon recommends one.",
			"Physical therapy usually starts within a day or two of getting home, two or three visits a week. Knee patients work hard on bending and straightening; the first two weeks set the range of motion you will keep. Hip patients learn the movements their surgeon wants them to avoid, which depend on the surgical approach, so ask which precautions apply to you.",
			"Take pain medicine on a schedule for the first several days, ideally about thirty minutes before therapy, rather than waiting until the pain is bad. Ice after exercise helps with swelling. Constipation is common with prescription pain medicine and worth preventing from day one.",
			"Blood clots are the most serious early risk. Take the blood thinner your surgeon prescribes for the full course, do ankle pumps every hour you are awake, and walk a little several times a day.",
		],
		callIf: [
			"Calf pain, redness or swelling in one leg",
			"Sudden shortness of breath or chest pain: call 911",
			"Fever over 101°F or drainage from the incision",
			"Pain that is getting worse instead of better",
		],
		services: ["physical-therapy", "occupational-therapy", "skilled-nursing"],
	},
	{
		slug: "dementia",
		name: "Dementia",
		title: "Caring for Someone with Dementia at Home",
		description:
			"Day-to-day dementia care at home: routines, safety changes, handling sundowning and agitation, and how home health and private duty nursing can help families.",
		summary: "Routines, home safety, sundowning, and getting help before the caregiver burns out.",
		reviewedBy: "Lauren Tidwell, RN, BSN",
		updated: "2026-02-26",
		paragraphs: [
			"Dementia changes how a person takes in the world, and much of good dementia care is adjusting the world to fit. A predictable daily routine, with meals, walks and bedtime at the same times, reduces the anxiety that often shows up as agitation.",
			"Home safety changes are worth making early: stove knob covers or an automatic shut-off, locked storage for medications and car keys, night lights between the bedroom and bathroom, and a door alarm if wandering is a risk. Our occupational therapists can walk through the house and suggest changes that keep as much independence as possible.",
			"Late-afternoon confusion and restlessness, often called sundowning, is common. Keeping the house bright in the afternoon, limiting caffeine and naps, and planning a calm activity for that window can help. Arguing with a mistaken belief rarely works; acknowledging the feeling and redirecting usually does.",
			"Home health can help when dementia complicates recovery from something else, such as an infection or a fall. For ongoing support, private duty aides or nurses can cover the hours a family cannot. Caregivers of people with dementia have high rates of depression, and asking for help is part of the care plan, not a failure of it.",
		],
		callIf: [
			"Sudden worsening of confusion over a day or two, which may mean an infection",
			"A fall, or a new difficulty walking",
			"Refusing food or fluids for more than a day",
			"You feel unable to keep them, or yourself, safe",
		],
		services: ["occupational-therapy", "home-health-aide", "adult-private-duty"],
	},
	{
		slug: "parkinsons",
		name: "Parkinson's disease",
		title: "Parkinson's Disease Care at Home",
		description:
			"Medication timing, fall prevention, voice and swallowing therapy, and keeping active at home with Parkinson's disease.",
		summary: "Medication timing, fall prevention, voice therapy and staying active.",
		reviewedBy: "Wesley Carmichael, RN",
		updated: "2026-01-30",
		paragraphs: [
			"Parkinson's disease affects movement, but it also affects voice, swallowing, sleep, mood and digestion. Home care for Parkinson's is usually a team effort, with nursing, physical therapy and speech therapy each taking a piece.",
			"Timing matters with Parkinson's medicine more than with almost any other. Carbidopa-levodopa works best taken on a strict schedule, often thirty to sixty minutes before meals, because protein can block its absorption. A dose that is an hour late can mean an hour of stiffness. Our nurses help set up alarms and pill organizers and keep track of 'off' periods to share with the neurologist.",
			"Falls are the biggest risk at home. Physical therapists work on longer steps, turning safely and getting through doorways without freezing; a strip of tape on the floor or a rhythmic count can break a freeze. Exercise of almost any kind, including walking, cycling and tai chi, slows the loss of function and is worth building into every day.",
			"Many people with Parkinson's speak more softly than they realize. LSVT LOUD, an intensive four-week voice program offered by several of our speech-language pathologists, retrains volume. The same therapists evaluate swallowing, which becomes harder as the disease progresses.",
		],
		callIf: [
			"Choking or coughing during meals",
			"A fall or near-fall",
			"New hallucinations or confusion, which may be a medication effect",
			"Constipation lasting more than three days",
		],
		services: ["physical-therapy", "speech-language-pathology", "skilled-nursing"],
	},
	{
		slug: "tracheostomy-care",
		name: "Tracheostomy care",
		title: "Tracheostomy Care at Home",
		description:
			"Daily trach care for children and adults at home: suctioning, stoma and tie care, humidity, emergency trach changes, and what to keep in the go-bag.",
		summary: "Suctioning, stoma care, humidity and the emergency go-bag, for children and adults.",
		reviewedBy: "Renee Calloway, RN",
		updated: "2026-08-18",
		paragraphs: [
			"Going home with a tracheostomy, whether it is a child leaving the NICU or an adult after a long ICU stay, means learning a set of skills that every caregiver in the house needs. Before discharge, at least two family members should be able to suction, change the ties and do an emergency trach change without help.",
			"Suctioning is done as needed, not on a fixed schedule: when you hear secretions, see them, or the person is working harder to breathe. Measure the catheter depth so it goes just to the end of the tube. Clean the stoma at least once a day and look for redness, skin breakdown or a change in drainage.",
			"Because a trach bypasses the nose, the air reaching the lungs is dry. A heat and moisture exchanger during the day and heated humidity at night keep secretions thin and the tube clear. Thick, sticky secretions are often a sign that humidity needs to go up.",
			"Every trach patient needs a go-bag that goes everywhere, including to school: a spare trach in the current size and one size smaller, ties, a suction machine or manual suction, catheters, saline, scissors and a resuscitation bag. Our private duty nurses check it at the start of every shift.",
		],
		callIf: [
			"The trach comes out and cannot be replaced: call 911",
			"Breathing is harder even after suctioning",
			"Secretions turn green, bloody or have a bad smell",
			"Redness, swelling or bleeding at the stoma",
		],
		services: ["pediatric-private-duty", "adult-private-duty", "skilled-nursing"],
	},
];

export function getGuide(slug: string) {
	return guides.find((g) => g.slug === slug);
}
