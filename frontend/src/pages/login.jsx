import iconeGoogle from "../assets/iconegoogle.svg";

function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Logo no topo à esquerda */}
      <h1 className="absolute top-6 left-6 font-[Manrope] font-medium text-4xl">
        VitaCare
      </h1>

      {/* Card de login */}
      <div className="bg-fundaBranco p-12 rounded-[15px] shadow-custom grid gap-6 w-full max-w-[550px] mt-10">

        <h1 className="text-center text-3xl font-semibold font-[Inter]">
          Bem Vindo de Volta
        </h1>
        <h1 className="text-center text-2xl font-medium font-[Inter]">
          LOGIN
        </h1>
        <form className="grid gap-5 focus:outline-none focus:ring-0">
          <input
            type="email"
            placeholder="Email"
            className="bg-white p-2 rounded-[10px]"
            name="email"
            id="email"
          />
          <input
            type="password"
            placeholder="Senha"
            className="bg-white p-2 rounded-[10px] focus:outline-none focus:ring-0"
            name="password"
            id="password"
          />
          <button
            type="button"
            className=" cursor-pointer font-[Inter] flex justify-end text-link decoration-link underline "
          >
            Esqueci a Senha
          </button>
          <button
            type="submit"
            className=" cursor-pointer font-[Inter] bg-botaoAzul flex justify-center text-white rounded-[15px] p-2 border-0 "
          >
            Entrar
          </button>
          <button
            type="button"
            className=" cursor-pointer font-[Inter] bg-white flex justify-center text-[1F2937] rounded-[15px] p-2 border-0"
          >
            Criar Conta
          </button>
          <button
            type="button"
            className=" cursor-pointer font-[Inter] bg-white flex items-center justify-center text-[1F2937] rounded-[15px] p-2 border-0"
          >
            <img src={iconeGoogle} className="w-6 mr-2" alt="Google icon" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
