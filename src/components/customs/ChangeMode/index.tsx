import { useAppDispatch, useAppSelector } from '~/hooks';
import Button from '../Button';
import { settingsActions } from '~/redux/reducer/settings/settings.reducer';
import { AppIcon } from '~/components/shared';

const ChangeMode: React.FC = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.settings.mode);

  const handleChangeMode = () => {
    dispatch(settingsActions.setMode(!mode));
  };

  return (
    <Button onClick={handleChangeMode} kind="square" className="border-gray-300 dark:border-gray-500">
      <AppIcon name={mode ? 'moon' : 'sunny'} className="text-gray-700  dark:text-white" />
    </Button>
  );
};

export default ChangeMode;
