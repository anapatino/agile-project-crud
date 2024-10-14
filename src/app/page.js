"use client";
import { useState } from "react";
import {
  CubeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const data = [
    {
      id: 1,
      name: "Darlene Robertson",
      position: "Diseñadora Gráfica",
      department: "Equipo de Ventas",
      email: "alma.lawson@example.com",
      phone: "(252) 555-0126",
      status: "Completo",
      teamMates: ["Ronald Richards", "Floyd Miles", "Savannah Nguyen"],
      birthday: "02/12/1998",
      hrYear: "4 Años",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
    {
      id: 2,
      name: "Annette Black",
      position: "Desarrolladora Joomla",
      department: "Finanzas",
      email: "bill.sanders@example.com",
      phone: "(252) 555-0126",
      status: "Parcial",
      teamMates: [],
      birthday: "05/04/1990",
      hrYear: "2 Años",
      address: "2410 Parker Rd. Allentown, New Mexico 31134",
    },
  ];

  // Filter users by name
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex h-screen bg-principal'>
      {/* Sidebar */}
      <div className='bg-white p-4 w-12 border-r text-gray-text flex flex-col items-center overflow-hidden shadow-md'>
        <div className='font-bold h-6'>
          <CubeIcon className='h-6 w-6 text-blue-800' />
        </div>
        <div className='flex flex-col h-full justify-center items-center'>
          <button>
            <HomeIcon className='h-6 w-6 text-primary' />
          </button>
        </div>
      </div>
      {/* Main content */}
      <div className='flex-1 p-8'>
        <div className='flex justify-between items-center mb-6 bg-white rounded-lg px-4 py-2 text-gray-text '>
          <div>
            <h1 className='text-lg font-semibold'>Lista de Equipos</h1>
            <div className='w-full flex justify-start items-center gap-2 py-1 text-[13px]'>
              <label>Lista Administrador</label>
              <span>&gt;</span>
              <label className='text-primary font-medium'>
                Lista de Equipos
              </label>
            </div>
          </div>
        </div>

        {/* Search and Selection */}
        <div className='flex justify-between mb-4'>
          <div className='flex items-center'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Buscar'
                className='border border-gray-300 p-2 pl-10 rounded-lg w-[300px] bg-white text-[13px] text-gray-text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-icon' />
            </div>
            <p className='ml-4 text-gray-700 text-[13px]'>
              {selected.length} Seleccionado
            </p>
          </div>
          <button className='bg-blue-500 text-white py-2 px-4 rounded-lg flex gap-2 font-semibold transform transition-transform duration-300 hover:scale-105'>
            <UserPlusIcon className='h-6 w-6 text-white' />
            Agregar Usuario
          </button>
        </div>

        {/* Table */}
        <table className='min-w-full bg-white rounded-xl shadow-md text-gray-text'>
          <thead>
            <tr>
              <th className='border-b p-4 text-left '></th>
              <th className='border-b p-4 text-left font-semibold'>Nombre</th>
              <th className='border-b p-4 text-left font-semibold'>Posición</th>
              <th className='border-b p-4 text-left font-semibold'>
                Departamento
              </th>
              <th className='border-b p-4 text-left font-semibold'>
                Correo Electrónico
              </th>
              <th className='border-b p-4 text-left font-semibold'>Teléfono</th>
              <th className='border-b p-4 text-left font-semibold'>Estado</th>
              <th className='border-b p-4 text-left'></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr
                key={user.id}
                className={`hover:bg-gray-100  hover:text-black transition-all duration-300 ${
                  selected.includes(user.id) ? "" : ""
                }`}
              >
                <td className='border-b p-4 text-[13px]'>
                  <input
                    type='checkbox'
                    checked={selected.includes(user.id)}
                    onChange={() => toggleSelect(user.id)}
                  />
                </td>
                <td className='border-b p-4 text-[13px]'>{user.name}</td>
                <td className='border-b p-4 text-[13px]'>{user.position}</td>
                <td className='border-b p-4 text-[13px]'>{user.department}</td>
                <td className='border-b p-4 text-[13px]'>{user.email}</td>
                <td className='border-b p-4 text-[13px]'>{user.phone}</td>
                <td className='border-b p-4 text-[13px]'>
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      user.status === "Completo"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className='border-b p-4 flex space-x-4'>
                  <button className='text-gray-icon hover:text-primary transform transition-transform duration-300 hover:scale-110'>
                    <PencilSquareIcon className='h-6 w-6' />
                  </button>
                  <button className='text-red-500 hover:text-red-700 transform transition-transform duration-300 hover:scale-110'>
                    <TrashIcon className='h-6 w-6' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
