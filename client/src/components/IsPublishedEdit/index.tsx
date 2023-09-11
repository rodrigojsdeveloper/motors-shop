import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";

interface IsPublishedEditProps {
  setIsPublished: React.Dispatch<React.SetStateAction<boolean>>;
  is_published: boolean;
}

const IsPublishedEdit = ({
  setIsPublished,
  is_published,
}: IsPublishedEditProps) => {
  return (
    <Container>
      <h4>Publicado</h4>
      <div className="divButtons">
        <Button
          onClick={() => setIsPublished(true)}
          style={
            is_published
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
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Sim
        </Button>
        <Button
          onClick={() => setIsPublished(false)}
          style={
            !is_published
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
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
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
