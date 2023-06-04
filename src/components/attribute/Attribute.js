import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/attributeSlice';
import { change } from '../../redux/modifierSlice';

export function Attribute({name, value, modifier}) {
  const dispatch = useDispatch()
  const handleIncrement = () => {
    const prevValue = value;
    dispatch(increment({attributeName: name}));
    dispatch(change({attributeName: name, attributeValue: prevValue + 1}));
  }
  const handleDecrement = () => {
    const prevValue = value;
    dispatch(decrement({attributeName: name}));
    dispatch(change({attributeName: name, attributeValue: prevValue - 1}));
  }

  return (
    <div>
      {name}: {value} (modifier {modifier})
      <button onClick={() => handleIncrement(name)}>
        +
      </button>
      <button onClick={() => handleDecrement(name)}>
        -
      </button>
    </div>
  )
};
