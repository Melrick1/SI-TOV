import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Homepage.css'

const Homepage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const GetAdjustedWidth = () => {
        if (screenWidth >= 900) {
            return 400; // Width for larger screens
        } 
        else if (screenWidth <= 540) {
            return 250; // Width for medium screens
        }
        else if (screenWidth <= 900) {
            return 300; // Width for medium screens
        }
    };

    return(
        <section className='homepage section'>
            <div className='header'>
                <img src="/LOGO_UNIVERSITAS_KLABAT.png"  width={40} height={40} alt="Logo" />
                <h3>Universitas Klabat</h3>
            </div>
            <div className='content'>
                <div className='container'>
                    <div className='title-card'>
                        <div className='title'>
                            <h1>Sistem pengukur pengaruh penggunaan VTO</h1>
                        </div>
                        <div className='homecard-buttons'>
                            <Link to="/landingpage" className='homecard-link link-button'>Mahasiswa</Link>
                            <Link to="/Sign-in" className='homecard-link link-button'>Pedagang</Link>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img className='back-image' src="/virtual-try-on-makeup-solution.png" alt="" width={GetAdjustedWidth()}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage;