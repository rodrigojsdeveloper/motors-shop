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

  const [user, setUser] = useState<IUserProps>({ name: "" } as IUserProps);

  const [openModalEditAddress, setOpenModalEditAddress] =
    useState<boolean>(false);

  const [openModalEditUser, setOpenModalEditUser] = useState<boolean>(false);

  token &&
    useEffect(() => {
      api
        .get("users/profile", {
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
            onClick={() => {
              setOpenModalEditUser(true);

              setOpenNavAdvertiserLogged(false);
            }}
          >
            Editar perfil
          </p>
          <p
            onClick={() => {
              setOpenModalEditAddress(true);

              setOpenNavAdvertiserLogged(false);
            }}
          >
            Editar endereço
          </p>
          <Link to="/myadvertiser" onClick={() => window.scroll({ top: 0 })}>
            Meus Anúncios
          </Link>
          <Link
            to="/signin"
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
              onClick={() => {
                setOpenModalEditUser(true);

                setOpenNavNonAdvertiserLogged(false);
              }}
            >
              Editar perfil
            </p>
            <p
              onClick={() => {
                setOpenModalEditAddress(true);

                setOpenNavNonAdvertiserLogged(false);
              }}
            >
              Editar endereço
            </p>
            <Link
              to="/signin"
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
      <Link to="/" onClick={() => window.scroll({ top: 0 })}>
        <img src={logo} alt="Motors shop" />
      </Link>

      <div className={token ? "divLogged" : "divNotLogged"}>
        <nav>
          <a href="/#cars">Carros</a>
          <a href="/#motorcycles">Motos</a>
          <a href="/#auctions">Leilão</a>
        </nav>
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
            <Link to="/signin">Fazer Login</Link>
            <Link to="/signup" onClick={() => window.scroll({ top: 0 })}>
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
                <a href="/#cars" onClick={() => setMenuOpen(false)}>
                  Carros
                </a>
                <a href="/#motorcycles" onClick={() => setMenuOpen(false)}>
                  Motos
                </a>
                <a href="/#auctions" onClick={() => setMenuOpen(false)}>
                  Leilão
                </a>
              </nav>
              <hr />
              <nav>
                <p
                  onClick={() => {
                    setOpenModalEditUser(true);

                    setOpenNavAdvertiserLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar perfil
                </p>
                <p
                  onClick={() => {
                    setOpenModalEditAddress(true);

                    setOpenNavAdvertiserLogged(false);

                    setMenuOpen(false);
                  }}
                >
                  Editar endereço
                </p>
                <Link to="/myadvertiser" onClick={() => setMenuOpen(false)}>
                  Meus Anúncios
                </Link>
                <Link
                  to="/signin"
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
                  <a href="/#cars" onClick={() => setMenuOpen(false)}>
                    Carros
                  </a>
                  <a href="/#motorcycles" onClick={() => setMenuOpen(false)}>
                    Motos
                  </a>
                  <a href="/#auctions" onClick={() => setMenuOpen(false)}>
                    Leilão
                  </a>
                </nav>
                <hr />
                <nav>
                  <p
                    onClick={() => {
                      setOpenModalEditUser(true);

                      setOpenNavAdvertiserLogged(false);

                      setMenuOpen(false);
                    }}
                  >
                    Editar perfil
                  </p>
                  <p
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
              <hr />
              <nav>
                <a href="/#cars" onClick={() => setMenuOpen(false)}>
                  Carros
                </a>
                <a href="/#motorcycles" onClick={() => setMenuOpen(false)}>
                  Motos
                </a>
                <a href="/#auctions" onClick={() => setMenuOpen(false)}>
                  Leilão
                </a>
              </nav>
              <hr />
              <nav>
                <Link to="/signin" onClick={() => setMenuOpen(false)}>
                  Fazer Login
                </Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
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
