import { ISpell} from '../interfaces/index';

interface ISpellCardProps {
  spell: ISpell;  
}

export default function SpellCard({spell}: ISpellCardProps) {  
 return (
    <div className="spell-card">
              
      <img src={spell.icon} alt={spell.name} width="40" height="40" />
      <h3>
        <a href={spell.url} target="_blank" rel="noopener noreferrer">
          {spell.name}
        </a>
      </h3>
      <p>Level: {spell.level}</p>
      <p>Action: {spell.action}</p>
      <p>Range: {spell.range}</p>
      {spell.damage && spell.damage.length > 0 && (
        <div>
          <p>Damage:</p>
          <ul>
            {spell.damage.map((dmg, index) => (
              <li key={index}>
                {dmg.dice} {dmg.damageType}
                {dmg.weapon && " (weapon)"}
              </li>
            ))}
          </ul>
        </div>
      )}     
      
    </div>
  );

};
