export default function Form(props) {
  const credentials = {
    email: "cagnopespi@joyit.com",
    password: "MX5mQCUbSHZ47JsA6X%a9X",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //obtner los valores de los inputs
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === credentials.email && password === credentials.password) {
      //setear en el local storage variable islogged
      localStorage.setItem("isLogged", "true");
      window.location.href = "/recruitment/dashboard";
      alert("You are logged in");
    } else {
      localStorage.setItem("isLogged", "false");
      alert("Incorrect email or password");
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://joyit.pe/wp-content/uploads/2023/08/agil-noticia-2048x1154.webp)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">JoyIt</h1>
          <p className="text-3xl my-4">
            I'ts time for changes People and technology with a purpose to
            improve the world.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-black/90">
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-center flex justify-center items-center gap-2">
            <img
              src="https://joyit.pe/wp-content/uploads/2023/03/isotipo1.png"
              alt=""
              className="rounded-full h-14 w-14"
            />
            <span className="text-3xl font-bold">JoyIt</span>
          </h1>

          <form
            action=""
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded-sm bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="px-4 pb-2 pt-4">
              <button
                className="uppercase block w-full p-4 text-lg rounded-full bg-blue-700 hover:bg-blue-600 focus:outline-none"
                type="submit"
              >
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
