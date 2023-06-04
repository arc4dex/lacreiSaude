import {
  Container,
  ContainerImage,
  MainContainer,
  Text,
  Title,
} from "./styles";
import ImageHome from "../../img/profissional 1.png";
import { useTranslation } from "react-i18next";

export default function Professional() {
  const { t } = useTranslation(["common"], { keyPrefix: "professionalPage" });

  return (
    <MainContainer justifyMobile>
      <Container width={"32.8em"} padding={"3.70em"}>
        <Title>{t("professional")}</Title>
        <Container align direction={"row"} gap={"20px"}>
          <hr />
          <Text>{t("professionalText")}</Text>
        </Container>
      </Container>
      <ContainerImage>
        <img src={ImageHome} alt="" />
      </ContainerImage>
    </MainContainer>
  );
}
