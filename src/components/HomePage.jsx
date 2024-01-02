import headerImage from '../../../../Projet GL/Design/HD Law Wallpapers Top Free HD Law Backgrounds.jpg';
import familyImage from '../../../../Projet GL/Design/maxresdefault.jpg';
import teamImage from '../../../../Projet GL/Design/teamImage.jpg';
import { useState } from 'react';
import Slider from '../components/shared/Slider.jsx'
import { FaStar } from 'react-icons/fa'


const HomePage = () => {
    const [activeLaw, setActiveLaw] = useState('family');
    const lawsContent = {
        family: (<div className='flex flex-row gap-8 md:gap-0 mx-6 md:mx-64 md:mt-4 justify-between'>
            {/* Text */}
            <p className='md:text-lg text-sm md:px-24'>
                <span className='font-bold text-lg'>Compassionate family law solutions</span>
                <br />
                Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Vel, sint fuga eum dolorum accusantium molestiae ratione
                minima provident ipsum fugiat excepturi atque ea aut incidunt
                nemo accusamus hic tempore placeat?
            </p>
            {/* pic */}
            <img className='shadow-[#800020] shadow-md h-48 w-48 object-cover'
                src={familyImage}></img>
        </div>),
        tax: (<div className='flex flex-row gap-8 md:gap-0 mx-6 md:mx-64 md:mt-4 justify-between'>
            {/* Text */}
            <p className='md:text-lg text-sm md:px-24'>
                <span className='font-bold text-lg'>Compassionate family law solutions</span>
                <br />
                Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Vel, sint fuga eum dolorum accusantium molestiae ratione
                minima provident ipsum fugiat excepturi atque ea aut incidunt
                nemo accusamus hic tempore placeat?
            </p>
            {/* pic */}
            <img className='shadow-[#800020] shadow-md h-48 w-48 object-cover'
                src="https://helmersomerslaw.com/wp-content/uploads/2018/12/Tax-Law-Northern-Kentucky-Florence-Tax-Attorney.jpg"></img>
        </div>),
        criminal: (<div className='flex flex-row gap-8 md:gap-0 mx-6 md:mx-64 md:mt-4 justify-between'>
            {/* Text */}
            <p className='md:text-lg text-sm md:px-24'>
                <span className='font-bold text-lg'>Compassionate family law solutions</span>
                <br />
                Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Vel, sint fuga eum dolorum accusantium molestiae ratione
                minima provident ipsum fugiat excepturi atque ea aut incidunt
                nemo accusamus hic tempore placeat?
            </p>
            {/* pic */}
            <img className='shadow-[#800020] shadow-md h-48 w-48 object-cover'
                src="https://fbalawfirm.com/wp-content/uploads/2021/06/criminal-home-banner-1024x683.jpg"></img>
        </div >),
        civil: (<div className='flex flex-row gap-8 md:gap-0 mx-6 md:mx-64 md:mt-4 justify-between'>
            {/* Text */}
            <p className='md:text-lg text-sm md:px-24'>
                <span className='font-bold text-lg'>Compassionate family law solutions</span>
                <br />
                Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Vel, sint fuga eum dolorum accusantium molestiae ratione
                minima provident ipsum fugiat excepturi atque ea aut incidunt
                nemo accusamus hic tempore placeat?
            </p>
            {/* pic */}
            <img className='shadow-[#800020] shadow-md h-48 w-48 object-cover'
                src="https://archive-2017-2022.indepthnews.info/images/civil-rights-movements-1963-march.jpg"></img>
        </div>)
    }

    const activeButtonStyle = 'border-none text-[#800020] underline';
    const buttonStyle = 'border-none text-sm md:text-xl';

    const handleButtonClick = (lawType) => {
        setActiveLaw(lawType);
    }

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
                    <img className="md:h-[500px] w-full brightness-50 z-0 object-cover" src={headerImage} alt="" />
                </div>
            </div>

            {/* Find section */}
            <div className='flex flex-row m-8 md:mx-64 gap-8'>
                {/* Legal issue bar */}
                <select
                    className="h-14 w-1/3 border-none p-2 shadow-lg">
                    <option selected disabled value="">Legal issue</option>
                    <option value="family">Family Law</option>
                    <option value="tax">Tax Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="civil">Civil and Political Rights</option>
                </select>

                {/* Location bar */}
                <select placeholder="Location" className="h-14 w-1/3 border-none p-2 shadow-lg">
                    <option selected disabled value="">Location</option>
                    <option value="Adrar">Adrar</option>
                    <option value="Chlef">Chlef</option>
                    <option value="Laghouat">Laghouat</option>
                    <option value="Oum El Bouaghi">Oum El Bouaghi</option>
                    <option value="Batna">Batna</option>
                    <option value="Béjaïa">Béjaïa</option>
                    <option value="Biskra">Biskra</option>
                    <option value="Béchar">Béchar</option>
                    <option value="Blida">Blida</option>
                    <option value="Bouira">Bouira</option>
                    <option value="Tamanrasset">Tamanrasset</option>
                    <option value="Tébessa">Tébessa</option>
                    <option value="Tlemcen">Tlemcen</option>
                    <option value="Tiaret">Tiaret</option>
                    <option value="Tizi Ouzou">Tizi Ouzou</option>
                    <option value="Alger">Alger</option>
                    <option value="Djelfa">Djelfa</option>
                    <option value="Jijel">Jijel</option>
                    <option value="Sétif">Sétif</option>
                    <option value="Saïda">Saïda</option>
                    <option value="Skikda">Skikda</option>
                    <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
                    <option value="Annaba">Annaba</option>
                    <option value="Guelma">Guelma</option>
                    <option value="Constantine">Constantine</option>
                    <option value="Médéa">Médéa</option>
                    <option value="Mostaganem">Mostaganem</option>
                    <option value="M'Sila">M'Sila</option>
                    <option value="Mascara">Mascara</option>
                    <option value="Ouargla">Ouargla</option>
                    <option value="Oran">Oran</option>
                    <option value="El Bayadh">El Bayadh</option>
                    <option value="Illizi">Illizi</option>
                    <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
                    <option value="Boumerdès">Boumerdès</option>
                    <option value="El Tarf">El Tarf</option>
                    <option value="Tindouf">Tindouf</option>
                    <option value="Tissemsilt">Tissemsilt</option>
                    <option value="El Oued">El Oued</option>
                    <option value="Khenchela">Khenchela</option>
                    <option value="Souk Ahras">Souk Ahras</option>
                    <option value="Tipaza">Tipaza</option>
                    <option value="Mila">Mila</option>
                    <option value="Aïn Defla">Aïn Defla</option>
                    <option value="Naâma">Naâma</option>
                    <option value="Aïn Témouchent">Aïn Témouchent</option>
                    <option value="Ghardaïa">Ghardaïa</option>
                    <option value="Relizane">Relizane</option>
                    <option value="El M'Ghair">El M'Ghair</option>
                    <option value="Ouled Djellal">Ouled Djellal</option>
                    <option value="Beni Abbes">Beni Abbes</option>
                    <option value="In Salah">In Salah</option>
                    <option value="In Guezzam">In Guezzam</option>
                </select>


                {/* Find button */}
                <button type="submit"
                    className="h-14 w-1/3 border-none rounded-none bg-[#800020] text-white shadow-lg">Find 🔍</button>
            </div>

            {/* Our services */}
            <div className='flex flex-col'>
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
            <div className="relative w-full mt-12">
                <div className='flex justify-center'>
                    <h1 className='text-2xl font-black text-[#800020] z-50 mb-4'>Our most trusted lawyers</h1>
                </div>
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] flex place-items-center gap-8 md:gap-36 py-8 md:py-28 flex-col">
                    <div className='z-10 flex flex-row gap-8'>
                        <div className='backdrop-filter backdrop-brightness-50 rounded-md relative flex flex-col place-items-center gap-4 md:py-8 md:px-16 py-4 px-2'>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" className='h-24 w-24 object-cover' />
                            <h1 className='font-bold'>Full name, wilaya</h1>
                            <h1 className='font-bold text-red-700'>Speciality</h1>
                            <div className='flex flex-row gap-1'>
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                            </div>
                        </div>
                        <div className='backdrop-filter backdrop-brightness-50 rounded-md relative flex flex-col place-items-center gap-4 md:py-8 md:px-16 py-4 px-2'>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" className='h-24 w-24 object-cover' />
                            <h1 className='font-bold'>Full name, wilaya</h1>
                            <h1 className='font-bold text-red-700'>Speciality</h1>
                            <div className='flex flex-row gap-1'>
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                            </div>
                        </div>
                        <div className='backdrop-filter backdrop-brightness-50 rounded-md relative flex flex-col place-items-center gap-4 md:py-8 md:px-16 py-4 px-2'>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" className='h-24 w-24 object-cover' />
                            <h1 className='font-bold'>Full name, wilaya</h1>
                            <h1 className='font-bold text-red-700'>Speciality</h1>
                            <div className='flex flex-row gap-1'>
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                                <FaStar className='text-red-700' />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="md:h-[500px] w-full brightness-50 z-0 object-cover" src={teamImage} alt="" />
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

            {/* Footer */}
            <footer class="shadow bg-black mt-8">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DZ Mouhami</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-white sm:mx-auto lg:my-8" />
                    <span class="block text-sm text-white sm:text-center">© 2023 <a href="" class="hover:underline">DZ Mouhami™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
}

export default HomePage;