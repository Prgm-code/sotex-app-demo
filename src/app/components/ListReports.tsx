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
    <div className="overflow-x-auto">
      <h2 className="text-3xl font-bold text-center p-10">
        Listado de Faenas Realizadas{" "}
      </h2>
      <Table>
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
  );
}

export default ListReports;
