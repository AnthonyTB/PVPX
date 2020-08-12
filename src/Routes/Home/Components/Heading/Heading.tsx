import React, { useEffect, useReducer, useCallback } from 'react';
import './Heading.css';

interface HeadingProp {
  Icon: string;
  Heading: string;
  HeadingValue: number;
  HeadingLabel: string;
  Buttons?: linkButton[];
}

interface linkButton {
  Label: string;
  Link: string;
}

interface Reducer {
  type: string;
  payload: any;
}

const Heading: React.FC<any> = (props: HeadingProp) => {
  const Reducer = (prevState: any, { type, payload }: Reducer) => {
    switch (type) {
      case 'headingValueCount':
        return {
          ...prevState,
          headingValueCount: payload.headingValueCount,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    headingValueCount: 0,
  });

  const dataSetter = (section: string, data: number) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  const incrementVals = useCallback(
    (source: string, sourceVal: number, maxVal: number): any => {
      const interval = setInterval(() => {
        if (maxVal > 999999 && sourceVal < maxVal) {
          sourceVal += 631;
          dataSetter(source, sourceVal);
        } else if (maxVal > 99999 && sourceVal < maxVal) {
          sourceVal += 81;
          dataSetter(source, sourceVal);
        } else if (maxVal > 50000 && sourceVal < maxVal) {
          sourceVal += 41;
          dataSetter(source, sourceVal);
        } else if (maxVal > 9999 && sourceVal < maxVal) {
          sourceVal += 13;
          dataSetter(source, sourceVal);
        } else if (sourceVal < maxVal) {
          sourceVal += 3;
          dataSetter(source, sourceVal);
        } else {
          clearInterval(interval);
          return sourceVal;
        }
      }, 1);
    },
    []
  );

  useEffect(() => {
    if (state.headingValueCount === 0) {
      incrementVals(
        'headingValueCount',
        state.headingValueCount,
        props.HeadingValue
      );
    }
  }, [incrementVals, state.headingValueCount]);

  const insert = (arr: any, index: number, newItem: any) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
  ];

  const formatCount = (val: number) => {
    if (val.toString().length === 5) {
      let arr = val.toString().split('');
      return insert(arr, 2, '.').slice(0, 4).join('') + 'K';
    } else if (val.toString().length === 6) {
      let arr = val.toString().split('');
      return insert(arr, 3, '.').slice(0, 5).join('') + 'K';
    } else if (val.toString().length === 7) {
      let arr = val.toString().split('');
      return insert(arr, 1, '.').slice(0, 3).join('') + 'M';
    } else if (val.toString().length <= 4) {
      return val.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,');
    }
  };

  // const renderButtons = () => {
  //   return (
  //     <>
  //       {props.Buttons?.map((button: linkButton) => (
  //         <a href={button.Link} target='blank_'>
  //           {button.Label}
  //         </a>
  //       ))}
  //     </>
  //   );
  // };

  return (
    <>
      <div className='Heading'>
        <div className='left'>
          <i className={`fab ${props.Icon}`}></i>
          <span className='count'>{formatCount(state.headingValueCount)}</span>
        </div>
        <hr />
        <div className='right'>
          <h4>{props.Heading}</h4>
          {/* {props.Buttons ? renderButtons() : ''} */}
        </div>
      </div>
    </>
  );
};

export default Heading;
