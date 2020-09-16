import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <IdCard
        img="https://randomuser.me/api/portraits/men/20.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        birth="1992-07-14"
        height="178"
      />
      <IdCard
        img="https://randomuser.me/api/portraits/women/59.jpg"
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        birth="1988-05-11"
        height="172"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={80} max={100} />
      <BoxColor
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <break></break>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      />
      <break></break>
      <LikeButton></LikeButton>
      <LikeButton></LikeButton>
      <break></break>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

function IdCard(props) {
  return (
    <div>
      <p>
        <img src={props.img} alt="Profile Pic" />
      </p>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Birth: {props.birth}</p>
      <p>Height: {props.height}</p>
    </div>
  );
}
function Greetings(props) {
  if (props.lang === 'de') {
    return <div className="greeting">Hallo {props.children}</div>;
  } else if (props.lang === 'fr') {
    return <div className="greeting">Bonjour {props.children}</div>;
  }
}

function Random(props) {
  return (
    <div className="randomNums">
      <h3>
        Random value between {props.min} and {props.max} is{' '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </h3>
    </div>
  );
}

function BoxColor({ r, g, b }) {
  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <h3>
        RGB:({r},{g},{b})
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
      </h3>
    </div>
  );
}

function CreditCard(props) {
  return (
    <div className="CC">
      <p>Type: {props.type}</p>
      <p>Number: {props.number}</p>
      <p>
        Expires on: {props.expMonth}, {props.expYear}
      </p>
      <p>Bank: {props.bank}</p>
      <p>Owner: {props.owner}</p>
      <p>BGColour: {props.bgColor}</p>
      <p>Colour: {props.color}</p>
    </div>
  );
}

function Rating(props) {
  let result = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(Number(props.children))) {
      result += '★';
    } else {
      result += '☆';
    }
  }
  return <p>{result}</p>;
}

function DriverCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.img}></img>
      <p>
        <Rating>{props.rating}</Rating>
      </p>
      <p>
        {props.car?.model}-{props.car?.licensePlate}
      </p>
    </div>
  );
}

function ClickablePicture(props) {
  const [pic, setPic] = useState(true);

  return (
    <div>
      <img
        src={pic ? props.img : props.imgClicked}
        onClick={() => setPic(!pic)}
      ></img>
    </div>
  );
}

function LikeButton() {
  let [count, setCount] = useState(0);
  let color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let random = Math.floor(Math.random() * color.length);

  function counter() {
    setCount(count + 1);
  }
  return (
    <>
      <button style={{ backgroundColor: `${color[random]}` }} onClick={counter}>
        {count} likes
      </button>
    </>
  );
}
export default App;

// ★
// ☆
