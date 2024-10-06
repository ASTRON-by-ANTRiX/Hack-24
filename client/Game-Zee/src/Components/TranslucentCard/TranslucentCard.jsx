import React from 'react'

function TranslucentCard({children}) {
  return (
    <div>
        <div className="Rectangle25 w-auto h-auto m-5 p-7 bg-[#17506e]/60 rounded-lg border-2 border-[#17506e] text-white font-heavitas text-3xl">
            {children}
        </div>
    </div>
  )
}

export default TranslucentCard