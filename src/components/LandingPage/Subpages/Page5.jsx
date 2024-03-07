import Questions from '../Questions.jsx'
import { Link, useNavigate } from 'react-router-dom';
import { usePageState } from '../../../PageStateContext.jsx';
import { useEffect } from 'react';
import StoreAnswers from './StoreAnswers.jsx';

const Page5 = () => {
    const { answers, UpdateList } = usePageState();
    const navigate = useNavigate();

    const handleClick = () => {
        if (answers.includes(undefined || null)) {
            alert("Tidak boleh ada jawaban kosong");
        } else {
            // Proceed with your logic if all elements are defined
            StoreAnswers(answers);
            navigate('/mahasiswa/finish')
        }
    };

    useEffect(() => {
        console.log(answers)
    }, []);

    return(
        <section>
            <div className='topic-card'>
                <h2>Niat Membeli</h2>
            </div>
            <div className='questions-container'>
                <Questions
                n={33}
                question="Saya akan segera membeli produk yang telah saya coba sebelumnya melalui fitur Virtual try-on yang tersedia di e-commerce. (misalnya, sudah menambahkan produk ke keranjang Anda dan akan segera membayarnya)."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(33, selectedAnswer)}
                />
                <Questions
                n={34}
                question="Saya ingin segera membeli produk yang sudah pernah saya coba melalui fitur Virtual try-on yang tersedia di e-commerce (misalnya ada keinginan untuk membeli suatu produk tetapi belum melakukan tindakan apa pun)."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(34, selectedAnswer)}
                />
                <Questions
                n={35}
                question="Saya berharap dapat segera membeli produk yang telah saya coba sebelumnya melalui fitur Virtual try-on yang tersedia di e-commerce. (Contoh: Menambahkan produk ke daftar keinginan saya)."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(35, selectedAnswer)}
                />
                <Questions
                n={36}
                question="Saya akan merekomendasikan produk yang saya coba melalui fitur virtual try-on."
                input1="Option 1"
                input2="Option 2"
                input3="Option 3"
                input4="Option 4"
                onAnswerChange={(selectedAnswer) => UpdateList(36, selectedAnswer)}
                />
            </div>

            <div className='questionpage-nav-buttons'>
                <Link to="/mahasiswa/4" className='link-button questionpage-link prev'>Prev</Link>
                <button className='questionpage-link submit' onClick={handleClick}>Submit</button>
            </div>
        </section>
    )
}

export default Page5;