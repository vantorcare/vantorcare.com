export interface Location {
	slug: string;
	city: string;
	state: string;
	stateName: string;
	title: string;
	description: string;
	address: string;
	phone: string;
	opened: number;
	director: string;
	counties: string[];
	hospitals: string[];
	services: string[];
	paragraphs: string[];
}

const homeHealth = [
	"skilled-nursing",
	"physical-therapy",
	"occupational-therapy",
	"speech-language-pathology",
	"wound-care",
	"home-health-aide",
];

export const locations: Location[] = [
	{
		slug: "greenville",
		city: "Greenville",
		state: "SC",
		stateName: "South Carolina",
		title: "Home Health Care in Spartanburg, SC",
		description:
			"Vantor Care Greenville: skilled nursing, therapy and private duty nursing across Greenville, Pickens, Anderson and Laurens counties, from our original office on Verdae Boulevard.",
		address: "200 Verdae Boulevard, Suite 410, Greenville, SC 29607",
		phone: "(864) 555-0141",
		opened: 2012,
		director: "Renee Calloway, RN",
		counties: ["Greenville", "Pickens", "Anderson", "Laurens"],
		hospitals: ["Prisma Health Greenville Memorial", "Bon Secours St. Francis", "AnMed Anderson"],
		services: [...homeHealth, "infusion-therapy", "adult-private-duty", "pediatric-private-duty"],
		paragraphs: [
			"Greenville is where Vantor started, with three nurses and a borrowed conference room in 2012. The branch shares a building with our support office, which is why it is usually the first to try a new charting tool or visit schedule before the rest of the network does.",
			"Our Greenville nurses cover the city, the Travelers Rest and Greer corridors, and the lake communities in Pickens County. Because so many of our patients here are discharged from the downtown hospitals, the branch keeps a liaison nurse on-site at Greenville Memorial on weekdays to meet patients before they leave.",
			"Greenville runs the largest pediatric private duty team in the network, about forty nurses, many of whom started on the pediatric floor at the children's hospital across town.",
		],
	},
	{
		slug: "spartanburg",
		city: "Spartanburg",
		state: "SC",
		stateName: "South Carolina",
		title: "Home Health Care in Spartanburg, SC",
		description:
			"Vantor Care Spartanburg serves Spartanburg, Cherokee and Union counties with skilled nursing, rehabilitation therapy and wound care at home.",
		address: "1451 John B. White Sr. Boulevard, Suite 220, Spartanburg, SC 29306",
		phone: "(864) 555-0158",
		opened: 2015,
		director: "Marcus Odom, RN, BSN",
		counties: ["Spartanburg", "Cherokee", "Union"],
		hospitals: ["Spartanburg Medical Center", "Pelham Medical Center", "Mary Black Health"],
		services: [...homeHealth, "adult-private-duty"],
		paragraphs: [
			"Our Spartanburg branch opened in 2015 to serve patients the Greenville team had been driving forty minutes to reach. It now covers the whole of Spartanburg County plus Gaffney and Union, where there are fewer home health options and longer distances between patients.",
			"A large share of Spartanburg's patients are recovering from joint replacement, so the branch has more physical therapists per nurse than any other Vantor office. Several of them run a pre-surgery visit for patients whose surgeons refer them in advance, so the walker is fitted and the bathroom is ready before the operation.",
			"The branch also runs a weekly heart failure clinic call: patients on our cardiac program phone in their weight and symptoms each Monday, and a nurse follows up the same day with anyone who is trending the wrong way.",
		],
	},
	{
		slug: "columbia",
		city: "Columbia",
		state: "SC",
		stateName: "South Carolina",
		title: "Home Health and Private Duty Nursing in Columbia, SC",
		description:
			"Vantor Care Columbia provides home health and adult private duty nursing in Richland, Lexington, Kershaw and Fairfield counties.",
		address: "1333 Main Street, Suite 600, Columbia, SC 29201",
		phone: "(803) 555-0123",
		opened: 2016,
		director: "Angela Pressley, RN",
		counties: ["Richland", "Lexington", "Kershaw", "Fairfield"],
		hospitals: ["Prisma Health Richland", "Lexington Medical Center", "MUSC Health Columbia"],
		services: [...homeHealth, "infusion-therapy", "adult-private-duty"],
		paragraphs: [
			"Columbia's office sits downtown, a few blocks from the State House, and serves patients from Lake Murray to Camden. Because the city is home to a large veterans' population and the Dorn VA Medical Center, the branch is the network's lead office for VA Community Care referrals.",
			"Columbia runs our busiest home infusion program in South Carolina, with four nurses who do nothing but line care, first doses and IV teaching. Many of their patients are on long courses of antibiotics after orthopedic infections and are discharged from Lexington Medical Center.",
			"The branch's adult private duty team supports a growing number of ventilator patients who would otherwise live in a long-term acute care hospital, and works closely with the respiratory therapists from the patients' equipment companies.",
		],
	},
	{
		slug: "charleston",
		city: "Charleston",
		state: "SC",
		stateName: "South Carolina",
		title: "Home Health Care in Charleston, SC",
		description:
			"Vantor Care Charleston covers the peninsula, Mount Pleasant, West Ashley, Summerville and the sea islands with skilled nursing, therapy and wound care.",
		address: "4000 Faber Place Drive, Suite 300, North Charleston, SC 29405",
		phone: "(843) 555-0136",
		opened: 2017,
		director: "Tomasina Grant, RN, CWON",
		counties: ["Charleston", "Berkeley", "Dorchester"],
		hospitals: ["MUSC Medical Center", "Roper Hospital", "Trident Medical Center", "East Cooper Medical Center"],
		services: [...homeHealth, "infusion-therapy", "adult-private-duty", "pediatric-private-duty"],
		paragraphs: [
			"Our Charleston office is in North Charleston near the airport, which puts nurses within half an hour of most of the tri-county area outside rush hour. Patients on Johns Island, Edisto and the other sea islands get a dedicated nurse team who live out that way, so a bridge closing does not cancel a visit.",
			"The branch director is a certified wound and ostomy nurse, and Charleston's [wound care program](/services/wound-care) takes referrals from the wound clinics at MUSC and Roper. Charleston nurses also manage many new ostomies after colorectal surgery and teach pouching at home in the first weeks.",
			"During hurricane season every Charleston patient has a written evacuation plan, and the branch calls each one before a named storm reaches the coast to confirm where they will be and how to reach them.",
		],
	},
	{
		slug: "charlotte",
		city: "Charlotte",
		state: "NC",
		stateName: "North Carolina",
		title: "Home Health and Private Duty Nursing in Charlotte, NC",
		description:
			"Vantor Care Charlotte provides home health, adult and pediatric private duty nursing across Mecklenburg, Union, Cabarrus and Gaston counties.",
		address: "5970 Fairview Road, Suite 450, Charlotte, NC 28210",
		phone: "(704) 555-0172",
		opened: 2018,
		director: "Daniel Whitfield, RN, MSN",
		counties: ["Mecklenburg", "Union", "Cabarrus", "Gaston"],
		hospitals: ["Atrium Health Carolinas Medical Center", "Novant Health Presbyterian", "Atrium Health Levine Children's"],
		services: [...homeHealth, "infusion-therapy", "adult-private-duty", "pediatric-private-duty"],
		paragraphs: [
			"Charlotte is the largest Vantor branch by number of patients, with teams based in SouthPark, University City and Concord so that nurses spend their day in one part of the metro instead of crossing I-77 at five o'clock.",
			"Our pediatric team in Charlotte cares for many children discharged from Levine Children's Hospital with tracheostomies and home ventilators. Nurses complete a two-day hospital orientation on the pulmonary unit before their first home shift, and families meet the primary nurse before the child leaves the hospital.",
			"In North Carolina, home health agencies need a state license and private duty nursing for children is covered by Medicaid through the CAP/C waiver. Our Charlotte intake team handles CAP/C paperwork every week and can usually tell a family within a day what their child is likely to qualify for.",
		],
	},
	{
		slug: "asheville",
		city: "Asheville",
		state: "NC",
		stateName: "North Carolina",
		title: "Home Health Care in Asheville, NC",
		description:
			"Vantor Care Asheville brings nursing and therapy to Buncombe, Henderson, Haywood and Madison counties, including mountain communities far from a hospital.",
		address: "1 Oak Plaza, Suite 205, Asheville, NC 28801",
		phone: "(828) 555-0164",
		opened: 2019,
		director: "Hollis Pruett, RN",
		counties: ["Buncombe", "Henderson", "Haywood", "Madison"],
		hospitals: ["Mission Hospital", "AdventHealth Hendersonville", "Pardee UNC Health Care"],
		services: [...homeHealth, "adult-private-duty"],
		paragraphs: [
			"Mountain home health is a different job. Some of our Asheville patients live forty minutes up a gravel road from the nearest pharmacy, so nurses plan routes around weather and keep a supply kit in every car for the visit that turns out to need something unexpected.",
			"Buncombe and Henderson counties have one of the oldest populations in North Carolina, and many Asheville patients are managing more than one chronic condition at once. The branch runs our pulmonary program for patients with COPD and home oxygen; our [COPD guide](/guides/copd) was written largely by its respiratory-trained nurses.",
			"After Hurricane Helene in 2024, the branch spent weeks checking on patients by four-wheel drive and on foot where roads had washed out. That experience shaped the emergency plan every Vantor branch now uses.",
		],
	},
	{
		slug: "hickory",
		city: "Hickory",
		state: "NC",
		stateName: "North Carolina",
		title: "Home Health Care in Hickory, NC",
		description:
			"Vantor Care Hickory serves Catawba, Burke, Caldwell and Alexander counties with skilled nursing, therapy and home health aide visits.",
		address: "1960 Tate Boulevard SE, Suite 120, Hickory, NC 28602",
		phone: "(828) 555-0109",
		opened: 2021,
		director: "Carla Benfield, RN",
		counties: ["Catawba", "Burke", "Caldwell", "Alexander"],
		hospitals: ["Catawba Valley Medical Center", "Frye Regional Medical Center", "UNC Health Blue Ridge"],
		services: homeHealth,
		paragraphs: [
			"Hickory is one of our newer branches, opened in 2021 when Catawba Valley Medical Center asked for another home health partner for patients going home to the foothills. It focuses on home health only; private duty cases in the area are staffed from Charlotte.",
			"The branch's therapists see many patients recovering from strokes, and Hickory has two speech-language pathologists who split their time between swallowing evaluations and aphasia therapy. They coordinate closely with the inpatient rehab unit at Frye so that therapy continues without a gap after discharge.",
			"Hickory also runs a small fall-prevention program for patients over 75 that combines a physical therapy home assessment with a pharmacist medication review, after the branch found that most of its readmissions began with a fall.",
		],
	},
	{
		slug: "savannah",
		city: "Savannah",
		state: "GA",
		stateName: "Georgia",
		title: "Home Health Care in Savannah, GA",
		description:
			"Vantor Care Savannah serves Chatham, Effingham, Bryan and Liberty counties with skilled nursing, wound care, therapy and adult private duty nursing.",
		address: "7 East Congress Street, Suite 800, Savannah, GA 31401",
		phone: "(912) 555-0187",
		opened: 2019,
		director: "Felicia Mabry, RN, WCC",
		counties: ["Chatham", "Effingham", "Bryan", "Liberty"],
		hospitals: ["Memorial Health University Medical Center", "St. Joseph's/Candler", "Liberty Regional Medical Center"],
		services: [...homeHealth, "adult-private-duty"],
		paragraphs: [
			"Savannah was our first Georgia branch. The office is in the historic district, but most visits are out in Pooler, Richmond Hill, Rincon and the military families around Fort Stewart in Liberty County.",
			"Diabetes is the most common diagnosis among Savannah patients, and diabetic foot wounds are a large part of the branch's work. Its certified wound nurses run a weekly review of every open wound on census and take referrals for [wound and ostomy care](/services/wound-care) directly from the limb preservation clinic at Memorial.",
			"Georgia requires home health agencies to be licensed by the Department of Community Health, and our Savannah branch is surveyed alongside our Augusta and Athens offices. Its most recent survey, in March, found no deficiencies.",
		],
	},
	{
		slug: "augusta",
		city: "Augusta",
		state: "GA",
		stateName: "Georgia",
		title: "Home Health and Private Duty Nursing in Augusta, GA",
		description:
			"Vantor Care Augusta covers Richmond and Columbia counties in Georgia and Aiken County, South Carolina, with home health and pediatric private duty nursing.",
		address: "3626 Walton Way Extension, Suite 3, Augusta, GA 30909",
		phone: "(706) 555-0115",
		opened: 2020,
		director: "Jerome Haskins, RN",
		counties: ["Richmond", "Columbia", "Aiken (SC)"],
		hospitals: ["Wellstar MCG Health", "Piedmont Augusta", "Children's Hospital of Georgia", "Aiken Regional Medical Centers"],
		services: [...homeHealth, "pediatric-private-duty"],
		paragraphs: [
			"Augusta straddles the Savannah River, and so does our branch: nurses based here cover Augusta, Evans and Martinez on the Georgia side and Aiken and North Augusta in South Carolina, under both states' licenses.",
			"The branch has a pediatric private duty team that grew out of a partnership with the Children's Hospital of Georgia. Most of its families have a child with a tracheostomy or a seizure disorder, and the team includes three nurses who accompany children to school in Columbia County.",
			"Augusta also sees a steady flow of patients recovering from cardiac surgery, and the branch runs our cardiac rehab bridge, a set of home nursing and therapy visits for the weeks between discharge and the start of outpatient cardiac rehab.",
		],
	},
	{
		slug: "athens",
		city: "Athens",
		state: "GA",
		stateName: "Georgia",
		title: "Home Health Care in Athens, GA",
		description:
			"Vantor Care Athens provides nursing, therapy and aide visits in Clarke, Oconee, Jackson, Madison and Barrow counties.",
		address: "1680 Prince Avenue, Suite 1B, Athens, GA 30606",
		phone: "(706) 555-0193",
		opened: 2022,
		director: "Lauren Tidwell, RN, BSN",
		counties: ["Clarke", "Oconee", "Jackson", "Madison", "Barrow"],
		hospitals: ["Piedmont Athens Regional", "St. Mary's Hospital", "Northeast Georgia Medical Center Barrow"],
		services: homeHealth,
		paragraphs: [
			"Our Athens branch opened in 2022 on Prince Avenue, a short drive from both Piedmont Athens Regional and St. Mary's. It serves a mix of college-town neighborhoods and rural counties where the nearest hospital can be half an hour away.",
			"Athens has become our dementia care lead. Its nurses and therapists have all completed dementia-capable care training, and the branch works with the memory clinic at St. Mary's to support patients whose dementia is complicating recovery from something else, like a broken hip or pneumonia.",
			"Because many of the branch's patients are cared for by a spouse who is also older, Athens social workers spend extra time on caregiver support, connecting families with the Northeast Georgia Area Agency on Aging and local adult day programs.",
		],
	},
	{
		slug: "chattanooga",
		city: "Chattanooga",
		state: "TN",
		stateName: "Tennessee",
		title: "Home Health and Private Duty Nursing in Chattanooga, TN",
		description:
			"Vantor Care Chattanooga serves Hamilton, Bradley and Marion counties in Tennessee and Catoosa and Walker counties in Georgia.",
		address: "1100 Market Street, Suite 300, Chattanooga, TN 37402",
		phone: "(423) 555-0148",
		opened: 2021,
		director: "Bethany Overstreet, RN",
		counties: ["Hamilton", "Bradley", "Marion", "Catoosa (GA)", "Walker (GA)"],
		hospitals: ["Erlanger Baroness Hospital", "CHI Memorial", "Parkridge Medical Center", "Children's Hospital at Erlanger"],
		services: [...homeHealth, "infusion-therapy", "adult-private-duty", "pediatric-private-duty"],
		paragraphs: [
			"Chattanooga was our first Tennessee branch, opened in 2021 in the Market Street building downtown. Its nurses cross into north Georgia every day to reach patients in Fort Oglethorpe, Ringgold and Rossville who are discharged from Chattanooga hospitals.",
			"The branch's [pediatric private duty](/services/pediatric-private-duty) team works with the Children's Hospital at Erlanger, and in Tennessee most of its families are covered through TennCare's Katie Beckett program. Our intake coordinators help with the application, which includes a medical eligibility review.",
			"Chattanooga also cares for a number of adults with spinal cord injuries who need long private duty shifts, many of them younger patients referred by the Siskin Hospital for Physical Rehabilitation.",
		],
	},
	{
		slug: "knoxville",
		city: "Knoxville",
		state: "TN",
		stateName: "Tennessee",
		title: "Home Health Care in Knoxville, TN",
		description:
			"Vantor Care Knoxville brings skilled nursing, therapy and infusion nursing to Knox, Blount, Sevier and Anderson counties.",
		address: "800 South Gay Street, Suite 1450, Knoxville, TN 37929",
		phone: "(865) 555-0131",
		opened: 2023,
		director: "Wesley Carmichael, RN",
		counties: ["Knox", "Blount", "Sevier", "Anderson"],
		hospitals: ["University of Tennessee Medical Center", "Fort Sanders Regional", "Parkwest Medical Center", "Blount Memorial"],
		services: [...homeHealth, "infusion-therapy"],
		paragraphs: [
			"Knoxville is our newest branch, opened in 2023 in the South Gay Street tower downtown. In its first two years it grew to serve patients from Oak Ridge to Sevierville and Maryville.",
			"The branch has a strong orthopedic focus, with a large share of patients coming home after hip and knee replacement at Fort Sanders and Parkwest. Its physical therapists use a standardized joint-replacement pathway and report each patient's walking distance and range of motion to the surgeon's office every week.",
			"Knoxville's infusion nurses support the outpatient antibiotic program at UT Medical Center, and the branch is building a pulmonary team modeled on the one in Asheville for patients across the Smoky Mountain counties.",
		],
	},
];

export function getLocation(slug: string) {
	return locations.find((l) => l.slug === slug);
}

export const states = ["SC", "NC", "GA", "TN"] as const;
