import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line no-confusing-arrow
const Modal = ({isShowing, hide, title, ...props}) =>
    isShowing
        ? ReactDOM.createPortal(
              <>
                  <div className={"modal-overlay"}>
                      <div className={"modal-wrapper"}>
                          <div className={"modal"}>
                              <div className={"modal-header"}>
                                  <h4 className={"panel-SignIn"}>{title}</h4>
                                  <button
                                      /* eslint-disable-next-line react/button-has-type */
                                      type={"button"}
                                      className={"modal-close-button"}
                                      onClick={hide}>
                                      {/* eslint-disable-next-line react/jsx-max-depth */}
                                      <span>{"x"}</span>
                                  </button>
                              </div>
                              <div className={"modal-body"}>
                                  {props.children}
                              </div>
                          </div>
                      </div>
                  </div>
              </>,
              document.body,
          )
        : null;

Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Modal;
