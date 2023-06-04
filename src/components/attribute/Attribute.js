import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/attributeSlice';

export function Attribute({name, value}) {
  const dispatch = useDispatch()
  const attributeName = name; //'Wisdom'

  return (
    <div>
      {name}: {value}
      <button onClick={() => dispatch(increment({attributeName}))}>
        +
      </button>
      <button onClick={() => dispatch(decrement({attributeName}))}>
        -
      </button>
    </div>
  )
};
