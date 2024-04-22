"use client";

import { Table } from "flowbite-react";

type Inputs = {
  company: string;
  center: string;
  employees: string;
  workingEmployees: { employee: string }[];
  typeOfCages: string;
  loberoThread: string;
  date: string;
  rope: string;
  gasoline: number;
  oil: number;
  others: string;
  startTime: string;
  endTime: string;
  inCharges: string;
  workTypes: string;
  registrationNumber: string;
  ships: string;
  workDetail: string;
  observations: string;
  materials: string;
  usedMaterials: { material: string; detail: string }[];
};
type ListReportsProps = {
    objetos: Inputs[];  // Assuming `Inputs` is the type for the objects
    eliminarObjeto: (indexToRemove: number) => void;
  };
  

function ListReports({ objetos, eliminarObjeto }: ListReportsProps) {
    console.log('ListReports Props', { objetos, eliminarObjeto });

function handleDelete(index: number) {
    console.log(index);
    confirm(`¿Está seguro de eliminar el reporte ${index +1}?`);
    eliminarObjeto(index);
    }

  return (
    <div className="relative min-h-screen bg-no-repeat bg-cover bg-fixed bg-center">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/sotex/grafica-07.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        zIndex: -1,
      }}
    ></div>
    <div
      className="absolute inset-0 bg-slate-300 bg-opacity-15  backdrop-blur-sm"
      style={{ zIndex: -1 }}
    ></div>
    <div className="overflow-x-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-2xl lg:text-4xl xl:text-5xl pt-20 ">
        Listado de Faenas Realizadas{" "}
      </h2>
      <Table 
        className="w-3/4 max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-2 mt-10">

        <Table.Head>
          <Table.HeadCell>Nº</Table.HeadCell>
          <Table.HeadCell>Fecha</Table.HeadCell>
          <Table.HeadCell>Empresa</Table.HeadCell>
          <Table.HeadCell>Centro</Table.HeadCell>
          <Table.HeadCell>Hora Inicio</Table.HeadCell>
          <Table.HeadCell>Hora Termino</Table.HeadCell>
          <Table.HeadCell>Embarcación</Table.HeadCell>
          <Table.HeadCell>Trabajos</Table.HeadCell>
          <Table.HeadCell>Eliminar</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {objetos.map((objeto :any, index :any) => {
            return (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{objeto.date}</Table.Cell>
                <Table.Cell>{objeto.company}</Table.Cell>
                <Table.Cell>{objeto.center}</Table.Cell>
                <Table.Cell>{objeto.startTime}</Table.Cell>
                <Table.Cell>{objeto.endTime}</Table.Cell>
                <Table.Cell>{objeto.ships}</Table.Cell>
                <Table.Cell>{objeto.workTypes}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => handleDelete(index)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Eliminar
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  </div>
  );
}

export default ListReports;
