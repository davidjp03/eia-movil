import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/dashboard/Icon";

const BusRouterSelector = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto w-[min(90%,600px)] flex items-center justify-between bg-white shadow-lg px-8 py-3 rounded-full">
      <Icon />
      <Button>Selecciona tu ruta</Button>
    </header>
  );
};

export default BusRouterSelector;
