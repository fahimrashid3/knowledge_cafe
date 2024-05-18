import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between max-w-7xl mx-auto p-5 border-b-2 mb-10'>
            <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;