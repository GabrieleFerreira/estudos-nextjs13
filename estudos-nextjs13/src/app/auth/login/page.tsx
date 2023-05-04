import { SigInput } from "./components/SigInput";

export default function Login() {
  return (
    <>
      <section className=" dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full p-2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="space-y-4 md:space-y-6">
                <SigInput
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="com@com.com"
                />
                <SigInput
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="••••••••"
                />

                <div className="flex  justify-center ">
                  <button className="text-sm font-medium mt-8 sm:p-2 text-blue-600 hover:underline dark:text-blue-500 bg-red-400 flex-grow rounded-md">
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
