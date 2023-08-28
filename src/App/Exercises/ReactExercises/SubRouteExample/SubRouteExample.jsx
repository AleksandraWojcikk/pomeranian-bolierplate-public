import React from 'react';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';

import './style.css';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';

export function SubRouteExample() {
  return (
    <div>
      <SeeOrNot />
      <hr />
      <MoreOrLess />
    </div>
  );
}
