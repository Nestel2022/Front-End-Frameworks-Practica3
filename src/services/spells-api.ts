import { ISpell } from "../interfaces";

const BASE_URL = 'https://inesdi2025-resources-p2.fly.dev/v1';

function spellImgClass(spell: string) {
  return `${BASE_URL}/assets/classes/${spell}`;
}

async function spellClass(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/classes`);
  if (!response.ok) {
    throw new Error(`Error fetching classes.`);
  }
  const data = await response.json();
  return data as string[];
}

async function spellForNameClass(name: string): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/classes/${name}/spells`);
  if (!response.ok) {
    throw new Error(`Error fetching spells for class ${name}.`);
  }
  const data = await response.json();
  return data as string[];
}

async function spellInfo(id: string): Promise<ISpell> {
  const response = await fetch(`${BASE_URL}/spells/${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching spell info for id ${id}.`);
  }
  const data = await response.json();
  return data as ISpell;
}

export {
  spellImgClass,
  spellClass,
  spellForNameClass,
  spellInfo
};


