import { User } from "@/types/user";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  user: User;
};

const Sidebar = ({ isOpen, onClose, user }: SidebarProps) => {
  return (
    <>
      {/* Fondo oscuro para cerrar el sidebar al hacer clic fuera */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar con animación */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px] bg-white shadow-xl p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={onClose}>
          <IoClose size={24} />
        </button>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <p className="text-gray-600">{user.name}</p>
          <p className="text-gray-500">{user.idCard}</p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500">Saldo</p>
          <p className="text-xl font-semibold">${user.balance.toFixed(2)}</p>
        </div>

        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
          Recargar
        </button>

        <div className="absolute bottom-6 left-6 flex items-center gap-2 text-gray-600 cursor-pointer">
          <FiLogOut size={20} />
          <span>Log out</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
