import { Container } from "./style"
import close from "../../assets/x.svg"

interface IHeaderModal {
  title: string
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderModal = ({ title, setCloseModal }: IHeaderModal) => {

  return (
    <Container>
      <h2>{ title }</h2>

      <img src={ close } onClick={ () => setCloseModal(false) } />
    </Container>
  )
}

export { HeaderModal }
