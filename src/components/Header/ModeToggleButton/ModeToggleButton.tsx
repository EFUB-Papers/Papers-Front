import { S } from 'components/Header/ModeToggleButton/style';
import { ReactComponent as DayIcon } from 'asset/Mode/day.svg';
import { ReactComponent as NightIcon } from 'asset/Mode/night.svg';
import { useRecoilState } from 'recoil';
import { modeState } from '../../../atom/mode';

const ModeToggleButton = () => {
  const [mode, setMode] = useRecoilState(modeState);

  const onChangeMode = () => {
    mode == 'day' ? setMode('night') : setMode('day');
  };
  return (
    <S.Wrapper mode={mode} onClick={onChangeMode}>
      <S.Circle mode={mode}>
        {mode == 'night' ? <NightIcon /> : <DayIcon />}
      </S.Circle>
    </S.Wrapper>
  );
};
export default ModeToggleButton;
