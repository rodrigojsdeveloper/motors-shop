import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

interface IsPublishedEditProps {
  setIsPublished: React.Dispatch<React.SetStateAction<boolean>>;
  is_published: boolean;
}

const IsPublishedEdit = ({
  setIsPublished,
  is_published,
}: IsPublishedEditProps) => {
  const [isPublishedColor, setIsPublishedColor] =
    useState<boolean>(is_published);
  const [isNotPublishedColor, setIsNotPublishedColor] = useState<boolean>(
    !is_published
  );

  return (
    <Container>
      <h4>Publicado</h4>
      <div>
        <Button
          onClick={() => {
            setIsPublished(true);
            setIsPublishedColor(true);
            setIsNotPublishedColor(false);
          }}
          style={
            isPublishedColor
              ? {
                  backgroundColor: "#4529E6",
                  color: "#fff",
                  borderColor: "#4529E6",
                }
              : {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#ADB5BD",
                }
          }
          size="155.5px"
          color="white"
          type="button"
          className="changeButton"
        >
          Sim
        </Button>
        <Button
          onClick={() => {
            setIsPublished(false);
            setIsPublishedColor(false);
            setIsNotPublishedColor(true);
          }}
          style={
            isNotPublishedColor
              ? {
                  backgroundColor: "#4529E6",
                  color: "#fff",
                  borderColor: "#4529E6",
                }
              : {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#ADB5BD",
                }
          }
          size="155.5px"
          color="white"
          type="button"
          className="changeButton"
        >
          Não
        </Button>
      </div>
    </Container>
  );
};

export { IsPublishedEdit };
