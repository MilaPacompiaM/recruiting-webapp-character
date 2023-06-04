import { useSelector } from 'react-redux';

export function Skills() {
  const skills = useSelector((state) => state.skill);

  return (
    <div>
      <h4>Skills</h4>
      {Object.entries(skills).map(([key, value]) => {
        return (
          <div>
            {key}: {value.value}
          </div>
        )
      })}
    </div>
  )
};
