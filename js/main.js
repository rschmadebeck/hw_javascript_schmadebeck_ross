// Presidents Object
var presidents = {
	barackObama: {
		firstName: 'Barack',
		lastName: 'Obama',
		termLength: 2,
		party: 'Democratic',
		yearsOfPresidency: 7	
	},
	georgeBushJr: {
		firstName: 'George',
		lastName: 'Bush, Sr.',
		termLength: 2,
		party: 'Republican',
		yearsOfPresidency: 8
	},
	billClinton: {
		firstName: 'William',
		lastName: 'Clinton',
		termLength: 2,
		party: 'Democratic',
		yearsOfPresidency: 8
	},
	georgeBushSr: {
		firstName: 'George',
		lastName: 'Bush',
		termLength: 1,
		party: 'Republican',
		yearsOfPresidency: 4
	},
	ronaldReagan: {
		firstName: 'Ronald',
		lastName: 'Reagan',
		termLength: 2,
		party: 'Republican',
		yearsOfPresidency: 8
	}
}
function president() {
	console.log(billClinton[0] + billClinton[1]);
}