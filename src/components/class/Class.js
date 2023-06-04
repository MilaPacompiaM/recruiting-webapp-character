import './Class.css'

export function Class({name, currentAttrs, minRequirements}) {
  const isSelected = (currentAttrs, minRequirements) => {
    return !Object.entries(minRequirements).some(([key, value]) => {
      return value > currentAttrs[key];
    });
  }

  return (
    <div className={isSelected(currentAttrs, minRequirements) && 'selected'}>
      {name}
    </div>
  )
}