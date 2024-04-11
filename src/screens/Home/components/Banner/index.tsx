import { useState, memo } from 'react';

import { AppIcon, Button } from '~/components';

const dataSlider = [
  'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7213187/pexels-photo-7213187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className="md:h-[91vh] h-[50vh] flex relative justxl:w-[90%] ify-center duration-200 items-center px-3 md:px-0 md:justify-start md:items-end rounded-3xl shadow-base"
      style={{
        backgroundImage: `url(${dataSlider[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="flex flex-col items-center gap-4 text-white md:items-start md:w-[90%] 2xl:w-[80%] md:p-14">
        <h2 className="text-2xl xl:text-3xl font-medium">Feature</h2>
        <h1 className="text-center text-4xl xl:text-6xl font-medium md:text-start">
          Breaking into product desgin: Advice from untilted founder, Frakie
        </h1>
        <p className="text-center font-medium md:text-start xl:text-xl max-w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ultricies sit nunc, ut. Nunc, viverra sed in
          etiam. Eget ultricies sit nunc, ut. Nunc, viverra sed in etiam.
        </p>
      </div>
      <Button
        className="absolute right-6 bottom-6 z-10 md:right-14 md:bottom-14"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % dataSlider.length)}
      >
        <AppIcon name="arrow-forward" className="text-white text-4xl md:text-6xl" />
      </Button>
    </section>
  );
};

export default memo(Banner);
