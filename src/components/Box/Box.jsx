import { LeftSide, MiddleSide, RightSide } from "../Sides/Sides"
import { BoxContainer } from "./boxElements"

const Box = () => {
  return (
    <BoxContainer>
      <LeftSide/>
      <MiddleSide/>
      <RightSide/>
    </BoxContainer>
  )
}

export default Box