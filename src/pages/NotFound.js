import { Container } from "../components/misc/Layouts";
import tw from "twin.macro";

const InnserContainer = tw.div`h-[90vh] text-center flex justify-center items-center text-[3rem] text-primary-500 font-bold`;
const NotFound = () => {
  return (
    <Container>
      <InnserContainer>
        <div>
          <div>404</div>
          <div>Not Found!</div>
        </div>
      </InnserContainer>
    </Container>
  );
};
export default NotFound;
