var skills = ["Front Web", "J2EE", "Big Data", "No SQL"];
var bio = {
		"name" : "Carlota",
		"role": "Web Developer",
		"contacts": {
			"mobile": "606559452",
			"email": "carlota_vina@hotmail.com",
			"location": "Madrid"
		},
		"biopic": "images/CarlotaVinaFoto.png",
		"welcomeMessage": "Tomorrow will be better",
		"skills" : skills
};
var work = {
		"jobs": [
		         {
		        	 "employer": "Everis",
		        	 "title": "J2EE programmer",
		        	 "dates": "April 2015 - Future",
		        	 "description": "I work for a insurance company Mapfre. In this project I design the model database and techical design. The technologies use are Spring and web services",
		        	 "location": "Madrid"
		         },
		         {
		        	 "employer": "ISBAN",
		        	 "title": "Databases programmer",
		        	 "dates": "December 2014 - March 2015",
		        	 "description": "FICRES project. Worked with Pl/SQL and Oracle. This project manages the car credit",
		        	 "location": "Madrid"
		         }
		         ]
};
var activity = {
		"projects": [
		             {
		            	 "title": "Front Web developer",
		            	 "dates": "April 2015 - Future",
		            	 "description": "Udacity. In this course I learn some technologies like HTML, JavaScript and AJAX",
		            	 "images": "Madrid"
		             },
		             { 
		            	 "title": "Big Data Expert",
		            	 "dates": "October 2013 - July 2014",
		            	 "description": "U-TAD. I learned Hadoop, Cloudera, Paradigm Map-Reduce, and others big data technologies",
		            	 "images": "Madrid"
		             }
		             ]
};
var education = {
		"schools": [
		            {
		            	"name": "Catalunya Oberta University",
		            	"city": "on line",
		            	"degree": "BA",
		            	"major": "[CompSci]",
		            	"dates": "2011",
		            	"url": "http://example.com"
		            },
		            {
		            	"name": "Oviedo University",
		            	"city": "Gijon",
		            	"degree": "BA",
		            	"major": "[CompSci]",
		            	"dates": "1988",
		            	"url": "http://example.com"
		            }
		            ]
};	

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
bio.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedMail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedMail);
	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedWelcome);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMail);
	$("#footerContacts").append(formattedLocation);
	$("#header").append(formattedBioPic);
	var formattedName = "carlota vina";
	var formattedName1 = inName(formattedName);
	var formattedName2 = HTMLheaderName.replace("%data%",formattedName1);
	$("#header").prepend(formattedName2);
	if(bio.skills.length >=0) {
		$("#header").append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function () {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle    = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle    =  formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

activity.display = function() {
	for (project in activity.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitlep = HTMLprojectTitle.replace("%data%",activity.projects[project].title);
		$(".project-entry:last").append(formattedTitlep);
		var formattedDatesp = HTMLprojectDates.replace("%data%",activity.projects[project].dates);
		$(".project-entry:last").append(formattedDatesp);
		var formattedDescriptionp = HTMLprojectDescription.replace("%data%",activity.projects[project].description);
		$(".project-entry:last").append(formattedDescriptionp);
	}
}
education.display = function() {
	for (study in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedUniversity = HTMLschoolName.replace("%data%",education.schools[study].name);
		var formattedStudyCity   = HTMLschoolLocation.replace("%data%", education.schools[study].city);
		var formattedDegree    =  HTMLschoolDegree.replace("%data%", education.schools[study].degree);
		var formattedDates    =  HTMLschoolDates.replace("%data%", education.schools[study].dates);
		var formattedMajor    =  HTMLschoolMajor.replace("%data%", education.schools[study].major);
		$(".education-entry:last").append(formattedUniversity);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedStudyCity)
		$(".education-entry:last").append(formattedMajor);
	}
}


bio.display();
work.display();
activity.display();
education.display();
$("#mapDiv").append(googleMap);

