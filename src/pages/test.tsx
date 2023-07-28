import axios from "axios";
// import { log } from "console";

const Test = () => {
  const getData = async () => {
    const signupResponse = await axios.post("/api/signup", {
      ktpId: "10987654314",
      username: "udin cokasdsdfs",
      loginPassword: "12345678",
      phoneNumber: "087835771671",
      birthDate: "06111992",
      gender: 1,
      email: "udincok1dsf2312.test@gmail.com",
    });
    const data = signupResponse.data;

    console.log(data);

    const loginResponse = await axios.post("/api/login", {
      username: "asep test",
      loginPassword: "123456789",
    });

    console.log(loginResponse.data);
  };
  return (
    <div>
      Test ngab kwokwowk
      <button onClick={() => getData()}>Ambil data euy</button>
    </div>
  );
};

export default Test;
