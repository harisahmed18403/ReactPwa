import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
const Navbar = () => {
    return (
        <nav className="bg-primaryBg border-b border-onPrimaryBg">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        {/* <!-- Logo --> */}
                        <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                alt="React Jobs"
                            />
                            <span className="hidden md:block text-onPrimaryBg text-2xl font-bold ml-2">React Jobs</span>
                        </Link>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <Link
                                    to="/"
                                    className="text-onPrimaryBg bg-primary hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >Home</Link>
                                <Link
                                    to="/settings"
                                    className="text-onPrimaryBg hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >Settings</Link>
                                <Link
                                    to="/add-job"
                                    className="text-onPrimaryBg hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >Add Job</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar