import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo, faTree } from '@fortawesome/free-solid-svg-icons' // 여러 개 중에 한 개 가져오기 => { faHippo }


// 폰트어썸 아이콘 사용
const Styled05 = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faHippo} />
      <FontAwesomeIcon icon={faTree} />
      {/* <FontAwesomeIcon icon={faTree} spin /> */}
    </div>
  );
};

export default Styled05;