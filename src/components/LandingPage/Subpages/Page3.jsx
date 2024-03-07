import Questions from '../Questions.jsx'
import { Link } from 'react-router-dom';
import { usePageState } from '../../../PageStateContext.jsx';
import { useEffect } from 'react';

const Page3 = () => {
    const { answers, UpdateList } = usePageState();

    useEffect(() => {
        console.log(answers)
    }, []);

    return(
        <section>
            <div className='topic-card'>
                <h2>Kebaruan</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={17}
                question="Saya merasa fitur AR memberikan tampilan baru bagi pengguna saat pertama kali mencoba produknya."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(17, selectedAnswer)}
                />
                <Questions
                n={18}
                question="Saya merasa fitur AR memberikan tampilan unik pada setiap produk."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(18, selectedAnswer)}
                />
                <Questions
                n={19}
                question="Saya merasa fitur AR membuat perbedaan untuk setiap produk."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(19, selectedAnswer)}
                />
                <Questions
                n={20}
                question="Saya merasa fitur AR menunjukkan sesuatu yang tidak biasa pada setiap produk."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(20, selectedAnswer)}
                />
            </div>

            <div className='topic-card'>
                <h2>Nilai Hedonis</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={21}
                question="Saya merasa aplikasi e-commerce yang dilengkapi fitur AR lebih menyenangkan"
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(21, selectedAnswer)}
                />
                <Questions
                n={22}
                question="Saya merasa waktu yang saya habiskan untuk menggunakan fitur Virtual try-on adalah hal yang baik."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(22, selectedAnswer)}
                />
                <Questions
                n={23}
                question="Fitur Virtual try-on menghibur saya karena saya melihat tampilan baru diri saya saat mencoba produk secara virtual."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(23, selectedAnswer)}
                />
                <Questions
                n={24}
                question="Saya merasa senang ketika menggunakan fitur Virtual try-on."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(24, selectedAnswer)}
                />
            </div>
            <div className='questionpage-nav-buttons'>
                <Link to="/mahasiswa/2" className='link-button questionpage-link prev'>Prev</Link>
                <Link to="/mahasiswa/4" className='link-button questionpage-link next'>Next</Link>
            </div>
        </section>
    )
}

export default Page3;