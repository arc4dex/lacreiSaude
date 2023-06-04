import {
  Container,
  ContainerImage,
  MainContainer,
  Text,
  Title,
} from "./styles";
import ImageHome from "../../img/rafiki 1.png";
import { useTranslation } from "react-i18next";

export default function User() {
  const { t } = useTranslation(["common"], { keyPrefix: "userPage" });

  return (
    <MainContainer justifyMobile>
      <Container width={"32.8em"} padding={"3.70em"}>
        <Title>{t("user")}</Title>
        <Container align direction={"row"} gap={"20px"}>
          <hr />
          <Text>{t("userText")}</Text>
        </Container>
      </Container>
      <ContainerImage>
        <img src={ImageHome} alt="" />
      </ContainerImage>
    </MainContainer>
  );
}
