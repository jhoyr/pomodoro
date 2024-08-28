import React, { createContext, useEffect, useState, useCallback } from 'react';
import { useWithSound } from "./Sound/useWithSound";
import sound from "../assets/notification.mp3";

export const StateContext = createContext(); // Cria um contexto que permite compartilhar estado entre componentes sem precisar passar propriedades manualmente.

const StateProvider = ({ children }) => {
    // Estados para os tempos de trabalho e pausa
    const [workTime, setWorkTime] = useState(25 * 60); // Tempo de trabalho em segundos
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60); // Tempo de pausa curta em segundos
    const [longBreakTime, setLongBreakTime] = useState(15 * 60); // Tempo de pausa longa em segundos

    const [initTime, setInitTime] = useState(0); // Tempo inicial
    const [activeTag, setActiveTag] = useState(0); // Tag ativa (0: trabalho, 1: pausa curta, 2: pausa longa)
    const [progress, setProgress ] = useState(20); // Progresso do temporizador
    const [time, setTime] = useState(0); // Tempo restante
    const [isActive, setIsActive] = useState(false); // Estado do temporizador (ativo ou não)
    const [pomodoroCount, setPomodoroCount] = useState(0); // Contador de pomodoros
    const {playSound} = useWithSound(sound); //Usado para desestruturar um objeto ou criar um objeto com a chave playSound.

    // Efeito para ajustar o tempo e o tempo inicial com base na tag ativa
    useEffect(() => {
        switch (activeTag) {
            case 0:
                setTime(workTime);
                setInitTime(workTime);
                break;
            case 1:
                setTime(shortBreakTime);
                setInitTime(shortBreakTime);
                break;
            case 2:
                setTime(longBreakTime);
                setInitTime(longBreakTime);
                break;
            default:
                break;
        }
    }, [activeTag, workTime, shortBreakTime, longBreakTime]);

    // Função para mudar para o próximo estado baseado na tag ativa e contador de pomodoros
    const handleNext = useCallback(() => {
        if (activeTag === 0) {
            setActiveTag(1); // Muda para pausa curta após o trabalho
            setPomodoroCount(pomodoroCount + 1); // Incrementa o contador de pomodoros
        } else if (activeTag === 1) {
            setActiveTag(pomodoroCount % 4 === 3 ? 2 : 0); // Muda para pausa longa após 4 pomodoros ou volta para trabalho
        } else if (activeTag === 2) {
            setActiveTag(0); // Volta para o trabalho após a pausa longa
        }
    }, [activeTag, pomodoroCount]);

    // Efeito para tocar o som e mudar para o próximo estado quando o tempo chega a 0
    useEffect(() => {
        if (time === 0 && isActive) {
            playSound(); // Toca o som de notificação
            handleNext(); // Muda para o próximo estado
        }
    }, [time, isActive, handleNext]); // Incluindo handleNext nas dependências

    return (
        <StateContext.Provider
            value={{
                activeTag,
                setActiveTag,
                progress,
                setProgress,
                time,
                setTime,
                isActive,
                setIsActive,
                initTime,
                setInitTime,
                workTime,
                setWorkTime,
                shortBreakTime,
                setShortBreakTime,
                longBreakTime,
                setLongBreakTime,
                handleNext,
                pomodoroCount,
                setPomodoroCount
            }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;
