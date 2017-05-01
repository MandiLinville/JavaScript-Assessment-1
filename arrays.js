//1. What is the lenth of the following contacts array?

var contacts = [];


//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};
var chris = {
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
};
var tony = {
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
};
var andrew = {
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
};
var stefan = {
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
};

contacts.push(jake, matt, chris, tony, andrew, stefan)


//3. Whoops after adding all of those people to the same contacts list you realized you 
// need a list just the mentors. Create a new variable named mentors populate it using contacts 
// array. 

var mentors = []
function getMentors(arr){
	for (var i = 0; i < arr.length; i++) {
		var contact = arr[i]
		if(contact.title === 'mentor'){
			// contacts.splice(i, 1) to remove contact from list
			mentors.push(contact)
			// i--  if you splice decrement to look at everything in array
		}
	}
}
getMentors(contacts)
console.log(mentors)