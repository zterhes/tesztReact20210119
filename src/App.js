
import { useEffect, useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [flag, setFlag] = useState("")

  useEffect(() => {
    const tempBmi = parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100))
    setBmi(tempBmi)
    if (tempBmi < 18.5) {
      setFlag("sovany")
    } else if (tempBmi <= 25) {
      setFlag("normal")
    } else if (tempBmi > 25) {
      setFlag("tulsuly")
    }
  }, [weight, height])

  return (
    <div className="container">
      <div className="row">
        <h5>Testtömeg(kg)</h5>
        <input
          type="number"
          className="text-input"
          onChange={e => setWeight(e.target.value)}
        />
      </div>
      <div className="row">
        <h5>Testmagasság(cm)</h5>
        <input
          type="number"
          onChange={e => setHeight(e.target.value)}
        />
      </div>
      <div className="row">
        {bmi ? (
          <h1 className="text-center" >{bmi}</h1>
        ) : (
            <h1 className="text-center">Adjon meg adatot</h1>
          )}
        {flag === "sovany" ? (
          <h4 className="text-warning text-center">Sovány</h4>
        ) : (
            flag === "normal" ? (
              <h4 className="text-success text-center">Normál</h4>
            ) : (
                flag === "tulsuly" ? (
                  <h4 className="text-danger text-center">Túlsúlyos</h4>
                ) : (
                    <h4></h4>
                  )
              )
          )}
      </div>
    </div>
  );
}

export default App;
