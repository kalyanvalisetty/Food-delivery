
let shimmerArray = [{},{},{},{},{},{},{},{}];

export const Shimmer = () => {
    return (
        shimmerArray.map((item,index) => {
          return (
            <div key={index} className="flex flex-col w-56 m-4 cursor-pointer hover:scale-[0.9] transition-all 500ms">
              <div className="w-full h-36 mb-2 rounded-lg bg-slate-200"></div>
              <div className="w-[75%] h-2 mb-2 rounded-lg bg-slate-200"></div>
              <div className="w-[50%] h-2 mb-2 rounded-lg bg-slate-200"></div>
            </div>
          );
        })
    );
  };

export const ShimmerMenu = () => {
    return (
      shimmerArray.map((item,index) => 
      (<div key={index} className="w-8/12 bg-slate-50 h-36 mx-auto my-7 flex justify-between items-center gap-4 p-5">
        <div className="w-8/12 bg-slate-100 h-20"></div>
        <div className="w-4/12 bg-slate-100 h-20"></div>
      </div>))
      )
  }
