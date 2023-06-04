import './Class.css'

export function Class({name, currentAttrs, minRequirements, setSelected, selected}) {
  const meetsRequirements = (currentAttrs, minRequirements) => {
    return !Object.entries(minRequirements).some(([key, value]) => {
      return value > currentAttrs[key];
    });
  }

  return (
    <div
      className={meetsRequirements(currentAttrs, minRequirements) && 'selected'}
      onClick={() => setSelected(selected === name ? '' : name)}
    >
      {name}
    </div>
  )
}