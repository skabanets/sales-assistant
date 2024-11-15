import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Loader, VacancyTitle, ProjectInfo, Keywords } from "../../components";

import { useGetFeedByIdQuery } from "../../services";
import { infoWrapperStyles } from "./VacancyPageStyles";

const VacancyPage = () => {
  const { id } = useParams<{ id: string }>();
  const feedId = id ?? "";

  const { data, isLoading } = useGetFeedByIdQuery(feedId);

  if (isLoading) return <Loader />;
  if (!data) return <Typography>No data available</Typography>;

  const keywords = data?.keywords ?? [];
  console.log(data);
  return (
    <div>
      <VacancyTitle title={data?.title} />
      <Box sx={infoWrapperStyles}>
        <ProjectInfo
          url={data.url ?? ""}
          title={data.title ?? "No Title"}
          description={data.description ?? "No Description"}
          published={data.published ?? ""}
          score={data.score ?? 0}
        />
        {keywords.length > 0 && <Keywords keywords={keywords} review={data.review} />}
      </Box>
    </div>
  );
};

export default VacancyPage;
