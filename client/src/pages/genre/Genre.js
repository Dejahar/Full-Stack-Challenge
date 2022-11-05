import DashboardSection from "components/dashboardSection";
import CardsRowByGenre from "components/cardsRowByGenre";

const Genre = ({genre}) => {
  return (
    <DashboardSection>
      <CardsRowByGenre genre={genre}/>
    </DashboardSection>
  );
};

export default Genre;
