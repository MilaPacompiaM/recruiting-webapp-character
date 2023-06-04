import { Attribute } from '../attribute/Attribute';
import { useSelector } from 'react-redux';

export function Attributes() {
  const attributes = useSelector((state) => state.attribute);
  const modifiers = useSelector((state) => state.modifier);

  return (
    <div>
      <h4>Attributes</h4>
      {Object.entries(attributes).map(([key, value]) => {
        return (
          <Attribute name={key} value={value} modifier={modifiers[key]} />
        )
      })}
    </div>
  )
};
