import { AiFillHome, AiFillDashboard, AiOutlineLogout } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
import { IoMdHelpCircle, IoIosPaper } from 'react-icons/io';
import { RiTeamFill } from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiFillHome />,
	},
	{
		title: 'Dashboard',
		path: '/dashboard',
		icon: <AiFillDashboard />,
	},
	{
		title: 'Join Us',
		path: '/partnership',
		icon: <RiTeamFill />,
	},
	{
		title: 'Partnership',
		path: '/partnership',
		icon: <FaHandshake />,
	},
	{
		title: 'Agreement',
		path: '/agreement',
		icon: <IoIosPaper />,
	},
	{
		title: 'FAQ',
		path: '/faq',
		icon: <IoMdHelpCircle />,
	},
	{
		title: 'Logout',
		path: '/logout',
		icon: <AiOutlineLogout />,
	},
];
