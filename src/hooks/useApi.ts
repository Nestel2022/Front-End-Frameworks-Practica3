import { useState } from 'react';
import { ISpell } from '../interfaces/index';
import { spellImgClass, spellClass, spellForNameClass, spellInfo } from "../services/spells-api";
import { useCallback } from 'react';

export const useApi = () => {

  const [spellImg, setSpellImg] = useState(""); 
  const [spellsTypes, setSpells] = useState<string[]>([]);
  const [spellsByclass, setSpellsByClass] = useState<string[]>([]);
  const [spellInfoData, setSpellInfoData] = useState<ISpell | null>(null);
  

  function getImgSpell(spell: string) {
    try {
      if (!spell) {
        setSpellImg("");
        return;
      }
      // Fetch the image URL for the spell class
      const response = spellImgClass(spell);
      setSpellImg(response);
    } catch (error) {
      console.error("Error fetching spell image:", error);
    }

  }

  const getSpells = useCallback(() => {
    try {
      spellClass().then(data => {
        setSpells(data);
      });
    } catch (error) {
      console.error("Error fetching spells:", error);
    }}, []);

  const getSpellsByClass = useCallback((name: string) => {
    try {
      if (!name || name === 'all') {
        setSpellsByClass([]);
        return;
      }
      spellForNameClass(name).then(data => {
        setSpellsByClass(data);
      });
    } catch (error) {
      console.error(`Error fetching spells for class ${name}:`, error);
    }
  }, []);

  const getSpellInfo = useCallback((id: string) => {
    try {
      spellInfo(id).then(data => {
        setSpellInfoData(data);
      });
    } catch (error) {
      console.error(`Error fetching spell info for id ${id}:`, error);
    }
  }, []);





  return { spellImg, getImgSpell, spellsTypes, getSpells, spellsByclass, getSpellsByClass, spellInfoData, getSpellInfo };
};