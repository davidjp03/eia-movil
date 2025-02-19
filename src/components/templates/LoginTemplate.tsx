import LoginForm from "../organisms/LoginForm";
import Image from "next/image";
function LoginTemplate() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Ingresa con tu correo institucional
            </h2>
          </div>
          <div>
            <Image
              src="/logoLogin.png"
              alt="logo"
              width={150}
              height={50}
              className="mx-auto"
              priority
            />
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }
  export default LoginTemplate;