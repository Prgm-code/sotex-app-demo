"use client";

import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Select,
  Tabs,
  TextInput,
  Textarea,
} from "flowbite-react";
import { formSchema, mappedFormOptions } from "../validations/formSchema";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

const defaultValues = {
  empresa: "",
  centro: "",
  tipojaula: "",
  fecha: "",
  hilo: "",
  bencina: "",
  petroleo: "",
  otros: "",
  horainicio: "",
  horaTermino: "",
  encargado: "",
  trabajos: "",
  matricula: "",
  nombrenave: "",
  nombre: "",
  trabajosRealizados: "",
  observaciones: "",
};
interface OptionElements {
  [key: string]: JSX.Element[];
}

const generateOptions = (mappedData: { [key: string]: any }) => {
  const options: JSX.Element[] = [];
  Object.entries(mappedData).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Handle nested objects (e.g., mappedShips)
      options.push(
        <option value={key} key={key}>
          {value.name}
        </option>
      );
    } else {
      // Handle direct string mappings
      options.push(
        <option value={key} key={key}>
          {value}
        </option>
      );
    }
  });
  return options;
};


/* return an objectt of array of jsx componets from mappedFormOptions*/
const allOptions = Object.entries(mappedFormOptions).reduce<OptionElements>((acc , [key, value]) => {
  acc[key] =  generateOptions(value);
  return acc;
}, {});


console.log(allOptions);

export default function Form() {
  return (
    <>
      <h2 className="text-xl font-bold text-center text-gray-900 sm:text-2xl lg:text-4xl xl:text-5xl mt-6">
        Fomulario de Reporte de trabajo
      </h2>
      <form className="mb-10">
        {/* create a form whit empresa, centro, tipode jaula . fecha  */}
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Empresa" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-2 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="empresa" value="Empresa" />
                </div>
                <Select id="empresa"
                  
                  required
                >
                  <option value="0">Seleccione Empresa</option>
                  {allOptions.companies}
                </Select>
              </div>
              {/* formularion para centro  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="centro" value="Centro" />
                </div>
                <Select id="centro">
                  <option value="0">Seleccione Centro</option>
                  {allOptions.center}
                </Select>
              </div>
              {/* formularion para tipo de jaula  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="tipojaula" value="Tipo de jaula" />
                </div>
                <TextInput
                  id="tipojaula"
                  type="text"
                  placeholder="Tipo de jaula"
                  required
                />
              </div>
              {/* formularion para fecha  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fecha" value="Fecha" />
                </div>
                <Datepicker language="es" required />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>

        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Materiales" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-3 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="hilo" value="Hilo Lobero" />
                </div>
                <TextInput
                  id="hilo"
                  type="text"
                  placeholder="Indique Cantidad de Hilo"
                  required
                />
              </div>
              {/* formularion para centro  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Bencina" value="Bencina" />
                </div>
                <TextInput
                  id="Bencina"
                  type="text"
                  placeholder="Ingrese Bencina"
                  required
                />
              </div>
              {/* formularion para tipo de jaula  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="petroleo" value="Cantidad de Petróleo" />
                </div>
                <TextInput
                  id="petroleo"
                  type="text"
                  placeholder="Cantidad de Petróleo"
                  required
                />
              </div>
              {/* formularion para fecha  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="otros" value="Otros" />
                </div>
                <TextInput
                  id="otros"
                  type="text"
                  placeholder="Otros"
                  required
                />
              </div>
              {/* hora de inicio y hora de termino */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="horainicio" value="Hora de Inicio" />
                </div>
                <TextInput id="horainicio" type="time" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="horaTermino" value="Hora de Término" />
                </div>
                <TextInput id="horaTermino" type="time" required />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Datos Embarcación" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-2 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Encargado" value="Encargado" />
                </div>
                <TextInput
                  id="encargado "
                  type="text"
                  placeholder="Nombre Encargado"
                  required
                />
              </div>
              {/* formularion para centro  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Trabajos" value="Trabajos" />
                </div>
                <TextInput
                  id="Trabajos"
                  type="text"
                  placeholder="Ingrese Trabajos"
                  required
                />
              </div>
              {/* formularion para fecha  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Matricula" value="Matrícula" />
                </div>
                <TextInput
                  id="Matricula"
                  type="text"
                  placeholder="Matrícula Embarcación"
                  required
                />
              </div>
              {/* formularion para tipo de jaula  */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre Nave" value="Nombre Nave" />
                </div>
                <TextInput
                  id="Nombre Nave"
                  type="text"
                  placeholder="Ingrese Nombre Nave"
                  required
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>

        {/* Formulario para nombre de personal 6 entradas  */}
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Personal de Faena" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 xl:grid-cols-3 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre" value="Nombre" />
                </div>
                <TextInput
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre" value="Nombre" />
                </div>
                <TextInput
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre" value="Nombre" />
                </div>
                <TextInput
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre" value="Nombre" />
                </div>
                <TextInput
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre" value="Nombre" />
                </div>
                <TextInput
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nombre" value="Nombre" />
                </div>
                <TextInput
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="max-w-sm  md:max-w-xl xl:max-w-5xl mx-auto pt-6 "
        >
          <Tabs.Item title="Anotaciones" active={true} className="block">
            {/* titulo de formulario */}
            <div className="grid gap-6 mb-6 grid-cols-1">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="trabajosRealizados"
                    value="Trabajos Realizados"
                  />
                </div>
                <Textarea
                  id="trabajosRealizados"
                  placeholder="Ingrese el detalle de los trabajos realizados"
                  className="h-48 block w-full"
                  color="failure"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="observaciones"
                    value="Observaciones y/o Sugerencias"
                  />
                </div>
                <Textarea
                  id="observaciones"
                  placeholder="Ingrese Observaciones y/o Sugerencias"
                  className="h-24 block w-full"
                  required
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>

        <Button className="mx-auto" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
