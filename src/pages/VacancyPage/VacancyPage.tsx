import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Loader, VacancyTitle, ProjectInfo, Keywords, MatchedItems } from "../../components";

import { useGetFeedByIdQuery } from "../../services";
import { MatchedItemType } from "../../constants";
import { infoWrapperStyles } from "./VacancyPageStyles";

const VacancyPage = () => {
  const { id } = useParams<{ id: string }>();
  const feedId = id ?? "";

  const { data, isLoading } = useGetFeedByIdQuery(feedId);

  if (isLoading) return <Loader />;
  if (!data) return <Typography>No data available</Typography>;

  const {
    title = "No Title",
    url = "",
    description = "No Description",
    published = "",
    score = 0,
    keywords = [],
    matchedCasesData: matchedCases = [],
    matchedBlogsData: matchedBlogs = [],
    review,
  } = data;

  return (
    <Box>
      <VacancyTitle title={title} />
      <Box sx={infoWrapperStyles} className="scrollbar">
        <ProjectInfo
          url={url}
          title={title}
          description={description}
          published={published}
          score={score}
        />
        {keywords.length > 0 && <Keywords keywords={keywords} review={review} />}
        {matchedCases.length > 0 && (
          <MatchedItems items={matchedCases} type={MatchedItemType.CASES} />
        )}
        {matchedBlogs.length > 0 && (
          <MatchedItems items={matchedBlogs} type={MatchedItemType.BLOGS} />
        )}
      </Box>
    </Box>
  );
};

export default VacancyPage;
