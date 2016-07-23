// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendArray = [
	{
	"name":"Bill",
  "photo":"https://wonderingfair.files.wordpress.com/2015/02/bill-nye-lasers.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
	},
  {
  "name":"John",
  "photo":"https://www.colombotelegraph.com/wp-content/uploads/2012/12/John-Lennon.jpg",
  "scores":[
     4,
     3,
     2,
     2,
     4,
     1,
     3,
     1,
     5,
     1
   ]
  },
  {
  "name":"Troll",
  "photo":"http://i.amz.mshcdn.com/AZyYYTABVeiRUG_iAoZhYA2uDhI=/950x534/2016%2F02%2F29%2Faa%2Fdonald_drum.f3427.jpg",
  "scores":[
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1
   ]
  },
  {
  "name":"Katy",
  "photo":"http://3.bp.blogspot.com/-Y1amWexBm7s/UYxkPZrRc8I/AAAAAAAAGbs/Nj1cHDheVa0/s1600/1340809648_katy-perry-zoom.jpg",
  "scores":[
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5
   ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;