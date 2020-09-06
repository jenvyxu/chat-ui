import styled from "styled-components";
import Paragraph from "components/Paragraph";
import { card } from "utils/mixins";
import Heading from "components/Heading";

const NoteImage = styled.img`
  grid-area: image;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const NoteTitle = styled(Heading).attrs({ level: 2 })`
  grid-area: title;
  align-self: center;
  font-size: 24px;
`;

const NoteExcerpt = styled(Paragraph).attrs({ size: "small" })`
  grid-area: excerpt;
  align-self: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const NotePublishTime = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;

const StyledNoteCard = styled.div`
  ${card()};
  display: grid;
  grid-template-areas:
    "image title time"
    "image excerpt excerpt";
  grid-template-columns: 72px 2fr 1fr;
`;

export default StyledNoteCard;
export { NoteExcerpt, NoteImage, NotePublishTime, NoteTitle };
