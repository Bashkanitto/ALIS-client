import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-white p-10 rounded-lg shadow-lg w-[600px] relative z-10">
        <div className="absolute top-2 end-2">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="field1"
              className="block text-sm font-medium text-gray-700"
            >
              Имя компании
            </label>
            <input
              type="text"
              placeholder="Напишите название"
              id="field1"
              name="field1"
              value={formData.field1}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="field2"
              className="block text-sm font-medium text-gray-700"
            >
              БИН компании
            </label>
            <input
              type="text"
              placeholder="Напишите БИН"
              id="field2"
              name="field2"
              value={formData.field2}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="field3"
              className="block text-sm font-medium text-gray-700"
            >
              Реквизиты компании
            </label>
            <input
              type="text"
              placeholder="Напишите реквизиты"
              id="field3"
              name="field3"
              value={formData.field3}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:opacity-[0.4]"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
