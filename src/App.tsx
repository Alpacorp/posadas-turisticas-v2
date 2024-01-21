import { Card } from "@components/Card";
import data from "@data/data.json";

export const App = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center mx-3">
      {data.map((card) => (
        <Card
          key={card.id}
          background={card.background}
          title={card.title}
          location={card.location}
          profile={card.profile}
        />
      ))}
    </section>
  );
};

export default App;
