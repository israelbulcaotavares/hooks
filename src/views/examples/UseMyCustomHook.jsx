import React, { useEffect, useState,useRef } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const useMyCustomHook = (props) => {

  const [number, setNumer] = useState(1);
  const [name, setName] = useState('');
  const [status, setSTatus] = useState('ATIVO');
  

  const [value1, setValue1] = useState("");


  useEffect(function() {
    setSTatus(number  === 10 ? 'CORRETO' : "INCORRETO"  )
  },[number])


  return (
    <div className="UseCustom">
      <PageTitle title="MyHook" subtitle="Meu Hook" />

      <SectionTitle title="Use State" />
      
      <div className="center">
      <span className="text">{number}</span>
        <div>
          <button onClick={ () => setNumer(number - 1) } className="btn"> -1</button>
          <button onClick={ () => setNumer(number + 1) } className="btn">+1</button>
        </div>
        <input value={name} onChange={e => setName(e.target.value)} type="text" className="input" />
      </div>

      <SectionTitle title="Use Effects" />
      <span className="text">{status}</span>
      <div style={{marginTop:50}} ></div>


      <SectionTitle title="Use Ref" />
      <span className="text"></span>
      <input type="text" className="input"  value={value1} onChange={e => setValue1(e.target.value)}/>


    </div>
  );
};

export default useMyCustomHook;
