import Questions from '../Questions.jsx'
import { Link } from 'react-router-dom';
import { usePageState } from '../../../PageStateContext.jsx';
import { useEffect } from 'react';

const Page4 = () => {
    const { answers, UpdateList } = usePageState();

    useEffect(() => {
        console.log(answers)
    }, []);

    return(
        <section>
            <div className='topic-card'>
                <h2>Kepuasan</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={25}
                question="Saya merasa puas karena kebutuhan saya untuk mencoba produk terpenuhi dengan menggunakan fitur AR di e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(25, selectedAnswer)}
                />
                <Questions
                n={26}
                question="Saya puas dengan kesesuaian visualisasi produk saat menggunakan fitur AR di e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(26, selectedAnswer)}
                />
                <Questions
                n={27}
                question="Pengalaman menggunakan fitur AR sesuai dengan ekspektasi saya."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(27, selectedAnswer)}
                />
                <Questions
                n={28}
                question="Secara keseluruhan, saya merasa puas menggunakan fitur AR di e-commerce untuk mencoba suatu produk."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(28, selectedAnswer)}
                />
            </div>

            <div className='topic-card'>
                <h2>Nilai Keberlanjutan</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={29}
                question="Saya bermaksud untuk terus menggunakan fitur AR dari aplikasi ini."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(29, selectedAnswer)}
                />
                <Questions
                n={30}
                question="Saya akan sering menggunakan fitur AR dari aplikasi ini di masa mendatang."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(30, selectedAnswer)}
                />
                <Questions
                n={31}
                question="Saya akan merekomendasikan fitur AR aplikasi ini kepada orang lain."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(31, selectedAnswer)}
                />
                <Questions
                n={32}
                question="Saya akan menggunakan fitur AR dari aplikasi ini secara rutin di masa mendatang."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(32, selectedAnswer)}
                />
            </div>
            <div className='questionpage-nav-buttons'>
                <Link to="/mahasiswa/3" className='link-button questionpage-link prev'>Prev</Link>
                <Link to="/mahasiswa/5" className='link-button questionpage-link next'>Next</Link>
            </div>
        </section>
    )
}

export default Page4;