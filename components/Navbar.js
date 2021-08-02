import Link from 'next/link'
import Image from 'next/Image'
const Navbar = () => {
 return (
  <nav>
    <div className="logo">
      <Image src="/mile.png" width={70} height={40}/>
      <h1>Milena Cabrera</h1>
    </div>
    <Link href="https://github.com/MissyM"><a>GitHub</a></Link>
    <Link href="/https://www.linkedin.com/in/milena-cabrera/"><a>Linked In</a></Link>
   
  </nav>
  );
}

export default Navbar; 