//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = 'Mandi Linville',
	me.age = 28,
	me['hair color'] = 'brown'


//2. Iterate over the object to console.log the propery or key names. 

function getKeyValues(obj) {
	for (var key in me) {
		if(me.hasOwnProperty(key)){
			var elem = me[key]
			console.log(key + ': ' + elem)
		}
	}

	getKeyValues();