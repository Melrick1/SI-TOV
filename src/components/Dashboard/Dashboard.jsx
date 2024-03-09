import Navigation from "./SubComponents/Nav.jsx" 
import BarChart from "./SubComponents/BarChart.jsx";
import FetchAnswers from "./FetchAnswers.jsx"
import "./Dashboard.css"
import { useEffect, useState } from 'react';
import PieChart from "./SubComponents/PieChart.jsx";

const Dashboard = () => {
    const [Data, setData] = useState([]);
    const [activePart, setActivePart] = useState(1);
    const [hash, setHash] = useState(window.location.hash);

    const fetchdata = async () => {
        const answersLists = await FetchAnswers();
        setData(answersLists);
    };

    const onHashChange = () => {
        setHash(window.location.hash)

        //mapping
        const hashMappings = {
            '#interaktivitas': 1,
            '#kejelasan': 2,
            '#keinformatifan-produk': 3,
            '#kualitas-Sistem': 4,
            '#kebaruan': 5,
            '#nilai-Hedonis': 6,
            '#kepuasan': 7,
            '#nilai-Keberlanjutan': 8,
            '#niat-Membeli': 9,
            '#semua' : 10,
        };
        setActivePart(hashMappings[hash] || 1);
    };

    const questionList = () => ({
        1: [1, 2, 3, 4],
        2: [5, 6, 7, 8],
        3: [9, 10, 11, 12],
        4: [13, 14, 15, 16],
        5: [17, 18, 19, 20],
        6: [21, 22, 23, 24],
        7: [25, 26, 27, 28],
        8: [29, 30, 31, 32],
        9: [33, 34, 35, 36],
    }[activePart] || []);

    useEffect(() => {
        window.addEventListener('hashchange', onHashChange);
        onHashChange();
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('hashchange', onHashChange);
        };
    }, [hash]);

    useEffect(() => {
        fetchdata()
    },[activePart])

    return(
        <section className="statistics">            
            <Navigation></Navigation>
            <div className="dashboard">
                <h1>Dashboard</h1>
                {questionList().map((questionNumber) => (
                    <BarChart key={questionNumber} questionNumber={questionNumber} answersLists={Data} />
                ))}
                {activePart === 10 && 
                    <PieChart answersLists={Data}/>
                }
            </div>
        </section>
    )
}

export default Dashboard