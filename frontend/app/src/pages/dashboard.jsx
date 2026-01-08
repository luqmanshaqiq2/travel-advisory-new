import logo from '../assets/logo.png';
import Map from '../component/map';
import Guidance from '../component/guidance';
import Footer from '../component/footer';
import { useNavigate } from 'react-router';


export default function Dashboard() {

	const Navigate = useNavigate();
	return(
		<>
		<div className="flex justify-between items-center mx-4 mt-4">
			<div className="text-2xl font-semibold inline-flex items-center">
				Pearl Lanka
				<img src={logo} alt="Pearl Lanka Logo" className="ml-2 w-10 h-10"/>
			</div>
			<div className="text-2xl text-gray-600 inline-flex items-center">
				Welcome, User
				<img className="ml-2 w-7 h-7" src="https://img.icons8.com/?size=100&id=IerOpHeUt2OH&format=png&color=000000" onClick={() => Navigate("/settings")}/>
			</div>
		</div>
		<div className="mt-5">
			<Map />
		</div>
		<div className='mt-5'>
			<Guidance />
		</div>
		<div className='mt-5'>
			<Footer />
		</div>
		</>
	)
}