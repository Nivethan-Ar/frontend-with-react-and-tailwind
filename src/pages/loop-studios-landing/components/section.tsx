import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  sectionStyles?:string
}

function Section(props: Props) {
  const { children, sectionStyles } = props;
  return (
    <div className={`px-6 ${sectionStyles}`}>
      {children}
    </div>
  );
}

export default Section;
