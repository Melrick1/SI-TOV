import Questions from '../Questions.jsx'
import { Link } from 'react-router-dom';
import { usePageState } from '../../../PageStateContext.jsx';
import { useEffect } from 'react';

const Page2 = () => {
    const { answers, UpdateList } = usePageState();

    useEffect(() => {
        console.log(answers)
    }, []);

    return(
        <section>
            <div className='topic-card'>
                <h2>Keinformatifan Produk</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={9}
                question="Saya mendapatkan informasi produk secara detail dengan menggunakan fitur AR pada aplikasi e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(9, selectedAnswer)}
                />
                <Questions
                n={10}
                question="Saya mendapatkan informasi produk secara lengkap dengan menggunakan fitur AR pada aplikasi e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(10, selectedAnswer)}
                />
                <Questions
                n={11}
                question="Saya dapat mengambil keputusan berbelanja dari informasi yang saya peroleh ketika menggunakan fitur AR pada aplikasi e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(11, selectedAnswer)}
                />
                <Questions
                n={12}
                question="Saya dapat membandingkan informasi produk dengan produk lain ketika menggunakan fitur AR pada aplikasi e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(12, selectedAnswer)}
                />
            </div>

            <div className='topic-card'>
                <h2>Kualitas Sistem</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={13}
                question="Saya merasa fitur AR pada aplikasi e-commerce menampilkan visualisasi produk dengan cepat."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(13, selectedAnswer)}
                />
                <Questions
                n={14}
                question="Saya merasa fitur AR pada aplikasi e-commerce dapat diandalkan untuk menjalankan fungsinya dengan baik tanpa ada kendala/error pada sistem."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(14, selectedAnswer)}
                />
                <Questions
                n={15}
                question="Saya merasa fitur AR di e-commerce berfungsi sesuai tujuan saya."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(15, selectedAnswer)}
                />
                <Questions
                n={16}
                question="Saya berasumsi tidak ada masalah dalam menggunakan fitur AR pada aplikasi e-commerce."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(16, selectedAnswer)}
                />
            </div>
            <div className='questionpage-nav-buttons'>
                <Link to="/mahasiswa" className='link-button questionpage-link prev'>Prev</Link>
                <Link to="/mahasiswa/3" className='link-button questionpage-link next'>Next</Link>
            </div>
        </section>
    )
}

export default Page2;