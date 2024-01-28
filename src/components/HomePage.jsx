import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import lawsContent from './shared/lawsContent.jsx';
import Slider from '../components/shared/Slider.jsx'
import { FaStar } from 'react-icons/fa'
import Rating from './shared/Rating.jsx';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../context/ContextProvider.jsx';


const HomePage = () => {
    const [activeLaw, setActiveLaw] = useState('family');
    const { lawyersList } = useContext(ContextProvider)
    const [selectedLawyers, setSelectedLawyers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const shuffledLawyers = shuffleArray(lawyersList);
        const selectedLawyers = shuffledLawyers.slice(0, 3);
        setSelectedLawyers(selectedLawyers);
    }, [lawyersList]);

    const activeButtonStyle = 'border-none text-[#800020] underline';
    const buttonStyle = 'border-none text-sm md:text-xl';

    const handleButtonClick = (lawType) => {
        setActiveLaw(lawType);
    }

    const redirectToFindLawyer = () => {
        navigate('/lawyers');
    };

    return (
        // Parent element
        <div>
            {/* Hero */}
            <div className=''>
                <div className="relative w-full">
                    {/* Overlay */}
                    <div className="absolute w-full h-full text-gray-200 max-h-[500px] flex gap-8 md:gap-36 py-8 md:py-28 flex-col">
                        <div className='z-10'>
                            <h1 className="px-4 text-xl md:text-2xl font-bold">Welcome to DZ Mouhami</h1>
                            <h1 className="px-4 text-lg md:text-2xl font-normal ">Your trusted legal partner</h1>
                        </div>
                        <h1 className="px-4 text-sm md:text-lg font-extralight z-10">
                            Explore our services and meet our skilled attorneys. Let's navigate your legal journey together.</h1>
                    </div>
                    <img className="md:h-[500px] w-full brightness-50 z-0 object-cover" src="https://cdn.wallpapersafari.com/66/97/zlEA1G.jpg" alt="" />
                </div>
            </div>
            {/* Find */}
            <div className='flex flex-row m-8 md:mx-64 gap-8'>
                {/* Legal issue bar */}
                <select
                    className="h-14 w-full border-none p-2 shadow-lg">
                    <option selected disabled value="">Legal issue</option>
                    <option value="family">Family Law</option>
                    <option value="tax">Tax Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="civil">Civil and Political Rights</option>
                    <option value="faillite">Avocat de la faillite</option>
                    <option value="emploi">Avocat à l'emploi</option>
                    <option value="famille">Avocat familial</option>
                    <option value="general">Avocat généraliste</option>
                    <option value="fiscal">Avocat fiscaliste</option>
                    <option value="penal">Droit pénal</option>
                    <option value="civil">Droit civil</option>
                    <option value="affaires">Droit des affaires</option>
                    <option value="civil">Droit civil</option>
                    <option value="commercial">Droit commercial</option>
                    <option value="administratif">Administratif</option>
                </select>

                {/* Location bar */}
                <select placeholder="Wilaya" className="h-14 w-full border-none p-2 shadow-lg">
                    <option selected disabled value="">Wilaya</option>
                    <option value="Adrar">Adrar</option>
                    <option value="Chlef">Chlef</option>
                    <option value="Laghouat">Laghouat</option>
                    <option value="Oum El Bouaghi">Oum El Bouaghi</option>
                    <option value="Batna">Batna</option>
                    <option value="Béjaïa">Béjaïa</option>
                    <option value="Bejaia">Béjaïa</option>
                    <option value="Biskra">Biskra</option>
                    <option value="Béchar">Béchar</option>
                    <option value="Bechar">Béchar</option>
                    <option value="Blida">Blida</option>
                    <option value="Bouira">Bouira</option>
                    <option value="Tamanrasset">Tamanrasset</option>
                    <option value="Tébessa">Tébessa</option>
                    <option value="Tebessa">Tébessa</option>
                    <option value="Tlemcen">Tlemcen</option>
                    <option value="Tiaret">Tiaret</option>
                    <option value="Tizi Ouzou">Tizi Ouzou</option>
                    <option value="Alger">Alger</option>
                    <option value="Djelfa">Djelfa</option>
                    <option value="Jijel">Jijel</option>
                    <option value="Sétif">Sétif</option>
                    <option value="Saïda">Saïda</option>
                    <option value="Setif">Sétif</option>
                    <option value="Saida">Saïda</option>
                    <option value="Skikda">Skikda</option>
                    <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
                    <option value="Sidi Bel Abbes">Sidi Bel Abbès</option>
                    <option value="Annaba">Annaba</option>
                    <option value="Guelma">Guelma</option>
                    <option value="Constantine">Constantine</option>
                    <option value="Médéa">Médéa</option>
                    <option value="Medea">Médéa</option>
                    <option value="Mostaganem">Mostaganem</option>
                    <option value="M'Sila">M'Sila</option>
                    <option value="Msila">M'Sila</option>
                    <option value="Mascara">Mascara</option>
                    <option value="Ouargla">Ouargla</option>
                    <option value="Oran">Oran</option>
                    <option value="El Bayadh">El Bayadh</option>
                    <option value="Illizi">Illizi</option>
                    <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
                    <option value="Boumerdès">Boumerdès</option>
                    <option value="Bordj Bou Arreridj">Bordj Bou Arréridj</option>
                    <option value="Boumerdes">Boumerdès</option>
                    <option value="El Tarf">El Tarf</option>
                    <option value="Tindouf">Tindouf</option>
                    <option value="Tissemsilt">Tissemsilt</option>
                    <option value="Souk Ahras">Souk Ahras</option>
                    <option value="Tipaza">Tipaza</option>
                    <option value="Mila">Mila</option>
                    <option value="Aïn Defla">Aïn Defla</option>
                    <option value="Naâma">Naâma</option>
                    <option value="Aïn Témouchent">Aïn Témouchent</option>
                    <option value="Ghardaïa">Ghardaïa</option>
                    <option value="Ain Defla">Aïn Defla</option>
                    <option value="Naama">Naâma</option>
                    <option value="Ain Temouchent">Aïn Témouchent</option>
                    <option value="Ghardaia">Ghardaïa</option>
                    <option value="Relizane">Relizane</option>
                    <option value="El M'Ghair">El M'Ghair</option>
                    <option value="El Mghair">El M'Ghair</option>
                    <option value="Ouled Djellal">Ouled Djellal</option>
                    <option value="Beni Abbes">Beni Abbes</option>
                    <option value="In Salah">In Salah</option>
                    <option value="In Guezzam">In Guezzam</option>
                </select>



                {/* Find button */}
                <button type="submit" onClick={redirectToFindLawyer}
                    className="h-14 w-1/3 border-none rounded-none bg-[#800020] text-white shadow-lg">Find 🔍</button>
            </div>
            {/* Our services */}
            <div className='flex flex-col mt-8'>
                {/* Title */}
                <h1 className='place-self-center font-black text-2xl text-[#800020]'>Our services 👨🏻‍⚖️</h1>
                {/* Options */}
                <ul className='flex flex-row font-bold md:gap-14 gap-8 text-sm md:text-xl justify-center m-4'>
                    <button onClick={() => handleButtonClick("family")} className={`border-none ${activeLaw === 'family' ? activeButtonStyle : buttonStyle}`}>Family Law</button>
                    <button onClick={() => handleButtonClick("tax")} className={`border-none ${activeLaw === 'tax' ? activeButtonStyle : buttonStyle}`}>Tax Law</button>
                    <button onClick={() => handleButtonClick("criminal")} className={`border-none ${activeLaw === 'criminal' ? activeButtonStyle : buttonStyle}`}>Criminal Law</button>
                    <button onClick={() => handleButtonClick("civil")} className={`border-none ${activeLaw === 'civil' ? activeButtonStyle : buttonStyle}`}>Civil and political rights</button>
                </ul>
                {/* Description */}
                {activeLaw ? lawsContent[activeLaw] : null}
            </div>

            {/* Our team */}
            <div className='flex justify-center my-4'>
                <h1 className='text-2xl font-black text-[#800020] z-50 mb-4'>Our most trusted lawyers</h1>
            </div>
            {/* Overlay */}

            <div className='flex flex-row gap-8 justify-center mb-8'>
                {lawyersList.slice(0, 6).map((lawyer) => (
                    <Link to={`lawyers/${lawyer.id}`} key={lawyer.id} className='border-[1px] border-red-800 p-8'>
                        <h1 className='font-black'>{lawyer.full_name}</h1>
                        <div className='flex flex-row gap-1 justify-center mt-2'>
                            <FaStar className='text-red-800' />
                            <FaStar className='text-red-800' />
                            <FaStar className='text-red-800' />
                            <FaStar className='text-red-800' />
                            <FaStar className='text-red-800' />
                        </div>
                    </Link>
                ))
                }
            </div>


            {/* Our clients opinions */}
            <div>
                <div className='flex justify-center'>
                    <h1 className='text-2xl font-black text-[#800020] z-50 my-4'>Our clients opinions</h1>
                </div>
                <div>
                    <Slider />
                </div>
            </div>

            {/* Feedback system */}
            <div>
                <div>
                    <Rating />
                </div>
            </div>
        </div>
    );
}

export default HomePage;