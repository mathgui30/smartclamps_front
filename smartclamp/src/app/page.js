
import './login.css';

export default function Home() {
  return (
    
    <div className="login-container">
    <div className="logo-container">
      <img src="/img/SmartClamp_Logo.png" className='logo-sheet'/>
    </div>
    <div className="form-container">
    <div className='circle-container-2'>
        <div className='circle-2'></div>
      </div>
      <input type="email" placeholder="Email" className="input-field" />
      <input type="password" placeholder="Senha" className="input-field" />
      <button className="login-button">Acessar</button>
      <div className="forgot-password">
        <a href="#">Esqueci a senha</a>
      </div>
      <div className='circle-container'>
        <div className='circle'></div>
      </div>
      <div className='circle-container-2'>
        <div className='circle-2'></div>
      </div>
    </div>
    <div className="footer-text">
        Não tem uma conta? Toque aqui e saiba como adquirir uma
      </div>
  </div>
  );
}
