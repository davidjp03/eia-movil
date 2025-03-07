import Background from "../atoms/Background";
import LoginForm from "../organisms/LoginForm";
import Image from "next/image";

function LoginTemplate() {
  return (
    <div className="min-h-screen flex items-center justify-center relative py-12 px-4 sm:px-6 lg:px-8">
      <Background />
      <div className="max-w-md w-full space-y-8 transform -translate-y-10">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            EIA Móvil
          </h2>
        </div>
        <div>
          <Image
            src="/logo-U.png"
            alt="logo"
            width={50}
            height={20}
            className="mx-auto"
            priority
          />
        </div>
        <div>
          <p className="text-center text-sm text-gray-600">
            Ingresa con tu correo institucional o identificación y disfruta de tu movilidad universitaria.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginTemplate;
