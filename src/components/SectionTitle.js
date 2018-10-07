import styled from 'styled-components'
import { rhythm } from '../utils/typography'

const SectionTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: #191919;
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 2.5rem;

  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: #bfbfbf;
  }
`

export default SectionTitle
