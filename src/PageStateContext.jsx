// PageStateContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
    const [answers, setAnswers] = useState(() => {
        // Retrieve data from sessionStorage on component mount
        const storedAnswers = sessionStorage.getItem('answers');
        return storedAnswers ? JSON.parse(storedAnswers) : Array(36).fill(undefined);
    });

    const UpdateList = (questionNumber, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionNumber - 1] = selectedAnswer;
        setAnswers(updatedAnswers);
    };

    // Save data to sessionStorage whenever answers change
    useEffect(() => {
        sessionStorage.setItem('answers', JSON.stringify(answers));
    }, [answers]);
    
    return (
        <PageStateContext.Provider value={{ answers, UpdateList }}>
        {children}
        </PageStateContext.Provider>
    );
};

PageStateProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const usePageState = () => {
  return useContext(PageStateContext);
};