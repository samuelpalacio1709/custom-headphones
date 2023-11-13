import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [selected, setSelection] = useState('');
  const navigate = useNavigate();

  const navegateTo = (destination) => {
    setSelection(destination);
    navigate(`/${destination}`);
  };
  useEffect(() => {
    navegateTo('');
  }, []);

  return (
    <div className="options">
      <div className={`option ${selected == '' && 'selected'}`} onClick={() => navegateTo('')}>
        <h4>About</h4>
      </div>
      <div
        className={`option ${selected == 'specs' && 'selected'}`}
        onClick={() => navegateTo('specs')}
      >
        <h4>Specifications</h4>
      </div>
      <div
        className={`option ${selected == 'customize' && 'selected'}`}
        onClick={() => navegateTo('customize')}
      >
        <h4>Customize</h4>
      </div>
    </div>
  );
}
