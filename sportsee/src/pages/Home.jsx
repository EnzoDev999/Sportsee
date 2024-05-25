import { Link } from 'react-router-dom';
import '../sass/pages/home.scss';
import { useDataContext } from '../context/DataContext';

const Home = () => {
    const { env, setEnv } = useDataContext(); // Utilisation de useDataContext pour accéder à env et setEnv

    const toggleEnv = () => {
        const newEnv = env === 'development' ? 'production' : 'development';
        setEnv(newEnv);  // Mise à jour de l'état env
        localStorage.setItem("env", newEnv);  // Mise à jour du localStorage directement ici
        console.log(`Environnement changé en: ${newEnv}`);
    };


    return (
        <div className="home">
            <h1>Choisissez un profil utilisateur</h1>
            <button onClick={toggleEnv}>
                Basculer vers {env === 'development' ? 'Production' : 'Développement'}
            </button>
            <div className="user-links">
                {/* Utiliser env pour modifier les liens ou le comportement */}
                <Link to="/user/12" className="user-link">
                    Profil de Karl ({env})
                </Link>
                <Link to="/user/18" className="user-link">
                    Profil de Cecilia ({env})
                </Link>
            </div>
        </div>
    );
};

export default Home;
