import { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] =  useState([]);
  const [money, setMoney] =  useState(100);
  const [totalStrength, setTotalStrength] =  useState(0);
  const [totalAgility, setTotalAgility] =  useState(0);
  const [zombieFighters, setZombieFighters] =  useState(
  [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  );

  const handleAddFighter = (Fightername) => {
    const FighterObj = zombieFighters.find(o => o.name === Fightername);
    const FighterPrice=FighterObj.price
    if(money>=FighterPrice){
      setMoney(money-FighterPrice)
      setTotalStrength(totalStrength+FighterObj.strength)
      setTotalAgility(totalAgility+FighterObj.agility)
      setTeam([...team,FighterObj])
      console.log(team);
      
    }else{
      console.log("Not enough money");
    }

  };
  const handleRemoveFighter = (Fightername) => {
    const index = team.findIndex(obj => obj.name === Fightername);
      setMoney(money+team[index].price)
      setTotalStrength(totalStrength-team[index].strength)
      setTotalAgility(totalAgility-team[index].agility)
      team.splice(index, 1)
      console.log(team);
      setTeam(team) 
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h4>Team: 
      <ul>        
        {team.map((Fighter) => (
          <li key={Fighter.name}>
            <img src={Fighter.img} ></img>
            <p>{Fighter.name}</p>
            <p>price: {Fighter.price}</p>
            <p>strength: {Fighter.strength}</p>
            <p>agility: {Fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(Fighter.name)}>Remove</button>
          </li>
        ))}
        </ul>

        </h4>
      <div>
        <h3>Fighters</h3>
        <ul>
        {zombieFighters.map((Fighter) => (
          <li key={Fighter.name}>
            <img src={Fighter.img} ></img>
            <p>{Fighter.name}</p>
            <p>price: {Fighter.price}</p>
            <p>strength: {Fighter.strength}</p>
            <p>agility: {Fighter.agility}</p>
            <button onClick={() => handleAddFighter(Fighter.name)}>Add</button>
          </li>
        ))}
        </ul> 
      </div>
      </>
  );
}

export default App
