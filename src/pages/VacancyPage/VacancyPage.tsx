import { useParams } from "react-router-dom";
import { Loader, VacancyTitle } from "../../components";
import { useGetFeedByIdQuery } from "../../services";

const VacancyPage = () => {
  const { id } = useParams<{ id: string }>();

  const feedId = id ?? "";

  const { data, isLoading } = useGetFeedByIdQuery(feedId);

  if (isLoading) return <Loader />;

  return (
    <div>
      <VacancyTitle title={data?.title} />
      VacancyPage
    </div>
  );
};

export default VacancyPage;
