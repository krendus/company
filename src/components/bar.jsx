import React, { useEffect, useState } from 'react'

const Bar = ({value, max}) => {
  const [color, setColor] = useState("");
  const [heightPercentage, setHeightPercentage] = useState(0);
  useEffect(() => {
    const hp = (value/max)*100;
    setHeightPercentage(hp)
      if (hp > 75) {
        setColor("#6D23FF")
      } else if ((hp >= 50 ) && (hp < 75)) {
        setColor("#935CFF")
      } else if ((hp >= 25) && (hp < 50)) {
        setColor("#B996FF")
      } else {
        setColor("#E8DCFF")
      }
  }, [max, value])
  
  return (
    <div className={`w-[calc((100%-30px)/7)] rounded-lg text-xs pt-1 text-white text-center`} style={{ background: color, height: heightPercentage + "%" }}><span>{value}</span></div>
  )
}

export default Bar