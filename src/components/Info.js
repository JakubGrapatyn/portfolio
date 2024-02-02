import React from 'react'
import zdjecie from '../programowanie.jpg'

function Info() {
  return (
    <div>
    <div className='infomacje'>
        
        <h2> Dzień dobry </h2>
       <div className='zdjecie'>
<img src={zdjecie}  alt="programowanie"/>
</div>
 
       <p> Jetem młodym programistą uczącym się na studiach programowania i nieustannie zgłębiającym tajniki tej fascynującej dziedziny.
             Choć nie każdy kod, który tworzę, osiąga mistrzostwo, to staram się nieustannie doskonalić moje umiejętności i zdobywać nowe doświadczenia.
             Studia programistyczne to dla mnie nie tylko okazja do zdobycia wiedzy teoretycznej, ale także poligon do praktycznego sprawdzania swoich pomysłów.<br></br><br></br>
 W miarę jak zgłębiam techniki programowania, eksperymentuję z różnymi językami i frameworkami, zawsze z myślą o rozwijaniu mojego warsztatu.
 <br></br>
Nie zawsze każdy projekt, nad którym pracuję, osiąga zamierzony sukces, ale każda nietrafiona próba to dla mnie nowa lekcja.
 Stawiam sobie ambitne cele i cieszę się każdym postępem, nawet jeśli czasami zaczynam od podstaw.<br></br><br></br>

Jeśli masz jakieś pytania, pomysły na współpracę czy po prostu chcesz podzielić się swoimi doświadczeniami, jestem otwarty na wszelkie formy dyskusji.<br></br><br></br>
</p>


</div>
<div className='kontakt' > <b>W zakładce kontakt możesz do mnie napisać.</b> </div>
</div>
  )
}

export default Info