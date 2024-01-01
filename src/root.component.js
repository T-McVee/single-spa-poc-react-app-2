import { useState } from 'react';

import { bind } from "@react-rxjs/core";

import { publicApiFunction } from '../../common/src/test-poc-common';

const { stateSubject } = publicApiFunction();
const [useStateSubject] = bind(stateSubject, false);

export default function Root(props) {

const { toggleState } = publicApiFunction();
const editMode = useStateSubject();

  return <section>
    <h2>This is react app 2!</h2>
    {!editMode && <p>hey</p>}

    <button onClick={toggleState}>click me</button>
  </section>;
}
