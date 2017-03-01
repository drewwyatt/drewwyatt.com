import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const Box = ({ children, className, ...props }: Props) => 
    <div className={['box', className].join(' ')} {...props}>{children}</div>;

export default Box;