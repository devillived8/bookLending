import { NavLink } from 'react-router-dom';
import bannerImg from '../assets/img/banner-img.png';
import previewAboutBook from '../assets/img/preview-about-book.png';
import { Card } from '../components/card/Card';
import characterOne from '../assets/img/character-1.png';
import characterTwo from '../assets/img/character-2.png';
import characterThree from '../assets/img/character-3.png';

export const Home = () => {
  const characters = [
    {
      id: 1,
      name: 'Алексей Волков',
      role: 'Главный герой',
      desciption: 'Такой-то, такой-то, Жил-там-то делал-то-то',
      imgName: characterOne,
    },
    {
      id: 2,
      name: 'Алексей Волков',
      role: 'Главный герой',
      desciption: 'Такой-то, такой-то, Жил-там-то делал-то-то',
      imgName: characterTwo,
    },
    {
      id: 3,
      name: 'Алексей Волков',
      role: 'Главный герой',
      desciption: 'Такой-то, такой-то, Жил-там-то делал-то-то',
      imgName: characterThree,
    },
  ];

  return (
    <>
      {/* HERO секция */}
      <article
        className="flex flex-col justify-center bg-cover bg-no-repeat p-8"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className="text-2xl">техно триллер</p>
        <h1 className="text-accent-red font-display text-5xl text-shadow-md text-shadow-accent-red">Тень цербера</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </article>
      <div>
        {/* Блок о книге */}
        <article className="flex flex-col gap-4 p-4">
          <div>
            <img className="rounded-md" src={previewAboutBook} alt="Превью о книге" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-display uppercase">
              о книге <span className="text-accent-red">\</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa in ipsa velit facilis
              odio iure eum non possimus voluptas, quidem repudiandae excepturi delectus sed
              similique omnis ipsum dolore cupiditate expedita.
            </p>
            <NavLink to="/about-book">Узнать больше</NavLink>
          </div>
        </article>
        {/* Блок с персонажами */}
        <article className="p-4 flex flex-col gap-8">
          <h2 className="font-display uppercase">
            персонажи <span className="text-accent-red">/</span>
          </h2>
          {characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              role={character.role}
              description={character.desciption}
              imgName={character.imgName}
            />
          ))}
        </article>
      </div>
      {/* Тут будет блок с плеером */}
      <div>
        <p>пока что так</p>
      </div>
    </>
  );
};
