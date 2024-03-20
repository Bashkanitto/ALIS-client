import CustomBreadcrumbs from './Breadcrumbs/Breadcrumbs';
import Tables from './Table/Tables';
import SettingsModal from './SettingsModal/SettingsModal';
import { useState } from 'react';

export function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col gap-8 p-[50px] m-[0, auto] max-w-[1200px]">
      <CustomBreadcrumbs />
      <Tables openModal={openModal} />
      <SettingsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
