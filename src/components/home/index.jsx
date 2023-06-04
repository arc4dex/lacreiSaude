import ButtonDefault from "../button";
import {
  Container,
  ContainerButton,
  ContainerImage,
  MainContainer,
  Text,
  Title,
} from "./styles";
import ImageHome from "../../img/rafiki 2.png";
import { useTranslation } from "react-i18next";

export default function Home({ setPage }) {
  const { t } = useTranslation(["common"], { keyPrefix: "homePage" });

  return (
    <MainContainer justifyMobile>
      <Container width={"30em"} padding={"3.70em"}>
        <Title>{t("welcome")}</Title>
        <Text>{t("about")}</Text>
        <ContainerButton directionBtn>
          <ButtonDefault
            border={"2px solid #018762"}
            widthButton={"190px"}
            title={t("user")}
            onClick={() => setPage("user")}
          />
          <ButtonDefault
            border={"2px solid #018762"}
            widthButton={"190px"}
            title={t("professional")}
            onClick={() => setPage("professional")}
          />
        </ContainerButton>
      </Container>
      <ContainerImage>
        <img src={ImageHome} alt="" />
      </ContainerImage>
    </MainContainer>
  );
}
