document.getElementById("criminal-justice").onclick = function() {CriminalJustice() };
document.getElementById("health").onclick = function() {Health() };
document.getElementById("education").onclick = function() {Education() };
document.getElementById("political-action").onclick = function() {PoliticalAction() };
document.getElementById("international-affairs").onclick = function() {InternationalAffairs() };
document.getElementById("environmental-justice").onclick = function() {EnvironmentalJustice() };

function CriminalJustice() {
	document.getElementById("about-us-topic-header").innerHTML = "Criminal Justice";
	document.getElementById("about-us-details").innerHTML = "The Criminal Justice Committee of the Stanford NAACP believes " + 
	"that our current system of mass incarceration is fundamentally unjust and works to reform and dismantle this system. " + 
	"Through outreach on campus and partnership with off-campus organizations, we seek to educate and empower ourselves to be advocates for criminal justice reform but also educate and spark awareness to those around us.";
}

function Health() {
	document.getElementById("about-us-topic-header").innerHTML = "Health";
	document.getElementById("about-us-details").innerHTML = "The Health Committee of the Stanford NAACP aims to raise awareness " +
	 "about and consider solutions to racial and socioeconomic health disparities. Our members come from a wide variety of majors, " +
	  "including Human Biology, Public Policy, Chemical Engineering, Bioengineering, and African & African American Studies. Together, " +
	  "we think through the web of factors contributing to health issues in the US in general and on Stanford's campus in particular, and we design events to spark discussion about these issues.";
}

function Education() {
	document.getElementById("about-us-topic-header").innerHTML = "Education";
	document.getElementById("about-us-details").innerHTML = "The Education Committee of the Stanford NAACP focuses on educating campus of " + 
	"barriers to educational equity among students of color. Though education has been repeatedly praised as the most promising avenue for " +
	 "racial equality, there is no right to education recognized by our federal government. Recently, our programming has included a panel on " +
	 "the School to Prison pipeline and it’s impact on the Black community in celebration of Black Liberation Month.";
}

function PoliticalAction() {
	document.getElementById("about-us-topic-header").innerHTML = "Political Action";
	document.getElementById("about-us-details").innerHTML = "Coming Soon...";
}

function InternationalAffairs() {
	document.getElementById("about-us-topic-header").innerHTML = "International Affairs";
	document.getElementById("about-us-details").innerHTML = "Coming Soon...";
}

function EnvironmentalJustice() {
	document.getElementById("about-us-topic-header").innerHTML = "Environmental Justice";
	document.getElementById("about-us-details").innerHTML = "Coming Soon...";
}