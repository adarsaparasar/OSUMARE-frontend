
import '../index.css';

const Header = () => {
  return (
    <header className="bg-white shadow flex flex-row">
    
        
        <div className="basis-1/4 items-center space-x-4">
          <img src="src\assets\logo.svg" alt="Logo" className="h-10 w-10 ml-5" /> 
      </div>

      <div className='basis-1/2'></div>
      <div className='basis-1/4'>
        
        <button className='bg-white' >Contact Us</button>
        
         </div>
      
        
      
    </header>
  )
};

export default Header;
