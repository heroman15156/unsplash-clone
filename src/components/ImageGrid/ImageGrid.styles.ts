import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
`;
