import Questions from '../Questions.jsx'
import { Link } from 'react-router-dom';
import { usePageState } from '../../../PageStateContext';
import { useEffect } from 'react';
import './Questionnaire.css'

const Page1 = () =>{
    const { answers, UpdateList } = usePageState();
    
    useEffect(() => {
        console.log(answers)
    }, []);
    // const [answers, setAnswers] = useState(Array(8).fill(undefined));

    // const UpdateList = (questionNumber, selectedAnswer) => {
        //  const updatedAnswers = [...answers];
        //  updatedAnswers[questionNumber - 1] = selectedAnswer;
        //  setAnswers(updatedAnswers);
    // };
    
    return(
        <section className='page'>
            <div className='topic-card'>
                <h2>Interaktivitas</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={1}
                question="Saya memiliki kendali penuh atas menu navigasi AR."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(1, selectedAnswer)}
                />
                <Questions
                n={2}
                question="Saya memiliki kendali penuh atas produk dan variasi yang tersedia melalui fitur AR."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(2, selectedAnswer)}
                />
                <Questions
                n={3}
                question="Saya memiliki kendali penuh atas durasi melihat produk melalui fitur AR."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(3, selectedAnswer)}
                />
                <Questions
                n={4}
                question="Saya dapat berinteraksi dengan tampilan produk virtual melalui fitur AR untuk mendapatkan informasi terkait produk yang sesuai dengan kebutuhan spesifik saya."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(4, selectedAnswer)}
                />
            </div>

            <div className='topic-card'>
                <h2>Kejelasan</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={5}
                question="Saya rasa tampilan visual produk pada fitur AR sudah jelas."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(5, selectedAnswer)}
                />
                <Questions
                n={6}
                question="Tampilan visual fitur AR menurut saya sangat detail."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(6, selectedAnswer)}
                />
                <Questions
                n={7}
                question="Saya merasa tampilan visual produk pada fitur AR terlihat realistis."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(7, selectedAnswer)}
                />
                <Questions
                n={8}
                question="Saya merasa tampilan visual produk pada fitur AR terlihat jelas."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(8, selectedAnswer)}
                />
            </div>
            <div className='questionpage-nav-buttons'>
                <Link to="/mahasiswa/2" className='link-button questionpage-link next'>Next</Link>
            </div>
        </section>
    )
}

export default Page1