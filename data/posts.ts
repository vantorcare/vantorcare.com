export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	author: string;
	sections: { heading?: string; paragraphs: string[] }[];
}

export const posts: Post[] = [
	{
		slug: "home-health-vs-private-duty",
		title: "Home health or private duty nursing? How to tell which one you need",
		description:
			"Home health and private duty nursing both bring a nurse to the house, but they are paid for differently, scheduled differently and meant for different situations.",
		date: "2026-09-22",
		author: "Angela Pressley, RN",
		sections: [
			{
				paragraphs: [
					"Our intake line gets this question more than any other, usually from an adult child trying to arrange care for a parent who is about to leave the hospital. The two services sound alike and both bring a nurse to the house, but almost everything else about them is different.",
				],
			},
			{
				heading: "Home health is visits",
				paragraphs: [
					"Home health is intermittent: a nurse or therapist comes for a visit of about an hour, does something that needs a licensed professional, and leaves. A physician orders it, the plan of care has goals, and it ends when those goals are met, typically after a few weeks. Medicare covers it at no cost to the patient for people who are homebound and need skilled care.",
				],
			},
			{
				heading: "Private duty is shifts",
				paragraphs: [
					"Private duty nursing is continuous: a nurse stays in the home for a shift, anywhere from four hours to around the clock. It is for people who need a nurse nearby for long stretches, such as someone on a ventilator or a child with a tracheostomy. Medicare does not cover it. Medicaid often does for children, and for adults it is usually paid by long-term care insurance, a waiver program, the VA or the family.",
				],
			},
			{
				heading: "Many families use both",
				paragraphs: [
					"The two are not either-or. A patient on home health for wound care might also have a private duty nurse overnight. When we set up both, the home health nurse and the private duty team share one chart so nothing falls between them. If you are not sure which you need, call intake and describe the situation; that conversation is free and usually takes ten minutes.",
				],
			},
		],
	},
	{
		slug: "what-medicare-covers-at-home",
		title: "What Medicare actually covers at home",
		description:
			"Medicare's home health benefit is generous but narrow. Here is what 'homebound' means, what is covered at no cost, and what families are often surprised to learn is not.",
		date: "2026-08-11",
		author: "Jerome Haskins, RN",
		sections: [
			{
				paragraphs: [
					"Medicare's home health benefit pays in full for nursing and therapy visits at home, with no deductible and no copay. Families are often surprised by how much it covers, and then surprised again by what it does not.",
				],
			},
			{
				heading: "Who qualifies",
				paragraphs: [
					"Two conditions have to be met. First, the patient must be homebound, which does not mean bedbound: it means leaving home takes a considerable and taxing effort, such as needing a walker and another person's help. Going to the doctor, to church or to the barber occasionally does not disqualify anyone. Second, the patient must need skilled care, such as nursing or therapy, and a physician or nurse practitioner must certify that after a face-to-face visit.",
				],
			},
			{
				heading: "What it covers",
				paragraphs: [
					"Covered services include skilled nursing, physical, occupational and speech therapy, medical social work, and part-time home health aide visits while skilled care is ongoing. Durable medical equipment like walkers and hospital beds is covered separately under Part B, usually at 80 percent.",
				],
			},
			{
				heading: "What it does not",
				paragraphs: [
					"Medicare does not pay for 24-hour care at home, for meals, or for help with bathing and housekeeping when that is the only help needed. That is where private duty and personal care come in. Our intake team can tell you within one call whether a patient is likely to qualify and what the rest of the plan might cost; see our [insurance page](/insurance) for the plans we accept.",
				],
			},
		],
	},
	{
		slug: "preparing-for-hospital-discharge",
		title: "Seven things to do before a parent comes home from the hospital",
		description:
			"A short checklist for the days before discharge: the medication list, the follow-up appointments, the bathroom and the questions to ask the discharge planner.",
		date: "2026-07-02",
		author: "Renee Calloway, RN",
		sections: [
			{
				paragraphs: [
					"Discharge often comes faster than families expect, sometimes with a few hours' notice. These are the things our nurses most wish had been done before they arrive for the first visit.",
				],
			},
			{
				heading: "Before discharge day",
				paragraphs: [
					"Ask the discharge planner which home health agency has been referred and when the first visit will be; you can ask for a specific agency. Get a written medication list and ask which home medicines were stopped, since that is where most mistakes happen. Make sure the first follow-up appointment is booked and that someone can drive.",
				],
			},
			{
				heading: "At home",
				paragraphs: [
					"Clear a wide path from the bed to the bathroom and take up loose rugs. Put a night light in the hallway. If the bedroom is upstairs and stairs are hard, set up a bed downstairs for the first week or two. Bring every pill bottle in the house, including vitamins and over-the-counter medicines, to one place so the nurse can check them against the new list.",
				],
			},
			{
				heading: "On the first night",
				paragraphs: [
					"Write down the after-hours number for the home health agency and the doctor and put it by the phone. Ours is staffed by an on-call nurse every night. If the patient has heart failure, start daily weights the very next morning; our [heart failure guide](/guides/heart-failure) explains why.",
				],
			},
		],
	},
	{
		slug: "first-month-with-night-nursing",
		title: "Our first month with a night nurse",
		description:
			"A Charlotte family describes bringing their son home from the PICU with a tracheostomy, and what changed when private duty night nursing started.",
		date: "2026-05-27",
		author: "Daniel Whitfield, RN, MSN",
		sections: [
			{
				paragraphs: [
					"Last spring we cared for a two-year-old named Eli, who came home from Levine Children's Hospital after four months in the PICU with a tracheostomy and an overnight ventilator. His parents, Jasmine and Andre, agreed to share how the first month went, in the hope it helps another family preparing for the same thing.",
				],
			},
			{
				heading: "The first week",
				paragraphs: [
					"\"We had both done our trach training and passed the emergency change,\" Jasmine said, \"but at home it was just us, and every alarm made my heart stop.\" Night nursing was approved but not yet staffed for the first five nights, so the couple took turns staying awake. By the fourth night, Andre said, neither of them was safe to drive.",
				],
			},
			{
				heading: "When the nurses started",
				paragraphs: [
					"Eli's primary night nurse, Keisha, had met him twice in the hospital before discharge. She worked four nights a week, with a second nurse covering the other three. \"The first night she was there I slept seven hours straight,\" Jasmine said. \"I didn't know how much that was going to change.\"",
					"Within the month, Andre was back at work full time and Jasmine had started thinking about returning part time. Eli's nurses kept a shared log the family read every morning, and Keisha noticed a pattern of overnight desaturations that led to a ventilator setting change at his next pulmonology visit.",
				],
			},
			{
				heading: "What they would tell another family",
				paragraphs: [
					"\"Ask for nursing to start the night you come home, not a week later,\" Andre said. \"And meet the nurses in the hospital if you can.\" We have since changed our process so that a pediatric case is not discharged home until night shifts are staffed. Read more about our [pediatric private duty nursing](/services/pediatric-private-duty) or our [trach care guide](/guides/tracheostomy-care).",
				],
			},
		],
	},
];

export function getPost(slug: string) {
	return posts.find((p) => p.slug === slug);
}
