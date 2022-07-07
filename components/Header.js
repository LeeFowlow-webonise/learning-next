import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
      <div>
        <h1 className={headerStyles.title}><span>Learning</span> Next.js</h1>
        <p className={headerStyles.description}>My first project in Next.js</p>
      </div>
    )
  }
  
  export default Header