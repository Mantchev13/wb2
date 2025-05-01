import styled from 'styled-components';

type BallProps = {
  letter: string;
};

const BallContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 24px;
  margin: 5px;
`;

export default function Ball({ letter }: BallProps) {
  return <BallContainer>{letter}</BallContainer>;
}
