import { IAuctionProps, IBid } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import * as yup from "yup";

interface ICreateBid {
  auction: IAuctionProps;
  ListBidsFunc: (bid: IBid) => void;
}

const CreateBid = ({ auction, ListBidsFunc }: ICreateBid) => {
  const token = sessionStorage.getItem("Motors shop: token");

  useEffect(() => {
    token ? setDisable(false) : setDisable(true);
  }, []);

  const [disable, setDisable] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    value: yup.string().required("value required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);

    api
      .post(`/bids/${auction?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => ListBidsFunc(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <div>
        {token && (
          <div className="divUser">
            <AvatarUser userName={auction.user.name} />
            <h3>{auction.user.name}</h3>
          </div>
        )}

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
