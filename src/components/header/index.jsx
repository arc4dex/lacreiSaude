import { useState } from "react";
import {
  ChangeLanguage,
  Container,
  ContainerDropList,
  ContainerLanguage,
  DropList,
  List,
  Nav,
  OptionLanguage,
  Options,
  TextLanguage,
} from "./styles";
import { HiViewList } from "react-icons/hi";
import i18n from "../../locales/translations";
import { useTranslation } from "react-i18next";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

export default function Header({ setPage }) {
  const { t } = useTranslation(["common"], { keyPrefix: "header" });

  const [dropList, setDropList] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [option, setOption] = useState(false);

  function handleLanguage(optionLanguage) {
    console.log(optionLanguage);
    i18n.changeLanguage(optionLanguage);
    localStorage.setItem("i18nextLng", optionLanguage);

    setLanguage(optionLanguage);
  }

  return (
    <Nav>
      <h1>Lacrei</h1>
      <Container>
        <List>
          <Options onClick={() => setPage("home")}>{t("home")}</Options>
          <Options onClick={() => setPage("user")}>{t("user")}</Options>
          <Options onClick={() => setPage("professional")}>
            {t("professional")}
          </Options>
        </List>
        <ContainerDropList>
          <HiViewList
            fontSize={40}
            cursor={"pointer"}
            onClick={() => setDropList(!dropList)}
          />
        </ContainerDropList>
        <ContainerLanguage onClick={() => setOption(!option)}>
          <TextLanguage>
            idioma {option ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </TextLanguage>

          <ChangeLanguage>
            {option && (
              <>
                <OptionLanguage
                  id={"en-US"}
                  onClick={(e) => handleLanguage(e.target.id)}
                >
                  EN-US
                </OptionLanguage>
                <OptionLanguage
                  id={"pt-BR"}
                  onClick={(e) => handleLanguage(e.target.id)}
                >
                  PT-BR
                </OptionLanguage>
              </>
            )}
          </ChangeLanguage>
        </ContainerLanguage>
        {dropList && (
          <DropList>
            <Options
              mobile
              onClick={() => {
                setPage("home");
                setDropList(false);
              }}
            >
              {t("home")}
            </Options>
            <Options
              mobile
              onClick={() => {
                setPage("user");
                setDropList(false);
              }}
            >
              {t("user")}
            </Options>
            <Options
              mobile
              onClick={() => {
                setPage("professional");
                setDropList(false);
              }}
            >
              {t("professional")}
            </Options>
          </DropList>
        )}
      </Container>
    </Nav>
  );
}
