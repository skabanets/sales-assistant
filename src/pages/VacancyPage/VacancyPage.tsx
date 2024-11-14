import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

import { Loader, VacancyTitle, ProjectInfo } from "../../components";

import { useGetFeedByIdQuery } from "../../services";
import { blockContainerStyles, infoWrapperStyles } from "./VacancyPageStyles";

const VacancyPage = () => {
  const { id } = useParams<{ id: string }>();

  const feedId = id ?? "";

  const { data, isLoading } = useGetFeedByIdQuery(feedId);

  if (isLoading) return <Loader />;

  return (
    <div>
      <VacancyTitle title={data?.title} />
      <Box sx={infoWrapperStyles}>
        <Box sx={blockContainerStyles}>
          <ProjectInfo
            url={data?.url ?? ""}
            title={data?.title ?? "No Title"}
            description={data?.description ?? "No Description"}
            published={data?.published ?? ""}
            score={data?.score ?? 0}
          />
        </Box>
      </Box>
    </div>
  );
};

export default VacancyPage;
