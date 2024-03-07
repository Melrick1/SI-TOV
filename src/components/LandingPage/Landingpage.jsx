import './Landingpage.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <section>
            <div className='landingpage'>
                <h1>Selamat Datang</h1>
                <h3>Apakah anda mahasiswa?</h3>
                <div className='landingpage-links'>
                    <Link to="/" className='link-button questionpage-link prev'>Tidak</Link>
                    <Link to="/mahasiswa" className='link-button questionpage-link next'>Ya</Link>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;