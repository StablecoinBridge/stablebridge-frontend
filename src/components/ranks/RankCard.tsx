const RankCard = () => {
    return (
      <div className="p-6 relative">
        <div className="absolute right-0 top-0 -mt-10 -mr-10">
          <div className="relative">
            <div className="w-32 h-32 bg-violet-200/50 rounded-full"></div>
            <div className="w-28 h-28 bg-violet-300/50 rounded-full absolute top-2 left-2"></div>
            <div className="w-24 h-24 bg-violet-500 rounded-full absolute top-4 left-4 flex items-center justify-center text-white">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-12 h-12 text-white"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="white" 
                  stroke="white" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-2 mt-2">
          <div className="w-10 h-10 rounded-full bg-violet-200 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 text-violet-700"
            >
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="currentColor" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-xl font-medium text-violet-800 ml-3">Your rank</h2>
        </div>
        
        <p className="text-violet-700 mb-6 mt-4 max-w-[50%] font-medium text-sm">
          Connect your wallet to see your ranking in the leaderboard
        </p>
        
        <button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full py-2 w-[250px] font-medium flex items-center justify-center gap-2">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 text-white"
          >
            <path 
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Sign in
        </button>
      </div>
    );
  };
  
  export default RankCard;
  