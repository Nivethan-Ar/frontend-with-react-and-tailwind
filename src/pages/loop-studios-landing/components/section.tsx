import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

function Section(props: Props) {
  const { children } = props;
  return (
    <div className="px-6">
      {children}
    </div>
  );
}

export default Section;
