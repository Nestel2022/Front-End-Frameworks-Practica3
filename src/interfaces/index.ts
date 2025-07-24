interface IDamage {
  dice: string,
  damageType: string,
  weapon?: boolean
}

export interface ISpell {
  id: string,
  url: string,
  name: string,
  icon: string,
  level: number,
  upcast: boolean,
  action: string,
  duration: string,
  range: string,
  type: string,
  damage?: IDamage[]
}
