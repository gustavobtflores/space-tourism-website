import styled from "styled-components";
import { motion } from "framer-motion";

const Underline = styled(motion.span)`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 3px;
  background: #ffffff;
`;

export default Underline;
