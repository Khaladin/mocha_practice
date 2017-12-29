const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);

	expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBe(7).toBeA('number');
		done();
	});
});

it('should square a number', () => {
	var res = utils.square(3);

	expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
	utils.asyncSquare(3, (res) => {
		expect(res).toBe(9).toBeA('number');
		done();
	});
});

//should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should have firstName and lastName', () => {
	var user = {location: 'Cory', age: 25};
	var res = utils.setName(user, 'Cory Hoban');

	expect(res).toInclude({
		firstName: 'Cory',
		lastName: 'Hoban'
	});
});

// it('should expect some values', () => {
// 	//expect(12).toNotBe(12);
// 	//expect({name: 'cory'}).toEqual({name: 'Cory'});
// 	//expect([2,3,4]).toExclude(5);
// 	expect({
// 		name: 'Cory',
// 		age: 27,
// 		location: 'Tampa'
// 	}).toExclude({
// 		age: 25
// 	})
// });e