import React, { FunctionComponent } from "react";
import DotLoader from "react-spinners/DotLoader";
import { Animated } from "react-animated-css";

interface IProps {
  size: number;
  css?: any;
  color: string;
}

const Loader: FunctionComponent<IProps> = (props) => {
  return (
    <>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDelay={0}
        animationOutDelay={800}
        isVisible={true}
      >
        <div className="Loader">
          <DotLoader
            css={props.css}
            size={props.size}
            loading={true}
            color={props.color}
          />
        </div>
      </Animated>
    </>
  );
};

export default Loader;
