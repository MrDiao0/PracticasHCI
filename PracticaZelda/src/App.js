import React, { Component } from 'react';
import logozelda from './material/logo_zelda.png';
import './App.css';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {

  constructor(){
    super();
    this.login = this.login.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  login( ){

  }

  getValue(elm){
    console.log(elm.target.value);

  }

  render() {
    return (
      <div className="fondou">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
          <img src={logozelda}/>
          <form>
            <p>Ingresa tus datos para iniciar sesion</p>
            <p>Nombre de usuario</p>
            <input type="text" name="name" onChange={this.getValue}/>
            <p>Contraseña</p>
            <input type="password" name="password" onChange={this.getValue}/>
            <p></p>
            <button type="submit">ingresar</button>
            <p>ó</p>
            <GoogleLogin
              clientId = "254335505842-opbheodsfpmj136lht663bv2t1uost30.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </form>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
          <form>
            <p>Ingresa tus datos para registrate</p>
            <p>Nombre</p>
            <input type="text" name="reg_name" onChange={this.getValue}/>
            <p>Apellido</p>
            <input type="email" name="last_name" onChange={this.getValue}/>
            <p>Correo</p>
            <input type="text" name="email" onChange={this.getValue}/>
            <p>Nombre de usuario</p>
            <input type="text" name="username" onChange={this.getValue}/>
            <p>Contraseña</p>
            <input type="password" name="reg_password" onChange={this.getValue}/>
            <p></p>
            <button type="submit">Registrarse</button>

            

          </form>
          </div>
          <div className="col-md-1"></div>
      </div>
      </div>
    );

  }
}

export default App;
