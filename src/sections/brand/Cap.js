import React from 'react';
import Image from "next/image";

const Cap = () => {
  return (
    <div className='space-between'>
      <div>
        описание<br/><br/>

        <span className='text-gray'>печать</span><br/>
        сублимация<br/>
        флекс<br/>
        шелкография<br/>
      </div>
      <Image src='/img66.png' width={557} height={600}/>
      <div />
    </div>
  );
};

export default Cap;