import { AuctionContext } from "../../contexts/AuctionContext";
import { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AvatarUser } from "../AvatarUser";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

const CreateBid = () => {
  const { fetchUser, user, auctionRequest, handleListBids } =
    useContext(AuctionContext);

  const token = sessionStorage.getItem("Motors shop: token");

  const [disable, setDisable] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const [resetInput, setResetInput] = useState("");

  const handleChange = (event: any) => {
    setResetInput(event.target.value);
  };

  useEffect(() => {
    token ? setDisable(false) : setDisable(true);

    token && fetchUser();
  }, []);

  const schema = yup.object().shape({
    value: yup.string().required(""),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);
    setResetInput("");

    api
      .post(`/bids/${auctionRequest?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => handleListBids(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <div>
        {token && <AvatarUser username={user.name} />}

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Lance"
            placeholder="Inserir valor do lance"
            autoComplete="off"
            type="text"
            required={true}
            size="inputSignIn"
            register={register}
            name="value"
            disabled={disable ? disable : load}
            onChange={handleChange}
            value={resetInput}
          />

          <Button
            color="buttonColorBlueLogin"
            size="buttonSizeCreateBid"
            type="submit"
            disabled={disable ? disable : load}
          >
            {load ? "Inserindo..." : "Inserir proposta"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export { CreateBid };
