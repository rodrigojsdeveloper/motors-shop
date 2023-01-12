import logo from "../../assets/Motors shop.svg";
import menu from "../../assets/bars.svg";
import close from "../../assets/xmark.svg";
import { Button } from "../Button";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AvatarUser } from "../AvatarUser";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { ModalBackground } from "../ModalBackground";
import { ModalEditAddress } from "../ModalEditAddress";
import { ModalEditUser } from "../ModalEditUser";
import { IUserProps } from "../../interfaces";

const Header = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("Motors shop: token");

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [menuOpenLogged, setMenuOpenLogged] = useState<boolean>(false);

  const [menuOpenLoggedNotAnnouncement, setMenuOpenLoggedNotAnnouncement] =
    useState<boolean>(false);

  const [user, setUser] = useState<IUserProps>({
    name: "rodrigo",
    email: "rodrigonohype@gmail.com",
    password: "Johndoe@123",
    cellphone: "99 99999-9999",
    cpf: "99999999999",
    birthdate: "99/99/9999",
    is_seller: true,
    description: "description",
    country: "United State",
    state: "Califórnia",
    city: "Mountain View",
    district: "Amphitheatre Pkwy",
    street: "Amphitheatre Pkwy",
    number: 1600,
    complement: "Googleplex",
    zip_code: "9098",
  } as IUserProps);

  const [openModalEditAddress, setOpenModalEditAddress] =
    useState<boolean>(false);

  const [openModalEditUser, setOpenModalEditUser] = useState<boolean>(false);

  token &&
    useEffect(() => {
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data[0]))
        .catch((error) => console.error(error));
    }, []);

  return (
    <Container>
      {openModalEditAddress && (
        <ModalBackground>
          <ModalEditAddress setOpenModalEditAddress={setOpenModalEditAddress} />
        </ModalBackground>
      )}
      {openModalEditUser && (
        <ModalBackground>
          <ModalEditUser setOpenModalEditUser={setOpenModalEditUser} />
        </ModalBackground>
      )}
      {menuOpenLogged && user.is_seller ? (
        <div className="menuOpenLoggedAnnouncement">
          <p
            onClick={() => {
              setOpenModalEditUser(true);

              setMenuOpenLogged(false);
            }}
          >
            Editar perfil
          </p>
          <p
            onClick={() => {
              setOpenModalEditAddress(true);

              setMenuOpenLogged(false);
            }}
          >
            Editar endereço
          </p>
          <Link to="myadvertiser">Meus Anúncios</Link>
          <Link to="">Sair</Link>
        </div>
      ) : (
        menuOpenLoggedNotAnnouncement && (
          <div className="menuOpenLoggedNotAnnouncement">
            <p
              onClick={() => {
                setOpenModalEditUser(true);

                setMenuOpenLoggedNotAnnouncement(false);
              }}
            >
              Editar perfil
            </p>
            <p
              onClick={() => {
                setOpenModalEditAddress(true);

                setMenuOpenLoggedNotAnnouncement(false);
              }}
            >
              Editar endereço
            </p>
            <Link to="">Sair</Link>
          </div>
        )
      )}
      <img src={logo} alt="Motors shop" />

      <div className={token ? "divLogged" : "divNotLogged"}>
        <nav>
          <a href="#cars">Carros</a>
          <a href="#motorcycles">Motos</a>
          <a href="#auctions">Leilão</a>
        </nav>
        <hr />
        {token ? (
          <div
            onClick={() => {
              if (user.is_seller) {
                setMenuOpenLogged(true);
              }

              setMenuOpenLoggedNotAnnouncement(true);

              if (menuOpenLogged) {
                setMenuOpenLogged(false);
              }

              if (menuOpenLoggedNotAnnouncement) {
                setMenuOpenLoggedNotAnnouncement(false);
              }
            }}
          >
						<AvatarUser userName={ user.name } />
            <h2>{user.name}</h2>
          </div>
        ) : (
          <div>
            <Link to="/signin">Fazer Login</Link>
            <Button
              size="buttonSizeHeader"
              color="buttonColorWhiteHeader"
              type="button"
              onClick={() => navigate("/signup")}
            >
              Cadastrar
            </Button>
          </div>
        )}
      </div>

      <div className="menuIcon">
        <img
          src={menuOpen ? close : menu}
          alt="menu"
          onClick={() => {
            setMenuOpen(true);

            if (menuOpen) {
              setMenuOpen(false);
            }
          }}
        />

        {token ? (
          menuOpen && user.is_seller ? (
            <nav className="navLogged">
              <div>
                <a href="#cars" onClick={() => setMenuOpen(false)}>
                  Carros
                </a>
                <a href="#motorcycles" onClick={() => setMenuOpen(false)}>
                  Motos
                </a>
                <a href="#auctions" onClick={() => setMenuOpen(false)}>
                  Leilão
                </a>
              </div>
              <hr />
              <div>
                <p
                  onClick={() => {
                    setOpenModalEditUser(true);

                    setMenuOpenLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar perfil
                </p>
                <p
                  onClick={() => {
                    setOpenModalEditAddress(true);

                    setMenuOpenLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar endereço
                </p>
                <Link to="/myadvertiser" onClick={() => setMenuOpen(false)}>
                  Meus Anúncios
                </Link>
                <Link to="" onClick={() => setMenuOpen(false)}>
                  Sair
                </Link>
              </div>
            </nav>
          ) : (
            <nav className="navLogged">
              <div>
                <a href="#cars" onClick={() => setMenuOpen(false)}>
                  Carros
                </a>
                <a href="#motorcycles" onClick={() => setMenuOpen(false)}>
                  Motos
                </a>
                <a href="#auctions" onClick={() => setMenuOpen(false)}>
                  Leilão
                </a>
              </div>
              <hr />
              <div>
                <p
                  onClick={() => {
                    setOpenModalEditUser(true);

                    setMenuOpenLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar perfil
                </p>
                <p
                  onClick={() => {
                    setOpenModalEditAddress(true);

                    setMenuOpenLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar endereço
                </p>
                <Link to="" onClick={() => setMenuOpen(false)}>
                  Sair
                </Link>
              </div>
            </nav>
          )
        ) : (
          menuOpen && (
            <nav className="navNotLogged">
              <hr />
              <div>
                <a href="#cars">Carros</a>
                <a href="#motorcycles">Motos</a>
                <a href="#auctions">Leilão</a>
              </div>
              <hr />
              <div>
                <Link to="/signin">Fazer Login</Link>
                <Button
                  size="buttonSizeHeader"
                  color="buttonColorWhiteHeader"
                  type="button"
                  onClick={() => navigate("/signup")}
                >
                  Cadastrar
                </Button>
              </div>
            </nav>
          )
        )}
      </div>
    </Container>
  );
};

export { Header };
