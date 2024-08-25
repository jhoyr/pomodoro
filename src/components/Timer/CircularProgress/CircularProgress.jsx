import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import Clock from './Clock/Clock';
import { StateContext } from '../../StateProvider';


const CircularProgress = () => {
    const { progress, setProgress, time, initTime } = useContext(StateContext);

    useEffect(() => {
        setProgress(time/(initTime/100));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setProgress, time]);

    return <OuterCircle progress={progress}>
        <InnerCircle>
            <Clock />
        </InnerCircle>
    </OuterCircle>
}

export default CircularProgress;

const OuterCircle = styled.div`
    width: 35rem;
    height: 35rem;
    background: #961f1f;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient(${props => props.theme.colors.primary} ${({ progress }) => progress}%, transparent ${({ progress }) => progress}%);

    @media (max-width: 500px){
        width: 30rem;
        height: 30rem;
        }

`;
const InnerCircle = styled.div`
    width: 33rem;
    height: 33rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    display: grid;
    place-items: center;

    @media (max-width: 450px){
        width: 28rem;
        height: 28rem;
        }
`;
