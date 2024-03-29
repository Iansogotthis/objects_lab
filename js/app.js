const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
  // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
  album1.title ='Talking Heads - 77'
  
  
  
  // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
  
  const label = album1.albumDetails.label
  console.log(label)
  
  
  const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
  // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
  
  const lpFormat = album2.albumDetails.formats[0]
  album3.albumDetails.formats.push(lpFormat)
  
  
  // Exercise 4:  Update the released property of album3 from a string into a Date object using that string
  
  
  
  album3.albumDetails.released  = new Date(album3.albumDetails.released)
  console.log(album3)
  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  
  // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
  
  album4.albumDetails.label = "Sire"
  console.log(album4.albumDetails.label)
  
  
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
  
album5.albumDetails.labels[1] = "EMI" 
  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats
  
 const formats = album6.albumDetails.formats 
 console.log(formats)
  
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
  
 const labels = talkingHeadsAlbums[4].albumDetails.labels

 console.log(labels)
  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
  
talkingHeadsAlbums[5].albumDetails.released =   talkingHeadsAlbums[6].albumDetails.released


console.log(album6)

  
  
  // Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails
  
  let albumIdx = 4;
  
  const albumDetails = talkingHeadsAlbums[albumIdx].albumDetails
  console.log(albumDetails)


// const colors = ["red", "blue", "greeen"]

//   function longestStringArray(arr){
//     length = 0;
//     for(let i = 0; i < colors.length; i += 1){
//         if(longestStringArray[i].length > length){
//             length = longestStringArray[i]
//         }

//     }

//     return length
        
//     }

  