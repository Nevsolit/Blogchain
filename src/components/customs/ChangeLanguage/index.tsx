import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { AppIcon } from '~/components/shared';

import Button from '../Button';
import { LANGUAGES } from './constants';

const ChangeLanguage: React.FC = () => {
  const [t, i18n] = useTranslation('global');

  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative">
      <Button onClick={() => setIsShowPopup(true)} className="border-gray-300 dark:border-gray-500" kind="square">
        <AppIcon name="globe" className="text-gray-700  dark:text-white" />
      </Button>
      {isShowPopup && (
        <div className="absolute right-0 top-[120%] p-2 bg-white border border-gray-300 rounded-lg w-[12rem]">
          {LANGUAGES.map((lang, index) => (
            <Button
              key={index}
              onClick={() => handleChangeLanguage(lang.key)}
              className="w-full text-left p-2 hover:bg-gray-100 rounded-lg"
            >
              {lang.value}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
