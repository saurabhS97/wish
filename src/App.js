import "./styles.css";
import { useState, useEffect } from "react";
// import useWindowSize from "react-use/lib/npm i @uidotdev/usehooks";
import Confetti from "react-confetti";

export default function App() {
  const [step, setStep] = useState(1);
  const [passPhrase, setPassphrase] = useState();
  const [valid, setValid] = useState(false);
  const [pleaseCount, setPleaseCount] = useState(0);
  const [pleaseStr, setPleaseStr] = useState("");
  const [loveYou, setLoveYou] = useState(false);

  const date = new Date();

  useEffect(() => {
    if (JSON.stringify(date.getDate()) > 20) {
      setValid(true);
    } else setValid(false);
  }, [date]);

  useEffect(() => {
    setPleaseStr(prev=>prev.concat(" Please"))
  }, [pleaseCount]);  
  return (
    <div>

      <div className="App">
        {!valid && <h1>Oh Stree kal Ana</h1>}
        {valid && (
          <div>
            {step === 1 && (
              <div>
                <h3 style={{ margin: "100px 0 20px" }}>
                  Today is all about you, Apita
                </h3>
                <button className="button" onClick={() => setStep(1.5)}>
                  Proceed...
                </button>
              </div>
            )}
            {step === 1.5 && (
              <div>
                <div style={{ margin: "100px 0 25px" }}>
                  <p>
                    What do you call me when I call you <b>Ari</b>
                  </p>
                </div>

                <input
                  placeholder="Enter answer here"
                  type="password"
                  onChange={(e) => setPassphrase(e.target.value)}
                />
                <button
                  className="button"
                  disabled={passPhrase !== "subbi"}
                  onClick={() => setStep(2)}
                  style={{ opacity: passPhrase !== "subbi" ? 0.5 : 1 }}
                >
                  Submit
                </button>
               
                <center
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    color: "#3d3d3d"
                  }}
                >
                  <b>Hint:</b> 4 letters and for Sparrow
                </center>
              </div>
            )}
            {step === 2 && (
              <div>
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  tweenDuration={5000}
                />
               
               { pleaseCount<5&& !loveYou?
               <div
                  style={{
                    maxWidth: "350px",
                    padding: "20px",
                    margin: "0 auto",
                    border: "2px solid #ff7700",
                    marginTop: "20px",
                    backgroundColor: "#fff"
                  }}
                >
                  <h2 style={{ fontSize: "20px" }}>
                    Happy Birthday, Beblu
                  </h2>
                  <span>
                  In the melody of my life, you're the sweetest note, echoing in my heart. Your love is my most cherished treasure, painting my world with passion. Here's to a new year, my love, where our journey unfolds in joy, growth, and boundless affection.
                  </span>
                  <p class>Many happy returns, chamcham</p>
                  <div>

{
pleaseCount==0?

                  <h2 style={{ fontSize: "18px" }}> Do you Love me?</h2>:<h2 style={{ fontSize: "18px" }}>{pleaseStr}??</h2>
}

                  <div style={{display:"flex"}}>
                  <div>
                    <button
                      onClick={() => setPleaseCount(prev=>prev+1)}
                      style={{ marginTop: "20px",minHeight:"45px" }}
                    >
                      I don't love you 😡
                    </button>
                  </div>
                  <div>
                    
                    <button
                      onClick={() => setLoveYou(true)}
                      style={{ marginTop: "20px", marginLeft:"50px", minHeight:"45px" }}
                      
                    >
                      I love you too!!
                    </button>
                  </div>
                  </div></div>
                </div>
                :
                loveYou?
                  <div>
                  <h2>Love you too Babeluuuu</h2>
                  </div>:
                <div>
                  <h2>Bitch!!!!!!</h2>
                  </div>}
              </div>
            )}

            {
            pleaseCount<5?
            step === 2 &&  (
              
            <div>
              <p style={{ color: "#333" }}>
                Welcome to another chapter of greatness
              </p> 
            </div>
            )
            :  step === 2 &&  (<div>
            <p style={{ color: "#333" }}>
              You are Mean
            </p> 
            <button
                      onClick={() =>  window.location.reload(false)}
                      style={{ marginTop: "20px", }}
                      
                    >
                     Once More
                    </button>
          </div>
            )
          }
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}
