import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

import "../App.css";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const startAuth = () => {
    setLoading(true);
    axios
      .get("https://assembly-poc-ai.herokuapp.com/start-auth")
      .then((res) => {
        if (res.data.redirectUrl) {
          localStorage.setItem(
            "oauthRequestTokenSecret",
            res.data.oauthRequestTokenSecret
          );
          localStorage.setItem("oauthRequestToken", res.data.oauthRequestToken);
          window.location.href = res.data.redirectUrl;
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("auth error", err);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group"></div>
                      <div className="form-group"></div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small"></div>
                      </div>

                      <hr></hr>

                      {loading && <Spinner />}
                      {!loading && (
                        // <button onClick={startAuth}> Sign In With Twitter </button>
                        <button
                          className="btn btn-facebook btn-user btn-block"
                          onClick={startAuth}
                        >
                          {" "}
                          Sign In With Twitter{" "}
                        </button>
                      )}
                    </form>
                    <hr></hr>
                    <div className="text-center">
                      <a className="small" href="/">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
