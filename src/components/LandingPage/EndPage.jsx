
import { Link } from 'react-router-dom';

const EndPage = () => {
    return(
        <section>
            <div className='landingpage'>
                <h1>Terima Kasih</h1>
                <h3>Sudah berpartisipasi dalam mengisi kuesioner ini</h3>
                <Link to="/" className='link-button questionpage-link next'>Selesai</Link>
            </div>
        </section>
    )
}

export default EndPage;