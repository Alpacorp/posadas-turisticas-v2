import { Card } from "@containers/Card";
import data from "@data/data.json";
import { ModalLayout } from "@layouts/ModalLayout";

export const App = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center mx-3">
      {data.map((card) => (
        <>
          <Card
            key={card.id}
            id={card.id}
            background={card.background}
            title={card.title}
            location={card.location}
            profile={card.profile}
          />
          <ModalLayout background={card.background} id={card.id}>
            <h1 className="text-2xl font-bold text-white">{card.title}</h1>
            <h2 className="text-xl font-bold text-white">{card.location}</h2>
            <h3 className="text-lg font-bold text-white">{card.profile}</h3>
          </ModalLayout>
        </>
      ))}
    </section>
  );
};

export default App;
