import DashboardSection from "components/dashboardSection";
import CardsRowByGenre from "components/cardsRowByGenre";
import { useParams } from "react-router-dom";

const Genre = () => {
  const { genre } = useParams();
  return (
    <DashboardSection>
      <CardsRowByGenre genre={genre}/>
    </DashboardSection>
  );
};

export default Genre;
