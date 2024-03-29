import { ModalEditAddress } from "../Modals/modalEditAddress";
import { ModalBackground } from "../ModalBackground";
import { ModalEditUser } from "../Modals/modalEditUser";
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
          <ModalEditAddress setOpenModal={setOpenModalEditAddress} />
        </ModalBackground>
      )}
      {openModalEditUser && (
        <ModalBackground>
          <ModalEditUser setOpenModal={setOpenModalEditUser} />
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
        <svg
          width="154"
          height="28"
          viewBox="0 0 154 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.704 8.512H16.608L14.976 11.776L10.624 19.68L6.368 11.808L4.672 8.288H4.576V23.168H0V0.832001H5.152L10.624 11.296H10.688L16.096 0.832001H21.28V23.168H16.704V8.512Z"
            fill="url(#paint0_linear_9922_3838)"
          />
          <path
            d="M32.7788 23.552C31.5414 23.552 30.4321 23.3493 29.4508 22.944C28.4907 22.5387 27.6694 21.952 26.9867 21.184C26.3254 20.416 25.8134 19.488 25.4508 18.4C25.0881 17.312 24.9067 16.096 24.9067 14.752C24.9067 13.408 25.0881 12.192 25.4508 11.104C25.8134 10.016 26.3254 9.09867 26.9867 8.352C27.6694 7.584 28.4907 6.99733 29.4508 6.592C30.4321 6.18667 31.5414 5.984 32.7788 5.984C34.0161 5.984 35.1147 6.18667 36.0747 6.592C37.0561 6.99733 37.8774 7.584 38.5387 8.352C39.2214 9.09867 39.7441 10.016 40.1068 11.104C40.4694 12.192 40.6507 13.408 40.6507 14.752C40.6507 16.096 40.4694 17.312 40.1068 18.4C39.7441 19.488 39.2214 20.416 38.5387 21.184C37.8774 21.952 37.0561 22.5387 36.0747 22.944C35.1147 23.3493 34.0161 23.552 32.7788 23.552ZM32.7788 19.808C33.7174 19.808 34.4427 19.52 34.9548 18.944C35.4668 18.368 35.7228 17.5467 35.7228 16.48V13.056C35.7228 11.9893 35.4668 11.168 34.9548 10.592C34.4427 10.016 33.7174 9.728 32.7788 9.728C31.8401 9.728 31.1147 10.016 30.6028 10.592C30.0908 11.168 29.8348 11.9893 29.8348 13.056V16.48C29.8348 17.5467 30.0908 18.368 30.6028 18.944C31.1147 19.52 31.8401 19.808 32.7788 19.808Z"
            fill="url(#paint1_linear_9922_3838)"
          />
          <path
            d="M49.7257 23.168C48.0831 23.168 46.8351 22.752 45.9818 21.92C45.1497 21.088 44.7337 19.872 44.7337 18.272V10.048H42.3657V6.368H43.5498C44.1898 6.368 44.6271 6.21867 44.8618 5.92C45.0964 5.6 45.2137 5.152 45.2137 4.576V1.824H49.4697V6.368H52.7977V10.048H49.4697V19.488H52.5418V23.168H49.7257Z"
            fill="url(#paint2_linear_9922_3838)"
          />
          <path
            d="M62.7788 23.552C61.5414 23.552 60.4321 23.3493 59.4507 22.944C58.4907 22.5387 57.6694 21.952 56.9868 21.184C56.3254 20.416 55.8134 19.488 55.4507 18.4C55.0881 17.312 54.9067 16.096 54.9067 14.752C54.9067 13.408 55.0881 12.192 55.4507 11.104C55.8134 10.016 56.3254 9.09867 56.9868 8.352C57.6694 7.584 58.4907 6.99733 59.4507 6.592C60.4321 6.18667 61.5414 5.984 62.7788 5.984C64.0161 5.984 65.1148 6.18667 66.0748 6.592C67.0561 6.99733 67.8774 7.584 68.5387 8.352C69.2214 9.09867 69.7441 10.016 70.1068 11.104C70.4694 12.192 70.6507 13.408 70.6507 14.752C70.6507 16.096 70.4694 17.312 70.1068 18.4C69.7441 19.488 69.2214 20.416 68.5387 21.184C67.8774 21.952 67.0561 22.5387 66.0748 22.944C65.1148 23.3493 64.0161 23.552 62.7788 23.552ZM62.7788 19.808C63.7174 19.808 64.4427 19.52 64.9548 18.944C65.4668 18.368 65.7227 17.5467 65.7227 16.48V13.056C65.7227 11.9893 65.4668 11.168 64.9548 10.592C64.4427 10.016 63.7174 9.728 62.7788 9.728C61.8401 9.728 61.1147 10.016 60.6027 10.592C60.0907 11.168 59.8348 11.9893 59.8348 13.056V16.48C59.8348 17.5467 60.0907 18.368 60.6027 18.944C61.1147 19.52 61.8401 19.808 62.7788 19.808Z"
            fill="url(#paint3_linear_9922_3838)"
          />
          <path
            d="M74.0253 23.168V6.368H78.7613V10.016H78.9212C79.0066 9.54667 79.1559 9.09867 79.3692 8.672C79.5826 8.224 79.8599 7.82933 80.2012 7.488C80.5639 7.14667 80.9906 6.88 81.4812 6.688C81.9719 6.47467 82.5479 6.368 83.2093 6.368H84.0413V10.784H82.8573C81.4706 10.784 80.4359 10.9653 79.7533 11.328C79.0919 11.6907 78.7613 12.3627 78.7613 13.344V23.168H74.0253Z"
            fill="url(#paint4_linear_9922_3838)"
          />
          <path
            d="M92.6588 23.552C91.0374 23.552 89.6721 23.296 88.5628 22.784C87.4534 22.2507 86.4614 21.504 85.5867 20.544L88.3708 17.728C88.9681 18.3893 89.6294 18.912 90.3548 19.296C91.0801 19.68 91.9014 19.872 92.8187 19.872C93.7574 19.872 94.4081 19.7333 94.7708 19.456C95.1334 19.1573 95.3148 18.7627 95.3148 18.272C95.3148 17.4827 94.7494 17.0133 93.6188 16.864L91.7948 16.64C88.0188 16.1707 86.1308 14.4427 86.1308 11.456C86.1308 10.6453 86.2801 9.90933 86.5788 9.248C86.8988 8.56533 87.3361 7.98933 87.8907 7.52C88.4667 7.02933 89.1494 6.656 89.9388 6.4C90.7494 6.12267 91.6561 5.984 92.6588 5.984C93.5334 5.984 94.3014 6.048 94.9628 6.176C95.6454 6.28267 96.2428 6.45333 96.7548 6.688C97.2881 6.90133 97.7681 7.17867 98.1947 7.52C98.6427 7.84 99.0801 8.20267 99.5068 8.608L96.7868 11.392C96.2534 10.8587 95.6454 10.4427 94.9628 10.144C94.3014 9.824 93.6188 9.664 92.9147 9.664C92.1041 9.664 91.5281 9.792 91.1868 10.048C90.8454 10.304 90.6748 10.6453 90.6748 11.072C90.6748 11.52 90.7921 11.872 91.0267 12.128C91.2827 12.3627 91.7521 12.5333 92.4348 12.64L94.3228 12.896C98.0134 13.3867 99.8587 15.072 99.8587 17.952C99.8587 18.7627 99.6881 19.5093 99.3467 20.192C99.0054 20.8747 98.5147 21.472 97.8747 21.984C97.2561 22.4747 96.4987 22.8587 95.6028 23.136C94.7281 23.4133 93.7467 23.552 92.6588 23.552Z"
            fill="url(#paint5_linear_9922_3838)"
          />
          <path
            d="M113.382 23.408C112.369 23.408 111.516 23.248 110.822 22.928C110.129 22.5947 109.509 22.128 108.962 21.528L110.702 19.768C111.076 20.1813 111.489 20.508 111.942 20.748C112.396 20.988 112.909 21.108 113.482 21.108C114.069 21.108 114.476 21.0213 114.702 20.848C114.929 20.6613 115.042 20.4147 115.042 20.108C115.042 19.6147 114.689 19.3213 113.982 19.228L112.842 19.088C110.482 18.7947 109.302 17.7147 109.302 15.848C109.302 15.3413 109.396 14.8813 109.582 14.468C109.782 14.0413 110.056 13.6813 110.402 13.388C110.762 13.0813 111.189 12.848 111.682 12.688C112.189 12.5147 112.756 12.428 113.382 12.428C113.929 12.428 114.409 12.468 114.822 12.548C115.249 12.6147 115.622 12.7213 115.942 12.868C116.276 13.0013 116.576 13.1747 116.842 13.388C117.122 13.588 117.396 13.8147 117.662 14.068L115.962 15.808C115.629 15.4747 115.249 15.2147 114.822 15.028C114.409 14.828 113.982 14.728 113.542 14.728C113.036 14.728 112.676 14.808 112.462 14.968C112.249 15.128 112.142 15.3413 112.142 15.608C112.142 15.888 112.216 16.108 112.362 16.268C112.522 16.4147 112.816 16.5213 113.242 16.588L114.422 16.748C116.729 17.0547 117.882 18.108 117.882 19.908C117.882 20.4147 117.776 20.8813 117.562 21.308C117.349 21.7347 117.042 22.108 116.642 22.428C116.256 22.7347 115.782 22.9747 115.222 23.148C114.676 23.3213 114.062 23.408 113.382 23.408Z"
            fill="url(#paint6_linear_9922_3838)"
          />
          <path
            d="M119.9 8.368H122.86V14.448H122.98C123.167 13.9013 123.494 13.428 123.96 13.028C124.427 12.628 125.074 12.428 125.9 12.428C126.98 12.428 127.794 12.788 128.34 13.508C128.9 14.228 129.18 15.2547 129.18 16.588V23.168H126.22V16.828C126.22 16.148 126.114 15.648 125.9 15.328C125.687 14.9947 125.307 14.828 124.76 14.828C124.52 14.828 124.287 14.8613 124.06 14.928C123.834 14.9813 123.627 15.0747 123.44 15.208C123.267 15.3413 123.127 15.508 123.02 15.708C122.914 15.8947 122.86 16.1147 122.86 16.368V23.168H119.9V8.368Z"
            fill="url(#paint7_linear_9922_3838)"
          />
          <path
            d="M136.074 23.408C135.301 23.408 134.608 23.2813 133.994 23.028C133.394 22.7747 132.881 22.408 132.454 21.928C132.041 21.448 131.721 20.868 131.494 20.188C131.268 19.508 131.154 18.748 131.154 17.908C131.154 17.068 131.268 16.308 131.494 15.628C131.721 14.948 132.041 14.3747 132.454 13.908C132.881 13.428 133.394 13.0613 133.994 12.808C134.608 12.5547 135.301 12.428 136.074 12.428C136.848 12.428 137.534 12.5547 138.134 12.808C138.748 13.0613 139.261 13.428 139.674 13.908C140.101 14.3747 140.428 14.948 140.654 15.628C140.881 16.308 140.994 17.068 140.994 17.908C140.994 18.748 140.881 19.508 140.654 20.188C140.428 20.868 140.101 21.448 139.674 21.928C139.261 22.408 138.748 22.7747 138.134 23.028C137.534 23.2813 136.848 23.408 136.074 23.408ZM136.074 21.068C136.661 21.068 137.114 20.888 137.434 20.528C137.754 20.168 137.914 19.6547 137.914 18.988V16.848C137.914 16.1813 137.754 15.668 137.434 15.308C137.114 14.948 136.661 14.768 136.074 14.768C135.488 14.768 135.034 14.948 134.714 15.308C134.394 15.668 134.234 16.1813 134.234 16.848V18.988C134.234 19.6547 134.394 20.168 134.714 20.528C135.034 20.888 135.488 21.068 136.074 21.068Z"
            fill="url(#paint8_linear_9922_3838)"
          />
          <path
            d="M143.104 12.668H146.064V14.428H146.163C146.31 13.8413 146.643 13.3613 147.163 12.988C147.697 12.6147 148.304 12.428 148.984 12.428C150.317 12.428 151.324 12.8947 152.003 13.828C152.683 14.7613 153.023 16.1213 153.023 17.908C153.023 19.6947 152.683 21.0613 152.003 22.008C151.324 22.9413 150.317 23.408 148.984 23.408C148.637 23.408 148.31 23.3547 148.003 23.248C147.697 23.1547 147.417 23.0213 147.163 22.848C146.923 22.6613 146.717 22.448 146.544 22.208C146.37 21.9547 146.243 21.688 146.163 21.408H146.064V27.168H143.104V12.668ZM148.003 21.008C148.563 21.008 149.023 20.8147 149.383 20.428C149.757 20.028 149.943 19.4947 149.943 18.828V17.008C149.943 16.3413 149.757 15.8147 149.383 15.428C149.023 15.028 148.563 14.828 148.003 14.828C147.443 14.828 146.977 14.968 146.604 15.248C146.243 15.5147 146.064 15.888 146.064 16.368V19.468C146.064 19.948 146.243 20.328 146.604 20.608C146.977 20.8747 147.443 21.008 148.003 21.008Z"
            fill="url(#paint9_linear_9922_3838)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_9922_3838"
              x1="-2.46399"
              y1="32.168"
              x2="154.536"
              y2="32.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B0D0D" />
              <stop offset="1" stopColor="#4529E6" />
            </linearGradient>
          </defs>
        </svg>
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
            <AvatarUser username={user.name} color={user.color} />
          </div>
        ) : (
          <nav>
            <Link to="/signin" className="link login">
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
                  className="link login"
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
