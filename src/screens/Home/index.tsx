import Title from '~/components/shared/Title';

import Banner from './components/Banner';

const HomeScreen: React.FC = () => {
  return (
    <div className=" w-full flex flex-col gap-8 px-4 md:px-6 duration-200">
      <Banner />
      <section className="w-full">
        <Title title="Bài viết blog gần đây" />
        <div className="flex overflow-x-auto gap-4 md:gap-6 overflow-y-hidden xl:grid  xl:grid-cols-4   thin-scroll mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-full flex-shrink-0 flex flex-col bg-white"
            >
              {/* <div className="w-full h-[50vw] sm:h-[30vw] md:h-[25vw] lg:h-[20vw] xl:h-[15vw]  rounded-2xl"></div> */}
              <img
                src="https://i.pinimg.com/564x/43/c8/00/43c800912a1c0b441beea98ac3b803cb.jpg"
                alt=""
                className="w-full h-[50vw] sm:h-[30vw] md:h-[25vw] lg:h-[20vw] xl:h-[15vw]  rounded-2xl object-cover"
              />
              <h1 className="font-semibold line-clamp-1 mt-4 text-[1.2rem]">How to sleep 8 hour in 3 hour?</h1>
              <p className="line-clamp-3 text-sm mt-2 text-cl-gray">
                Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình
                web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn
                nhé.
              </p>
              <div className="mt-4 w-full flex items-center gap-4 font-semibold">
                <img
                  src="https://i.pinimg.com/564x/5d/f6/cb/5df6cbc8a8ab8c330a71c181d43cbdc7.jpg"
                  alt=""
                  className="w-[36px] h-[36px] rounded-full object-cover"
                />
                <p className="text-gray-700">Nevsolit - 12:00 | 21/12/2024</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
