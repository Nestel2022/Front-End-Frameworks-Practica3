import { ISpell} from '../interfaces/index';
import SpellCard from '../components/SpellCard';

interface ISpellListProps {
  spells: ISpell[];
}
 export default function SpellList({spells}: ISpellListProps) {
     return (
    <div className="spell-list">
      {spells.map(spell => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  );
 };