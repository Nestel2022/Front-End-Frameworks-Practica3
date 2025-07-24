import { useEffect, useState } from 'react';
import { ISpell } from '../interfaces/index';
import SpellList from '../components/SpellList';
import { useApi } from '../hooks/useApi';


  
  export default function SpellClassFilter() {
    const { spellImg, getImgSpell, spellsTypes, getSpells, spellsByclass, getSpellsByClass, spellInfoData, getSpellInfo } = useApi();

useEffect(() => {
    getSpells();
  }, [getSpells]); 


  const [selectedClass, setSelectedClass] = useState<string>('all');  

  useEffect(() => {
    if (selectedClass === 'all') { 
     getImgSpell("");  
      return;
    }
    getImgSpell(selectedClass); 
      
  }, [getImgSpell, selectedClass]);


  useEffect(() => {
     if (selectedClass === 'all') {       
      return;   
    }   
    getSpellsByClass(selectedClass); 
  }, [getSpellsByClass, selectedClass]);


const spellsFilter = spellsByclass
 

 useEffect(() => {
  spellsFilter.map((id: string) => {      
    getSpellInfo(id); 
  });
}, [getSpellInfo, spellsFilter]);  
  


 

  // Acumular en un array las respuestas que llegan en spellInfoData
  const [filteredSpells, setFilteredSpells] = useState<ISpell[]>([]);

  useEffect(() => {
    if (spellInfoData && spellInfoData.id) {
      setFilteredSpells((prev) => {
        // Evitar duplicados por id
        if (prev.some((spell) => spell.id === spellInfoData.id)) return prev;
        return [...prev, spellInfoData];
      });
    }
  }, [spellInfoData]);

  // Limpiar el array cuando cambia la clase seleccionada
  useEffect(() => {
    setFilteredSpells([]);
  }, [selectedClass]);
  

  return (    
    <div className="spell-class-filter">       
       <div className='header-spells'>
        {spellImg && (
          <img src={spellImg} alt={`${selectedClass} class`} className="class-image" />
        )}
        <h2>Hechizos de {selectedClass === 'all' ? 'todas las clases' : selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1)}</h2>
       </div>        
      <div className="filter-controls">        
        <div className="class-selector">
          <label htmlFor="class-select">Clase de Hechizo: </label>
          <select
            id="class-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="all">Todas las clases</option>
            {spellsTypes.map((cls) => (
              <option key={cls} value={cls}>
                {cls.charAt(0).toUpperCase() + cls.slice(1)}
              </option>
            ))}
          </select>
        </div>        
      </div>
       <div>   
            <SpellList spells= {filteredSpells} />
        </div>      
    </div>
  );
};

