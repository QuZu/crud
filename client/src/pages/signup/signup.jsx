



import { Link } from "react-router-dom";
import "../signup/signup.css";

function Signup() {
    return (
      <div className="imge">
        <div className="fullscreen row justify-content-center align-items-center">
          <div className="col-10 col-sm-6 col-lg-4 justify-content-start">
            <div className="card p-1 mb-0">
              <div className="card-body">
                <div className="text-center">
                  <h2 className="mt-2">
                    <b>SIGN UP</b>
                  </h2>
                </div>
                <form>
                  <p className="errorMessage"></p>
                  <div className="mt-3 d-flex flex-column">
                    <input
                     
                      className="btn-border input-style form-control"
                      placeholder="Username"
                      type="text"
                    >
                    </input>
                    <small className="align-self-start error-text">
                     
                    </small>
  
                  </div>
                  <div className="mt-3 d-flex flex-column">
                    <input
                      
                      className="btn-border input-style form-control"
                      placeholder="University"
                      type="text"
                    >
                    </input>
                    <small className="align-self-start error-text">
                      
                    </small>
  
                  </div>
                  <div className="mt-3 d-flex flex-column">
                    <input
                      
                      className="btn-border input-style form-control"
                      placeholder="E-mail"
                      type="email"
                    >
                    </input>
                    <small className="align-self-start error-text">
                      
                    </small>
  
                  </div>
                  <div className="mt-3 d-flex flex-column">
                    <input
                     
                      className="btn-border input-style form-control"
                      placeholder="Password"
                      type="password"
  
                    >
                    </input>
                    <small className="align-self-start error-text">
                      
                    </small>
                  </div>
  
                  <div className="mt-3 d-flex flex-column">
                    <input
                      
                      className="btn-border form-control input-style"
                      placeholder="Confirm Password"
                      type="password"
  
                    >
                    </input>
                    <small className="align-self-start error-text">
                      
                    </small>
                  </div>
  
                  <div className="mt-3 d-flex flex-row">
                    <input
                    
                      className="form-check-input"
                      id="checkbox"
                      type="checkbox"
                    >
                    </input>
                    <small>
                      I have read and accepted &nbsp;
                      <a
                        className="link-success"
                        href="s"
                      >Privacy Policy
                      </a>
                    </small>
  
                  </div>
                  <small className="align-self-start error-text">
                    
                  </small>
  
  
                  <div className="mt-5 row text-center justify-content-center">
                    <div className="col-12">
                      <button
                        className="btn btn-block col-6 btn-success"
                        type='submit'
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
  
                  <div className="mt-2 row text-center justify-content-center">
                    <div className="col-12">
                      <Link
                        className="link-success"
                        to="/login"
                      > <p> Already have an account? </p>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;
  