import './App.css'
import img from './assets/body.jpg'

function App() {
  return (
    <div className="App">
      <header>
      
      <div className="headertop">
        <div className="logo">TheTop</div>

        <div className="navigation">
          <div className='trait'>Home</div>
          <div>About</div>
          <div>Features</div>
          <div>Blog</div>
          <div>Team</div>
        </div>

        <div className="fbsnap">
          <div><span class="iconify" data-icon="ant-design:facebook-outlined" data-width="22" data-height="22"></span></div>
          <div><span class="iconify" data-icon="ant-design:instagram-outlined" data-width="22" data-height="22"></span></div>
          <div><span class="iconify" data-icon="charm:mail" data-width="22" data-height="22"></span></div>
        </div>

      </div>
      </header>

      <body>
        <div className="central">
          <div className="column">
            
          </div>
          <div className="title">
            <h1>
              Bring Yourself To <br/> The Top
            </h1>
          </div>
          <div className="text">
            Stop looking for a secret trick and recognize that<br/> the best version of yourself should be your vision,<br/>not anybody else's
          </div>
          <div className="someone">
            <img src={img} alt="" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
