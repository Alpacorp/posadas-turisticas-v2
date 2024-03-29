import { Card } from "@containers/Card";
import data from "@data/data.json";
import { ModalLayout } from "@layouts/ModalLayout";

export const App = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center mx-3">
      {data.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          background={card.background}
          title={card.title}
          location={card.location}
          profile={card.profile}
        />
      ))}
      <ModalLayout />
    </section>
  );
};

export default App;
