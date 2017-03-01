import * as React from 'react';

import Box from 'components/blocks/box';
import ContactDetail from 'models/contact-detail';
const details = require('../../data/contact.json') as ContactDetail[];

const Link = ({ to, children }: { to?: string; children?: any; }) => {
    if (to && to.trim()) {
        return <a href={to} target="_blank">{children}</a>;
    }
    
    return <span>{children}</span>;
};

const ContactItem = ({ icon, text, link }: ContactDetail) => (
    <div className="contact-item">
        <div className="icon pull-left text-center">
            <span className={['fa fa-fw', icon].join(' ')}></span>
        </div>
        <div className="title only pull-right"><Link to={link}>{text}</Link></div>
    </div>
);

const Contact = () => (
    <Box className="clearfix">
        <h2>Contact</h2>
        {details.map((d, idx) => <ContactItem key={`contact_detail_${idx}`} {...d} />)}
    </Box>
);

export default Contact;