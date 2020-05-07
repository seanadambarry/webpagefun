// Write your code below
let bobsFollowers = ['Sean', 'Christine', 'Jerry','Ollie'];
let tinasFollowers = ['Sean', 'Christine', 'Sypereka'];
let mutualFollowers = [];
for (let b = 0; b< bobsFollowers.length; b++){
  for (let t = 0; t < tinasFollowers.length; t++){
    if ( bobsFollowers[b] === tinasFollowers[t]){
      mutualFollowers = bobsFollowers[b];
      console.log(mutualFollowers);
    }
  }
}