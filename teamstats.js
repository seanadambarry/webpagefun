let team = {
    _players : [
    {
        firstName : 'Devon',
        lastName : 'White',
        age : 33
    },
    {
        firstName : 'Joe',
        lastName : 'Carter',
        age : 35
    },
    {
        firstName : 'Kelly',
        lastName : 'Gruber',
        age : 31
    },
    ],
    get players(){
        return this._players
    },
    _games : [
        {
            opponent : 'Yankees',
            teamRuns : 9,
            opponentRuns : 11
        },
        {
            opponent : 'Red Sox',
            teamRuns : 3,
            opponentRuns : 1
        },
        {
            opponent : 'Expos',
            teamRuns : 2,
            opponentRuns : 2
        },
    ],
    get games(){
        return this._games
    },
    addplayer(firstName, lastName, age){
        const newPlayer = {
            firstName : firstName,
            lastName : lastName,
            age : age
        };
        team._players.push(newPlayer)
    },
    addGame(oppName, teamRuns, OppRuns){
        const newGame = {
            opponent : oppName,
            teamRuns : teamRuns,
            opponentRuns : OppRuns
        }
        team.games.push(newGame)
    }

}




//chekc stuff
console.log(team)
team.addplayer('Sean','Barry','41')
team.addplayer('Steph','Curry','28')
team.addplayer('Lisa','Leslie','44')
team.addplayer('Bugs','Bunny','76')

team.addGame('Mariners',5,4)
console.log(team)
