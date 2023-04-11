const courses = [
	{
		title: "Bachelor of Law",
		subjects: [
			{
				name: "Criminal Law",
				units: 3,
				id: 1001
			},
			{
				name: "Political Science",
				units: 3,
				id: 1002
			}
		]
	},
	{
		title: "Bachelor of Science in Info. Tech",
		subjects: [
			{
				name: "Computer Programming",
				units: 3,
				id: 1003
			},
			{
				name: "System Analysis and Design",
				units: 5,
				id: 1004
			}
		]
	}
];


function main(){
	courses.map((course) => {
		console.log(course);
		course.subjects.filter((subject) =>
		{
			if(subject.id == 1001 || subject.id == 1003){
				console.log(subject.name + " " + subject.units);
			}
			else{
				console.log(subject.name + " " + subject.id);
			}

		});
	});
}

main();