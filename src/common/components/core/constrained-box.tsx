import type { CoreComponentsProps } from "@/common/types";

const ConstrainedBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;

  return (
    <div
      className={`relative flex flex-col justify-center items-center w-full constrained-width p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out drop_in ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ConstrainedBox;
