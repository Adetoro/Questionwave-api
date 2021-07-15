import React from 'react';
import { useHistory } from "react-router-dom";

const ErrorComponent = () => {
  let history = useHistory();

  function loadHome(){
    window.location = 'https://www.questionwave.com/'; 
  }

  return (
    <div id="container" className="md:w-6/12 mx-auto mt-10 px-10 py-28">
                <div className="text-4xl font-semibold text-center">
                     Oops!
                </div>
                <div className="pt-3 text-base font-normal text-center">
                     You have wondered too far.
                </div>
                
                    <div className="sm:w-6/12  mx-auto">
                    <button className="  mt-6 blue_button text-lg font-bold 
                                        focus:outline-none focus:ring focus:-mid_blue"
                            onClick={loadHome}>
                        Go Home
                    </button>
                    </div>
                    
                
               
            </div>
  )
};

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" }
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    //console.log(error, info);
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;