import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CLASS_LIST } from '../../consts';
import { Class } from '../class/Class';

export function Classes() {
  const [selected, setSelected] = useState('');
  const attributes = useSelector((state) => state.attribute);

  return (
    <div>
      <h4>Classes</h4>
      {Object.entries(CLASS_LIST).map(([key, value]) => {
        return (
          <div style={{margin: '3px'}}>
            <Class
              name={key}
              minRequirements={value}
              currentAttrs={attributes}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
        )
      })}
      {selected !== '' && (
        <div>
          <h6>Minimum requirements</h6>
          {Object.entries(CLASS_LIST[selected]).map(([key, value]) => {
            return (
              <div>
                {key}: {value}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}