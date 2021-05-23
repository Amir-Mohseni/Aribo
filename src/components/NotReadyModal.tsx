import React, { useRef } from "react";

interface ModalProps {
	hideArriboModal: Function ;
}

export default function NotReadyModal({ hideArriboModal }: ModalProps ): JSX.Element {

	const modalWrapper = useRef(null)

	const checkWrapperClick = ( e: any ): void => {

		if( e.target === modalWrapper.current ){
			hideArriboModal()
		}

	}

  return (
    <div className="not-ready-wrapper" onClick={ checkWrapperClick } ref={modalWrapper} >
      <div className="not-ready-modal">

        <h1>Comming Soon!</h1>

        <p>
          Arribo app is not yet ready to be launched. We are in the post
          development process and Arribo will soon be launched to public. We
          thank you for your patience.
        </p>

				<button className="got-it bg" onClick={ () =>  hideArriboModal() } >Got it</button>

      </div>
    </div>
  );
}
