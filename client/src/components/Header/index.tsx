import { ModalEditAddress } from "../ModalEditAddress";
import { ModalBackground } from "../ModalBackground";
import { ModalEditUser } from "../ModalEditUser";
import logo from "../../assets/Motors shop.svg";
import { IUserProps } from "../../interfaces";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import close from "../../assets/xmark.svg";
import { api } from "../../services/api";
import menu from "../../assets/bars.svg";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [openNavAdvertiserLogged, setOpenNavAdvertiserLogged] =
    useState<boolean>(false);

  const [openNavNonAdvertiserLogged, setOpenNavNonAdvertiserLogged] =
    useState<boolean>(false);

  const [openModalEditAddress, setOpenModalEditAddress] =
    useState<boolean>(false);

  const [openModalEditUser, setOpenModalEditUser] = useState<boolean>(false);

  const [user, setUser] = useState<IUserProps>({ name: "" } as IUserProps);

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
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
      {openNavAdvertiserLogged && user?.is_seller ? (
        <nav className="navAdvertiser">
          <p
            className="link"
            onClick={() => {
              setOpenModalEditUser(true);

              setOpenNavAdvertiserLogged(false);
            }}
          >
            Editar perfil
          </p>
          <p
            className="link"
            onClick={() => {
              setOpenModalEditAddress(true);

              setOpenNavAdvertiserLogged(false);
            }}
          >
            Editar endereço
          </p>
          <Link to="/myadvertiser" className="link">
            Meus Anúncios
          </Link>
          <Link
            to="/signin"
            className="link"
            onClick={() => {
              setOpenNavAdvertiserLogged(false);

              sessionStorage.removeItem("Motors shop: token");
            }}
          >
            Sair
          </Link>
        </nav>
      ) : (
        openNavNonAdvertiserLogged && (
          <nav className="navNonAdvertiser">
            <p
              className="link"
              onClick={() => {
                setOpenModalEditUser(true);

                setOpenNavNonAdvertiserLogged(false);
              }}
            >
              Editar perfil
            </p>
            <p
              className="link"
              onClick={() => {
                setOpenModalEditAddress(true);

                setOpenNavNonAdvertiserLogged(false);
              }}
            >
              Editar endereço
            </p>
            <Link
              to="/signin"
              className="link"
              onClick={() => {
                setOpenNavNonAdvertiserLogged(false);

                sessionStorage.removeItem("Motors shop: token");
              }}
            >
              Sair
            </Link>
          </nav>
        )
      )}
      <Link to="/">
        <img src={logo} alt="Motors shop" />
      </Link>

      <div className={token ? "divLogged" : "divNotLogged"}>
        <hr />
        {token ? (
          <div
            onClick={() => {
              if (user?.is_seller) {
                setOpenNavAdvertiserLogged(true);
              }

              if (!user?.is_seller) {
                setOpenNavNonAdvertiserLogged(true);
              }

              if (openNavAdvertiserLogged) {
                setOpenNavAdvertiserLogged(false);
              }

              if (openNavNonAdvertiserLogged) {
                setOpenNavNonAdvertiserLogged(false);
              }
            }}
          >
            <AvatarUser username={user.name} />
          </div>
        ) : (
          <nav>
            <Link to="/signin" className="link">
              Fazer Login
            </Link>
            <Link to="/signup" className="buttonOut">
              Cadastrar
            </Link>
          </nav>
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

            if (user?.is_seller) {
              setOpenNavAdvertiserLogged(true);
            }

            if (openNavAdvertiserLogged) {
              setOpenNavAdvertiserLogged(false);
            }

            if (!user?.is_seller) {
              setOpenNavNonAdvertiserLogged(true);
            }

            if (openNavNonAdvertiserLogged) {
              setOpenNavNonAdvertiserLogged(false);
            }
          }}
        />

        {token ? (
          openNavAdvertiserLogged && user?.is_seller ? (
            <div className="divAdvertiserLogged">
              <nav>
                <p
                  className="link"
                  onClick={() => {
                    setOpenModalEditUser(true);

                    setOpenNavAdvertiserLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar perfil
                </p>
                <p
                  className="link"
                  onClick={() => {
                    setOpenModalEditAddress(true);

                    setOpenNavAdvertiserLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar endereço
                </p>
                <Link
                  to="/myadvertiser"
                  className="link"
                  onClick={() => setMenuOpen(false)}
                >
                  Meus Anúncios
                </Link>
                <Link
                  to="/signin"
                  className="buttonOut"
                  onClick={() => {
                    setMenuOpen(false);

                    sessionStorage.removeItem("Motors shop: token");
                  }}
                >
                  Sair
                </Link>
              </nav>
            </div>
          ) : (
            openNavNonAdvertiserLogged && (
              <div className="divNonAdvertiserLogged">
                <nav>
                  <p
                    className="link"
                    onClick={() => {
                      setOpenModalEditUser(true);

                      setOpenNavAdvertiserLogged(false);

                      setMenuOpen(false);
                    }}
                  >
                    Editar perfil
                  </p>
                  <p
                    className="link"
                    onClick={() => {
                      setOpenModalEditAddress(true);

                      setOpenNavAdvertiserLogged(false);

                      setMenuOpen(false);
                    }}
                  >
                    Editar endereço
                  </p>
                  <Link
                    to="/signin"
                    className="buttonOut"
                    onClick={() => {
                      setMenuOpen(false);

                      sessionStorage.removeItem("Motors shop: token");
                    }}
                  >
                    Sair
                  </Link>
                </nav>
              </div>
            )
          )
        ) : (
          menuOpen && (
            <div className="navNotLogged">
              <nav>
                <Link
                  to="/signin"
                  className="link"
                  onClick={() => setMenuOpen(false)}
                >
                  Fazer Login
                </Link>
                <Link
                  to="/signup"
                  className="buttonOut"
                  onClick={() => setMenuOpen(false)}
                >
                  Cadastrar
                </Link>
              </nav>
            </div>
          )
        )}
      </div>
    </Container>
  );
};

export { Header };
