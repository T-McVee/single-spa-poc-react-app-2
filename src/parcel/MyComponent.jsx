import { bind } from "@react-rxjs/core";
import { showParcel, counter } from '../../../common/src/test-poc-common';

export default function MyComponent() {
  const { isParcelMountedSubject, toggleIsMounted, getCurrentState } = showParcel();
  const { increment, decrement} = counter();

  // subscribe to subject
  const [useIsParcelMounted$] = bind(isParcelMountedSubject, getCurrentState());
  
  // get stream of current isParcelMounted value
  const isParcelMounted = useIsParcelMounted$();

  return (
    <div style={{border: '1px solid blue', padding: '2rem'}}>
      <div>This is a parcel from React app 2.</div>
      <p>Mounted: {isParcelMounted ? 'true' : 'false'}</p>
      <button onClick={toggleIsMounted}>Unmount</button>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
