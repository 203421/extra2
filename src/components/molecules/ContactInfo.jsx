import React from 'react';
import Title from '../atoms/Tittle';
import Label from '../atoms/Label';
import Image from '../atoms/Image';

const ContactInfo = ({ name, email, phone }) => {
  return (
    <div>
      <Title>Contact Information</Title>
      <div className='contact-user'>
        <Image src="/src/assets/user.png" alt="avatar" className={'img-user'}/>
        <Label className={'contact-label'}>Name: {name}</Label>
      </div>
      <div className='contact-user'>
        <Image src="/src/assets/email.png" alt="avatar" className={'img-user'}/>
        <Label className={'contact-label'}>Email: {email}</Label>
      </div>
      <div className='contact-user'>
        <Image src="/src/assets/phone.png" alt="avatar" className={'img-user'}/>
        <Label className={'contact-label'}>Phone: {phone}</Label>
      </div>
    </div>
  );
};

export default ContactInfo;
