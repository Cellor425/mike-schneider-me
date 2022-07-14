import React, { FC, PropsWithChildren, ReactNode } from "react";
import CardWithImage from "../organisms/cardWithImg";

type Props = {
    title: string,
    imgsrc: string,
    link?: string,
    content?: string,
    children: ReactNode
}

const Modal: FC<PropsWithChildren<Props>> = ({title, imgsrc, link, content, children}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="mx-5 my-5 rounded-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        <CardWithImage title={title} imgsrc={imgsrc}>
          {content}
        </CardWithImage>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/** content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-rai-md-grey outline-none focus:outline-none">
                {/** header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-rai-white rounded-t">
                  <h3 className="text-3xl text-rai-white font-semibold">
                    {title}
                  </h3>
                  <a href={link} target='_blank'>
                    <span className="material-symbols-outlined px-5 scale-150 text-rai-blue cursor-pointer">link</span>
                  </a>
                </div>
                {/** body */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-rai-white text-lg leading-relaxed">
                    {children}
                  </p>
                </div>
                {/** footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-rai-white rounded-b">
                  <button
                    className="text-rai-blue background-transparent font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-rai-black "></div>
        </>
      ) : null}
    </>
  );
}

export default Modal