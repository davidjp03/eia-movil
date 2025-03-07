const Background: React.FC = () => {
    return (
      <div className="fixed inset-0 w-full h-full min-h-screen blur-[100px] -z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
          <div className="absolute inset-0 w-full h-full bg-[conic-gradient(from_0deg,_#e6f2fc,_#b3ddf5,_#8bbfe6,_#639dce,_#8bbfe6,_#b3ddf5)] animate-spinBlob"></div>
        </div>
      </div>
    );
  };
  
  export default Background;