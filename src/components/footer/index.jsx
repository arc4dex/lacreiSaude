import { useTranslation } from "react-i18next";
import { ContainerIcons, ContainerMain, List, Nav, Options } from "./styles";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer({ setPage }) {
  const { t } = useTranslation(["common"], { keyPrefix: "header" });

  return (
    <ContainerMain>
      <hr />
      <Nav>
        <List>
          <Options onClick={() => setPage("home")}>{t("home")}</Options>
          <Options onClick={() => setPage("user")}>{t("user")}</Options>
          <Options onClick={() => setPage("professional")}>
            {t("professional")}
          </Options>
        </List>
      </Nav>
      <ContainerIcons>
        <a
          href="https://www.facebook.com/lacrei.saude"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineFacebook className="icon-color" />
        </a>
        <a
          href="https://www.instagram.com/lacrei.saude/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineInstagram className="icon-color" />
        </a>
        <a
          href="https://www.linkedin.com/company/lacrei/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineLinkedin className="icon-color" />
        </a>
      </ContainerIcons>
    </ContainerMain>
  );
}
