import React from 'react';
import ContactInfo from '../molecules/ContactInfo';


const ProfileSection = ({ name, email, phone, imageSrc, imageAlt }) => {
  return (
    <section>

      <ContactInfo name={name} email={email} phone={phone} />
    </section>
  );
};

export default ProfileSection;
