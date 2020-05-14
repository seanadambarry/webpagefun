class School{
    constructor(name, level, numStudents) {
      this._name = name;
      this._level = level;
      this._numStudents = numStudents
    }
  
    get name(){
      return this._name;
    }
  
    get level(){
      return this._name
    }
  
    get numStudents(){
      return this._numStudents
    }
  
    set numberOfStudents(newNumberOfStudents){
      if (newNumberOfStudents === isNaN){
        this._numStudents = newNumberOfStudents
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this._numStudents} students at the ${this._level} school level`);
    }
  
  pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[(Math.floor(Math.random() * substituteTeachers.length))]
  }
  }
  
  class PrimarySchool extends School{
    constructor(name, numStudents, pickupPolicy){
      super(name, numStudents);
      this._level = 'Primary';
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy(){
      return this._pickupPolicy
    }
  }

class HighSchool extends School {
    constructor(name, numStudents, sportsTeams){
        super(name, numStudents);
        this._level = 'high';
        this._sportsTeams = sportsTeams
    }

    get sportsTeams(){
        return this._sportsTeams;
        console.log(this._sportsTeams)
    }
}



  /*let chdhs = new School('chdhs','high school',432)
  //let RR = new PrimarySchool('RR', 123, 'dont leave your kid here')
  console.log(chdhs)
  console.log(RR)
  */

  let lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

  lorraineHansbury.quickFacts()

  let subs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']

  console.log(lorraineHansbury.pickSubstituteTeacher(subs))

  const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

  console.log(alSmith)

  console.log(alSmith.sportsTeams)